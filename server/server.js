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

// Better account, from http://moduscreate.com/diving-into-meteorjs/
Accounts.onCreateUser(function(options, user) {
  var accessToken = user.services.github.accessToken;
      result,
      profile;

  result = Meteor.http.get('https://api.github.com/user',{
    params : {
      access_token : accessToken
    },
    headers: {"User-Agent": "Meteor/1.0"}
  });

  if(result.error){
    console.log(result);
    throw result.error
  }

  profile = _.pick(result.data,
    'login',
    'name',
    'avatar_url',
    'url',
    'company',
    'blog',
    'location',
    'email',
    'bio',
    'html_url'
  );

  user.profile = profile;

  return user;
});
