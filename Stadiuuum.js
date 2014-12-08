Themes = new Meteor.Collection('themes');
Tasks  = new Meteor.Collection('tasks');

if (Meteor.isClient) {
  Session.set('activeItem', null);

  Template.themes.helpers({
    theme: function(){
      return Themes.find({});
    },

    isActive: function() {
      return Session.equals('activeItem', this._id);
    }
  });

  Template.tasks.helpers({
    task: function() {
      return Tasks.find({}, {sort: {number: 1}});
    }
  });

  Template.themes.events({
    'click .mtr_toggle-chat': function(event) {
      event.preventDefault();
      Session.set('showChat', this._id);
      Session.set('activeItem', this._id);
    },

    'click .mtr_show-theme': function(event) {
      event.preventDefault();
      Router.go('theme', {_id: this._id});
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

  Meteor.publish('tasks', function() {
    return Tasks.find({});
  });
}
