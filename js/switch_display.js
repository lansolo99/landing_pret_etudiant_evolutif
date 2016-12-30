//Tablet and beyond
enquire.register("screen and (min-width: 768px)", {

    match : function() {
          console.log("desktop");
          jQuery("#insert").detach().appendTo('.segment.hero .wrapper');
          jQuery("#thematiques").detach().insertAfter('.segment.presentation .message');
          jQuery("#separator").detach().insertAfter('.segment.presentation .message');
    },


});

//Mobile
enquire.register("screen and (max-width: 767px)", {

    match : function() {
      console.log("mobile");
          jQuery("#insert").detach().insertBefore('.segment.presentation .message');
          jQuery("#thematiques").detach().prependTo('.segment.presentation .produit');
          jQuery("#separator").detach().insertBefore('.segment.presentation .message');
    },


});
