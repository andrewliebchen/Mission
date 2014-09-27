Themes = new Meteor.Collection('themes');
Tasks  = new Meteor.Collection('tasks');

if (Meteor.isClient) {
  Session.set('showChat', null);
  Session.set('activeItem', null);
  Session.set('showTasks', null);

  Template.themes.theme = function() {
    return Themes.find({});
  };

  Template.themes.isActive = function() {
    return Session.equals('activeItem', this._id);
  }

  Template.themes.showTasks = function() {
    return Session.equals('showTasks', this._id);
  }

  Template.tasks.task = function() {
    return Tasks.find({}, {sort: {number: 1}});
  }

  Template.chat.showChat = function() {
    return !Session.equals('showChat', null);
  }

  Template.themes.events({
    'click .mtr_toggle-chat': function(event) {
      event.preventDefault();
      Session.set('showChat', this._id);
      Session.set('activeItem', this._id);
    },

    'click .mtr_show-tasks': function(event) {
      event.preventDefault();
      Session.set('showTasks', this._id);
      Session.set('activeItem', this._id);
    }
  });
}

if (Meteor.isServer) {

}
