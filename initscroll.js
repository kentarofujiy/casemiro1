$(document).ready(function() {

    /*
     * Inicializacao do scroll
     */
    $('#pagepiling').pagepiling({
      direction: 'vertical',
      menu: '#menu',
      scrollingSpeed: 2000,
      normalScrollElements: 'true',
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
      sectionsColor: ['black', '#4D4D4D', '#F27B1D', '#39C', '#1C252C', '#F27B1D', '#39C'],
      navigation: {
        'position': 'right',
        'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4','page5', 'page6', 'page7']
      },
      afterRender: function() {
        $('#pp-nav').addClass('custom');
        console.log("After Render ");

      },
      afterLoad: function(anchorLink, index) {

        console.log("Carregou" + index);
        if (index == 1) {

          console.log("index " + index);
        } else if (index == 2) {

        }

        if (index > 1) {
          $('#pp-nav').removeClass('custom');
        } else {
          $('#pp-nav').addClass('custom');
        }
      },
      onLeave: function(index, nextIndex, direction) {
        console.log("Carregou " + index);
        if (index == 1) {
  
          $("#block").animate({
            width: "0%"
          }, 1000, function() {
            console.log("animation finished");
            $.fn.pagepiling.setScrollingSpeed(500);

          });

        } else if (index == 2 && nextIndex == 1) {

          $("#block").animate({
            width: "0%"
          }, 3000, function() {
            console.log("animation finished");
            $.fn.pagepiling.setScrollingSpeed(2000);

          });

        }
        else if ( index >= 3 && index <= 6 ) {

          $("#block").animate({
            width: "0%"
          }, 3000, function() {
            console.log("animation finished");
            $.fn.pagepiling.setScrollingSpeed(2000);

          });

        }

      }

    });
  });