Meteor.publish('themes', function() {
  return Themes.find({});
});

Meteor.publish('theme', function(id) {
  return id && Themes.find(id);
});

Meteor.publish('themeTasks', function(id) {
  return Tasks.find({parent: id});
});

Meteor.publish('tasks', function() {
  return Tasks.find({});
});
