JA.Routers.PostsRouter = Backbone.Router.extend ({

  routes: {
    "":                      "postsIndex",
    "posts/new":             "postForm",
    "posts/edit/:id":        "postForm",
    "posts/:id":             "postShow"


  },

  initialize: function($content, $sidebar) {
    this.$content = $content;
    this.$sidebar = $sidebar;
    this.collection = new JA.Collections.Posts();
    this.collection.fetch();
    this.postsIndex();
  },

  postsIndex: function() {

    var that = this;
    that.$sidebar.empty();
    that.$content.empty();

    console.log("You moved, man");

    var postIndex = new JA.Views.PostIndex({
      collection: that.collection
    });

    that.$sidebar.append(postIndex.render().$el);
  },

  postShow: function(id) {

    var that = this;
    that.$content.empty();

    var post = that.collection.get(id);

    var postShow = new JA.Views.PostShow({
      model: post
    });

    that.$content.append(postShow.render().$el);
  },

  postForm: function (id) {
    var that = this;
    this.$content.empty();

    if (typeof id !== 'undefined') {
      //edit
      var post = new Post;
      console.log(that.collection);
      console.log(post);
    }

    var postForm = new JA.Views.PostForm({
      model: post,
      collection: that.collection
    });

    this.$content.append(postForm.render().$el);
  }

});