JA.Views.PostShow = Backbone.View.extend({
  render: function () {
    var that = this;
    this.$el.empty();
    this.$el.append(JST['post_show']({
      post: that.model
    }));

    return this;
  }
});