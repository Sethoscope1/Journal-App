window.JA = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($content, $sidebar) {
    new JA.Routers.PostsRouter($content, $sidebar);
    Backbone.history.start();
  }
};



