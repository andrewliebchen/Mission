Session.setDefault('activeTab', null);

Template.application.events({
  'click [data-tab]' : function(event) {
    var $this = $(event.target);
    $this.closest('.tabs').find('.is-selected').removeClass('is-selected');
    $this.addClass('is-selected');
    Session.set('activeTab', $this.data('tab'));
  }
});

Template.tabPanes.helpers({
  activeTab: function() {
    return Session.get('activeTab');
  }
});
