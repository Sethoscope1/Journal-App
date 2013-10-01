JA.Views.PostShow = Backbone.View.extend({
  render: function () {
    var that = this;
    this.$el.empty();
    this.$el.append(
      '<h1>' + that.model.get('title') + '</h1>' +
      '<p>' + that.model.get('body') + '</p>'
    );
    this.$el.append('<a href="/">Back</a>');

    return this;
  }
});