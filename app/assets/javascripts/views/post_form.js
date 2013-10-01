JA.Views.PostForm = Backbone.View.extend({

  events: {
    "submit #post_form": "submit"
  },

  submit: function (event) {
    var that = this;
    event.preventDefault();
    var postInfo = $(event.currentTarget).serializeJSON();
    console.log('submit');
    var post = new JA.Models.Post();
    post.save(postInfo.post, {
      success: function() {
        console.log("here");
        that.collection.add(post);
        Backbone.history.navigate('#/');
      },
      error: function() {
        that.model = post;
        that.render();
        console.log('error');
      }
    });
  },

  render: function () {
    var model = this.model || new JA.Models.Post();
    this.$el.empty();
    this.$el.append(JST['post_form']({
      post: model
    }));

    return this;
  }

});