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
      return Tasks.find({status: 'todo'}, {sort: {number: 1}});
    },

    doingTask: function() {
      return Tasks.find({status: 'doing'}, {sort: {number: 1}});
    },

    doneTask: function() {
      return Tasks.find({status: 'done'}, {sort: {number: 1}});
    },

    acceptedTask: function() {
      return Tasks.find({status: 'accepted'}, {sort: {number: 1}});
    }
  });

  Template.themes.events({
    'click .mtr_show-theme': function(event) {
      event.preventDefault();
      Router.go('theme', {_id: this._id});
    },

    'click .mtr_upvote': function(event) {
      event.stopPropagation();
      Meteor.call('upVote', this._id);
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
    }
  });
}
