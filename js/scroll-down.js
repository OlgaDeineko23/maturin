$(document).ready(function() {

  $(window).scroll( function(){

    $('.masonry-layout__panel').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight()-300;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){

        $(this).animate({'opacity':'1'},500);

      }

    });

  });

});