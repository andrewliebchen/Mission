Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('themes');
    },
    data: function() {
      Session.set('newItemType', 'theme');
      return Themes.find({});
    }
  });

  this.route('theme', {
    path: '/themes/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('theme', this.params._id),
        Meteor.subscribe('themeTasks', this.params._id)
      ];
    },
    data: function() {
      // Session.set('currentTheme', this.params._id);
      Session.set('newItemType', 'task');
      return Themes.findOne(this.params._id);
    },
    onStop: function() {
      // Session.set('currentTheme', null);
    }
  });

  this.route('tasks', {
    path: '/tasks/',
    waitOn: function() {
      return Meteor.subscribe('tasks');
    },
    data: function() {
      Session.set('newItemType', 'task');
      return Tasks.find({});
    }
  });
});
