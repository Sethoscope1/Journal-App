JA.Views.PostIndex = Backbone.View.extend({
  initialize: function () {
    var that = this;
    that.listenTo(that.collection, "remove", that.render);
    that.listenTo(that.collection, "change:title", that.render);
    that.listenTo(that.collection, "add", that.render);
    that.listenTo(that.collection, "reset", that.render);
  },

  render: function () {
    var $ul = $("<ul>", {});
    this.$el.empty();
    this.collection.models.forEach(function(post) {
      $ul.append('<li>' + post.get("title") +
        '<button class="delete-button" data-id=' +
        post.get("id") +
        '>Delete Me!</button></li>')
    });
    this.$el.append($ul);
    var that = this;
    return this;
  },

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