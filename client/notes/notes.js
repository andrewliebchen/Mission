Session.setDefault('editingNote', null);

Template.notes.helpers({
  note: function() {
    return Notes.find({});
  }
});

Template.noteContent.helpers({
  editing: function() {
    return Session.equals('editingNote', this._id);
  }
});

Template.noteContent.events({
  'click .mtr_notes-editing-toggle': function(template) {
    if(Session.get('editingNote')) {
      Meteor.call('updateNoteContent', this._id, {
        content: document.getElementById('mtr_note-editor').value,
        updatedAt: Date.now()
      });
      Session.set('editingNote', null);
    } else {
      Session.set('editingNote', this._id);
    }
  }
});
