Template.themes.helpers({
  theme: function(){
    return Themes.find({}, {sort:{priorityCount: -1}});
  },

  isActive: function() {
    return Session.equals('activeItem', this._id);
  }
});

Template.themes.events({
  'click .mtr_show-theme': function() {
    Router.go('theme', {_id: this._id});
  },

  'click .mtr_upvote': function(event) {
    event.stopPropagation();
    Meteor.call('upVote', this._id);
  }
});
