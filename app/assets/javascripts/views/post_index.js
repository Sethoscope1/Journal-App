JA.Views.PostIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    that.listenTo(that.collection, "remove", that.render);
    that.listenTo(that.collection, "change:title", that.render);
    that.listenTo(that.collection, "add", that.render);
    that.listenTo(that.collection, "reset", that.render);
  },

  render: function () {
    var that = this;
    this.$el.empty();
    this.$el.append(JST["post_index"]({
      posts: that.collection.models
    }));
    return this;
  },


  //  dat.$el.append(JST["photo_detail"]({

  events: {
    'click .delete-button': "collectionRemovePost",
  },

  collectionRemovePost: function(event) {
    var id = $(event.currentTarget).data("id");
    var post = this.collection.get(id);
    console.log(this.collection);
    this.collection.remove(post);
    post.destroy();
  }
});