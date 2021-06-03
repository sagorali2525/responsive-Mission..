$(document).ready(function(){

        // sticky top menu 
        $(window).scroll(function(){

          var scrolling = $(this).scrollTop();
          var stickyMenu = $('.navbar-light');
      
          if (scrolling >=100) {

            stickyMenu.addClass('nav-bg') ;  

          } else {
            stickyMenu.removeClass('nav-bg') ;
            
          }
        })
      

    // AOS-plaggin
AOS.init({
    duration:1000, 
});

// counter-up
$('.count-item').counterUp({
    time:2000
});

// progressbar
      $('.circlechart').circlechart()
     
    // popup
    $('.gallery-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    // popup
    $('.video').magnificPopup({
      type: 'iframe'
    });

    //jquary-plugin
    // init Isotope
var $grid = $('.gallery-container').isotope({

      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    
  });

  // filter items on button click
$('.filter-bar').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


  // filter items on button active
$('.filter-bar').on( 'click', 'button', function() {
  $(this).addClass('active').siblings().removeClass('active')
});


});
 