window.JA = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl) {
    var postCollection = new JA.Collections.Posts();
    postCollection.fetch({
      success: function () {
        new JA.Routers.PostsRouter($rootEl, postCollection);
        Backbone.history.start();
      }
    });
  }
};



