window.JA = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl) {
    new JA.Routers.PostsRouter($rootEl);
    Backbone.history.start();
  }
};



