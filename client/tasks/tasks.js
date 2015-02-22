Session.setDefault('tasksFilter', null);

Template.tasksBoard.helpers({
  todoTask: function() {
    return Tasks.find({status: 0}, {sort: {number: 1}});
  },

  doingTask: function() {
    return Tasks.find({status: 1}, {sort: {number: 1}});
  },

  doneTask: function() {
    return Tasks.find({status: 2}, {sort: {number: 1}});
  },

  acceptedTask: function() {
    return Tasks.find({status: 3}, {sort: {number: 1}});
  }
});

Template.tasksToolbar.helpers({
  boardUser: function() {
    var tasks = Tasks.find({}).fetch();
    var assignedToArray = _.uniq(tasks, false, function(task) {
      return task.assignedTo;
    });
    var distinctAssignedTo = _.pluck(assignedToArray, 'assignedTo');
    return _.map(distinctAssignedTo, function(assignedTo) {
      return assignedTo ? Meteor.users.findOne({_id: assignedTo}) : null;
    });
  },

  isSelected: function() {
    return Session.equals('tasksFilter', this._id);
  }
});

Template.task.helpers({
  isNotFiltered: function() {
    return Session.equals('tasksFilter', this.assignedTo) || Session.equals('tasksFilter', null);
  },

  avatarUrl: function() {
    var assignedTo = this.assignedTo;
    return Meteor.users.findOne({_id: assignedTo}).profile.avatar_url;
  }
});

Template.tasksToolbar.events({
  'click .mtr_filter-board-users': function() {
    if(Session.get('tasksFilter') === this._id) {
      Session.set('tasksFilter', null);
    } else {
      Session.set('tasksFilter', this._id);
    }
  }
});

Template.task.events({
  'click .mtr_status-increment': function(event) {
    Meteor.call('statusIncrement', this.taskId);
  }
});
