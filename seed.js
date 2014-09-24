if (Meteor.isServer) {
  if(Ideas.find().count() === 0) {
    Ideas.insert({
      title:       'A project management system that minimally tracks the entire product life cycle, from idea to development to documentation',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      tag:         'big idea',
      number:      1,
      priority:    0
    });
  }

  if(Tasks.find().count() === 0) {
    Tasks.insert({
      title:       'Add ideas so that I can keep track of them',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      2,
      priority:    0,
      loe:         0
    });

    Tasks.insert({
      title:       'View a list of all my ideas',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      3,
      priority:    0,
      loe:         0
    });

    Tasks.insert({
      title:       'Tag ideas so that I can organize them',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      4,
      priority:    0,
      loe:         0
    });

    Tasks.insert({
      title:       'Add tasks to an idea so I know what needs needs to be done to complete an idea',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      5,
      priority:    0,
      loe:         0
    });

    Tasks.insert({
      title:       'Start and stop working on task',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      6,
      priority:    0,
      loe:         0
    });

    Tasks.insert({
      title:       'Vote on the priority of tasks',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      7,
      priority:    0,
      loe:         0
    });

    Tasks.insert({
      title:       'Vote on the level of efforts of tasks',
      description: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.',
      number:      8,
      priority:    0,
      loe:         0
    });
  }
}
