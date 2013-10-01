JA.Routers.PostsRouter = Backbone.Router.extend ({

  routes: {
    "":                      "postsIndex",
    "posts/new":             "postForm",
    "posts/:id":             "postShow"

  },

  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
    this.collection = new JA.Collections.Posts();
    this.collection.fetch();
  },

  postsIndex: function() {

    var that = this;
    that.$rootEl.empty();

    console.log("You moved, man");

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
  },

  postForm: function (id) {
    var that = this;
    this.$rootEl.empty();

    if (typeof id !== 'undefined') {
      //edit
      var post = this.collection.get(id);
    }

    var postForm = new JA.Views.PostForm({
      model: post,
      collection: that.collection
    });

    this.$rootEl.append(postForm.render().$el);
  }

});