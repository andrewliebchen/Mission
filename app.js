Themes = new Meteor.Collection('themes');
Tasks  = new Meteor.Collection('tasks');

if (Meteor.isClient) {
  Session.set('activeItem', null);

  Template.themes.helpers({
    theme: function(){
      return Themes.find({}, {sort:{priorityCount: -1}});
    },

    isActive: function() {
      return Session.equals('activeItem', this._id);
    }
  });

  Template.tasks.helpers({
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

  Template.addItem.events({
    'click .mtr_add-item': function() {
      console.log(Session.get('addItemType'));
    }
  });

  Template.themes.events({
    'click .mtr_show-theme': function() {
      Router.go('theme', {_id: this._id});
    },

    'click .mtr_upvote': function(event) {
      event.stopPropagation();
      Meteor.call('upVote', this._id);
    }
  });

  Template.task.events({
    'click .mtr_status-increment': function() {
      Meteor.call('statusIncrement', event.currentTarget.id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('themes', function() {
    return Themes.find({});
  });

  Meteor.publish('theme', function(id) {
    return id && Themes.find(id);
  });

  Meteor.publish('tasks', function(id) {
    return Tasks.find({parent: id});
  });

  Meteor.methods({
    upVote: function(themeId) {
      Themes.update(themeId, {$inc: {priorityCount: 1}});
    },

    statusIncrement: function(taskId) {
      Tasks.update(taskId, {$inc: {status: 1}});
    }
  });
}
