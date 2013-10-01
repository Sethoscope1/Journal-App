window.JA = {
  Collections: {},
  Models: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl) {

    var postCollection = new JA.Collections.Posts();


    $.ajax ({
      url: postCollection.url,
      dataType: "json",
      success: function(resp) {
        var models = [];
        resp.forEach(function(post) {
          models.push(new JA.Models.Post(post));

          // postCollection.create(post);
        });
        postCollection.add(models);

        var postIndex = new JA.Views.PostIndex({
          collection: postCollection
        });

        postIndex.listenTo(postCollection, "remove", postIndex.render);

        $rootEl.append(postIndex.render().$el);
      }

    });
  }
};



