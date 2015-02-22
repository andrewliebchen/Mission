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

Template.task.helpers({
  avatarUrl: function() {
    var assignedTo = this.assignedTo;
    return Meteor.users.findOne({_id: assignedTo}).profile.avatar_url;
  }
});

Template.task.events({
  'click .mtr_status-increment': function(event) {
    Meteor.call('statusIncrement', this.taskId);
  }
});
