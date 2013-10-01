JA.Routers.PostsRouter = Backbone.Router.extend ({

  routes: {
    "":                     "postsIndex",
    "posts/:id":             "postShow"
  },

  initialize: function($rootEl, collection) {
    this.$rootEl = $rootEl;
    this.collection = collection
  },

  postsIndex: function() {

    var that = this;
    that.$rootEl.empty();

    var postIndex = new JA.Views.PostIndex({
      collection: that.collection
    });

    that.$rootEl.append(postIndex.render().$el);
  },

  postShow: function(id) {

    var that = this;
    that.$rootEl.empty();

    var post = that.collection.get(id);

    var postShow = new JA.Views.PostShow({
      model: post
    });

    that.$rootEl.append(postShow.render().$el);
  }

});