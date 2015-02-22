Template.themes.helpers({
  theme: function(){
    return Themes.find({}, {sort:{priorityCount: -1}});
  },

  isActive: function() {
    return Session.equals('activeItem', this._id);
  }
});

Template.themeContent.helpers({
  priorityCount: function() {
    var priorityCount = this.priority.length;
    return priorityCount;
  }
});

Template.themes.events({
  'click .mtr_show-theme': function() {
    Router.go('theme', {_id: this._id});
  }
});

Template.themeContent.events({
  'click .mtr_upvote': function() {
    if(_.contains(this.priority, Meteor.userId())) {
      Meteor.call('unUpVote', this._id, Meteor.userId());
    } else {
      Meteor.call('upVote', this._id, Meteor.userId());
    }
  }
});
