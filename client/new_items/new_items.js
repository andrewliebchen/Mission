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
