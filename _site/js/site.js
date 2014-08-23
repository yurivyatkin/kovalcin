/* globals document, alert */

(function() {

  "use strict";

  var Site = {

    init: function() {
      this.kickOffAnimations();
      this.bindEventAnimations();
    },

    kickOffAnimations: function() {
      this.drawPath("shape-prism-1");
    },

    bindEventAnimations: function() {
      // var prism1 = document.getElementById("shape-prism-1");
      // prism1.addEventListener("mouseenter", function() {
      //   Site.drawPath("shape-prism-1");
      // });
    },

    drawPath: function(id) {

      var path = document.getElementById(id);

      var length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        "none";

      // Set up the starting positions
      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;

      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        "stroke-dashoffset 1s ease-in-out";
      // Go!
      path.style.strokeDashoffset = "0";

    }

  };

  Site.init();

})();
