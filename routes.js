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
    path: '/theme/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('theme', this.params._id),
        Meteor.subscribe('tasks', this.params._id)
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
});
