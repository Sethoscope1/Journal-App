JA.Views.PostIndex = Backbone.View.extend({

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
    return this;
  },

  events: {
    'click .delete-button': "collectionRemovePost"
  },

  collectionRemovePost: function(event) {
    console.log('click');
    var id = $(event.currentTarget).data("id");
    var post = this.collection.get(id);
    console.log(this.collection);
    this.collection.remove(post);
    post.destroy();
  }

});