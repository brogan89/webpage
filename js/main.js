var feed = new Instafeed({
    get: 'user',
    limit: 12,
    userId: '20401021174',
    accessToken: '20401021174.1677ed0.7822cee968454bbb9b932d169072e20a',
    // template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
feed.run();