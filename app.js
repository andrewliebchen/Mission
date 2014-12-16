Themes = new Meteor.Collection('themes');
Tasks  = new Meteor.Collection('tasks');

if (Meteor.isClient) {
  Session.setDefault('activeItem', null);

  Template.newItem.helpers({
    activeNewItem: function() {
      return Session.get('activeNewItem');
    },

    isTheme: function() {
      if(Session.get('newItemType') === 'theme') {
        return true;
      }
    }
  });

  Template.themes.helpers({
    theme: function(){
      return Themes.find({}, {sort:{priorityCount: -1}});
    },

    isActive: function() {
      return Session.equals('activeItem', this._id);
    }
  });

  Template.tasks.helpers({
    todoTask: function() {
      return Tasks.find({status: 0}, {sort: {number: 1}});
    },

    doingTask: function() {
      return Tasks.find({status: 1}, {sort: {number: 1}});
    },

    doneTask: function() {
      return Tasks.find({status: 2}, {sort: {number: 1}});
    },

    acceptedTask: function() {
      return Tasks.find({status: 3}, {sort: {number: 1}});
    }
  });

  Template.addItem.events({
    'click .mtr_add-item': function() {
      Session.set('activeNewItem', true);
    }
  });

  Template.newItem.events({
    'click .mtr_close-new-item': function() {
      Session.set('activeNewItem', null);
    },

    'click .mtr_new-item-tab_theme': function() {
      Session.set('newItemType', 'theme');
    },

    'click .mtr_new-item-tab_task': function() {
      Session.set('newItemType', 'task');
    },

    'click .mtr_add-theme': function(event, template) {
      event.preventDefault();
      var newThemeTitle = template.find('#mtr_new-theme-title');
      var newThemeDescription = template.find('#mtr_new-theme-description');
      var newTheme = {
        title: newThemeTitle.value,
        description: newThemeDescription.value
      };

      if(newThemeTitle.value && newThemeDescription.value) {
        Meteor.call('newTheme', newTheme, function(error, id) {
          error ? console.log(error) : null;
        });

        Session.set('activeNewItem', null);
        newThemeTitle.value = '';
        newThemeDescription.value = '';
      }
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

  Template.task.events({
    'click .mtr_status-increment': function(event) {
      Meteor.call('statusIncrement', event.currentTarget.id);
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

  Meteor.publish('tasks', function(id) {
    return Tasks.find({parent: id});
  });

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
}
