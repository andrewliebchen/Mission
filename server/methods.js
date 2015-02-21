Meteor.methods({
  upVote: function(themeId) {
    Themes.update(themeId, {$inc: {priorityCount: 1}});
  },

  statusIncrement: function(taskId) {
    Tasks.update(taskId, {$inc: {status: 1}});
  },

  newTheme: function(newTheme) {
    var itemCount = (Themes.find({}).count()) + (Tasks.find({}).count());
    Themes.insert({
      title:         newTheme.title,
      description:   newTheme.description,
      number:        itemCount,
      priorityCount: 0
    });
  }
});
