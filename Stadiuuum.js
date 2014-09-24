Ideas = new Meteor.Collection('ideas');
Tasks = new Meteor.Collection('tasks');
Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  Template.ideas.idea = function() {
    return Ideas.find({});
  };

  Template.tasks.task = function() {
    return Tasks.find({}, {sort: {number: 1}});
  }
}

if (Meteor.isServer) {

}
