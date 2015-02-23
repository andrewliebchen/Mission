function themeSeed() {
  return Themes.insert({
    title:       'Themes and teams',
    description: 'The app should focus on big product ideas and the groups of people that get those ideas done',
    number:      1,
    priority:    []
  });
}

Meteor.startup(function() {
  Themes.remove({});
  Tasks.remove({});
  Notes.remove({});

  var themeId = themeSeed();
  var userId = "ZdhAMayCAhSMZ2Yr6"; // Current user ID, don't hate because I'm stupid.

  if(Tasks.find().count() === 0) {
    Tasks.insert({
      title:       'Add Themes so that I can keep track of them',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      2,
      status:      0,
      parent:      themeId,
      assignedTo:  false,
      createdBy:   userId,
      createdAt:   Date.now()
    });

    Tasks.insert({
      title:       'View a list of all my ideas',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      3,
      status:      0,
      parent:      themeId,
      assignedTo:  false,
      createdBy:   userId,
      createdAt:   Date.now()
    });

    Tasks.insert({
      title:       'Tag ideas so that I can organize them',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      4,
      status:      0,
      parent:      themeId,
      assignedTo:  userId,
      createdBy:   userId,
      createdAt:   Date.now()
    });

    Tasks.insert({
      title:       'Add tasks to an idea so I know what needs needs to be done to complete an idea',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      5,
      status:      1,
      parent:      themeId,
      assignedTo:  userId,
      createdBy:   userId,
      createdAt:   Date.now()
    });

    Tasks.insert({
      title:       'Start and stop working on task',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      6,
      status:      1,
      parent:      themeId,
      assignedTo:  userId,
      createdBy:   userId,
      createdAt:   Date.now()
    });

    Tasks.insert({
      title:       'Vote on the priorityCount of tasks',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      7,
      status:      2,
      parent:      themeId,
      assignedTo:  userId,
      createdBy:   userId,
      createdAt:   Date.now()
    });

    Tasks.insert({
      title:       'Vote on the level of efforts of tasks',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      8,
      status:      3,
      parent:      themeId,
      assignedTo:  userId,
      createdBy:   userId,
      createdAt:   Date.now()
    });
  }

  if(Notes.find().count() === 0) {
    Notes.insert({
      parent:      themeId,
      createdBy:   userId,
      createdAt:   Date.now(),
      content:     'Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet.'
    });
  }
});
