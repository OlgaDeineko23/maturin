$(document).ready(function () {
    $('.header-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: true,
        arrows: true
    });
    $('.produit-en-vedette').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
      responsive: [
          {
              breakpoint: 750,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 570,
              settings: {
                  slidesToShow: 2
              }
          }
      ]
  });
  $('.produit-a-proximite').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
      responsive: [
          {
              breakpoint: 750,
              settings: {
                  slidesToShow: 2
              }
          }
      ]
  });
  $('.parcourir-par-catégories').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
      responsive: [
          {
              breakpoint: 1300,
              settings: {
                  slidesToShow: 6
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 4
              }
          },
          {
              breakpoint: 750,
              settings: {
                  slidesToShow: 3
              }
          }
      ]
  });
  $('.slick-prev').append('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  $('.slick-next').append('<i class="fa fa-chevron-right" aria-hidden="true"></i>');

  $(".product-image").mouseover(function () {
    $(".product-btn").style.display = 'block';
  });
  $('ul.rating li').hover(function(){
    console.log("hover");
    var id      = $('a', this).attr('id');
    var counter = 1;
    var salt    = $(this).attr('class');
    var parent = $(this).parent();
    console.log('ul.rating li#'+id);
    $('a').removeClass("starHover");
    $('li.'+salt, parent).each(function(i){
      if (id >= counter) {
        $('a#'+counter, parent).addClass("starHover");
      } else {
        $('a#'+counter, parent).removeClass("starHover");
      }
      counter++;
    });
  });
    $( ".goToCategoryPage" ).click(function() {
        location.href = location.origin + '/maturin/' + 'category.html';
    });
    $( ".goToHomePage" ).click(function() {
        location.href = location.origin + '/maturin/';
    });

    $('.sous-menu-main li').mouseover(function () {
        $(this).children().css( "display", "block");
    }).mouseleave(function () {
        if($(this).children()[1]){
            $(this).children()[1].style.display = 'none';
        }
    });
    $('.product-property-title').click(function() {
        if ($(this).hasClass('product-open')) {
            $('.product-property-description').hide();
            $('.product-property-title').removeClass('product-open');
            $(this).siblings().hide();
        } else {
        $('.product-property-description').hide();
        $('.product-property-title').removeClass('product-open');
        $(this).addClass('product-open');
        $(this).siblings().show();
    }
    });
});

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    var warningMessage = $('.email-incorrect')[0];
    if(re.test(email) === false){
        warningMessage.style.opacity = 1;
    }else {
        warningMessage.style.opacity = 0;
    }
    console.log(re.test(email));
}