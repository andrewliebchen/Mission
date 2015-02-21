Meteor.publish('themes', function() {
  return Themes.find({});
});

Meteor.publish('theme', function(id) {
  return id && Themes.find(id);
});

Meteor.publish('tasks', function(id) {
  return Tasks.find({parent: id});
});
