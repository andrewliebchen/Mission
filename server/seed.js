function themeSeed() {
  return Themes.insert({
    title:         'Themes and teams',
    description:   'The app should focus on big product ideas and the groups of people that get those ideas done',
    number:        1,
    priorityCount: 0
  });
}

Meteor.startup(function() {
  Themes.remove({});
  Tasks.remove({});

  var themeId = themeSeed();
  var userId = "ZdhAMayCAhSMZ2Yr6";

  if(Tasks.find().count() === 0) {
    Tasks.insert({
      title:       'Add Themes so that I can keep track of them',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      2,
      status:      0,
      parent:      themeId,
      assignedTo:  false
    });

    Tasks.insert({
      title:       'View a list of all my ideas',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      3,
      status:      0,
      parent:      themeId,
      assignedTo:  false
    });

    Tasks.insert({
      title:       'Tag ideas so that I can organize them',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      4,
      status:      0,
      parent:      themeId,
      assignedTo:  userId
    });

    Tasks.insert({
      title:       'Add tasks to an idea so I know what needs needs to be done to complete an idea',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      5,
      status:      1,
      parent:      themeId,
      assignedTo:  userId
    });

    Tasks.insert({
      title:       'Start and stop working on task',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      6,
      status:      1,
      parent:      themeId,
      assignedTo:  userId
    });

    Tasks.insert({
      title:       'Vote on the priorityCount of tasks',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      7,
      status:      2,
      parent:      themeId,
      assignedTo:  userId
    });

    Tasks.insert({
      title:       'Vote on the level of efforts of tasks',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      8,
      status:      3,
      parent:      themeId,
      assignedTo:  userId
    });
  }
});
