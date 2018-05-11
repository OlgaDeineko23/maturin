$(document).ready(function () {
  // init sliders
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
    focusOnSelect: false,
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
    focusOnSelect: false,
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
    focusOnSelect: false,
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
  $('.vous-aimeriez-aussi').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: false,
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
  // sliders arrows
  $('.slick-prev').append('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
  $('.slick-next').append('<i class="fa fa-chevron-right" aria-hidden="true"></i>');

  // show buttons on slide hover effect
  $(".product-image").mouseover(function () {
    $(".product-btn").css("display", "block");
  });

  // Stars hover efect
  $('ul.rating li').hover(function(){
    var id      = $('a', this).attr('id');
    var counter = 1;
    var salt    = $(this).attr('class');
    var parent = $(this).parent();
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
    // Sous menu
    $('.sous-menu-main li.sous-menu-main-item').mouseover(function () {
        $(this).parent().find('.default').removeClass("active");
        $(this).children().css( "display", "block");
        $(this).addClass("active");
    }).mouseleave(function () {
        $(this).removeClass("active");
        if($(this).children()[1]){
            $(this).children()[1].style.display = 'none';
        }
        $(this).parent().find('.default').addClass("active");
    });

    $('.sous-menu-main-item-wm').mouseover(function () {
        $(this).parent().find('.default').addClass("active");
    });

    // Mobile sous menu
    var mobileMenuModal = $('#mobileMenuModal');
    var defaultmobileMenuModalTitle = mobileMenuModal.find('.modal-title')[0].textContent;
    var mobileMenuModalBackButton = mobileMenuModal.find('.modal-back-button')[0];

    $(document).on('click','.sous-menu-mobile-item', function () {
        mobileMenuModal.find('.modal-title')[0].textContent = $(this).find('.sous-submenu-mobile-title')[0].textContent;
        mobileMenuModalBackButton.style.display = 'block';
        var defaultParentHTML = $(this).parent()[0].innerHTML;
        var defaultParent = $(this).parent()[0];
        $(this).parent()[0].innerHTML = $(this).find('.sous-submenu-mobile-body')[0].innerHTML;
        $('.modal-back-button').on('click', function () {
            mobileMenuModalBackButton.style.display = 'none';
            mobileMenuModal.find('.modal-title')[0].textContent = defaultmobileMenuModalTitle;
            defaultParent.innerHTML = defaultParentHTML;
        });

    });


    // Open login\registration modal with specific tab
    $('.se-connecter-button').on('click',function (e) {
        e.preventDefault();
        $('#pills-tab a[href="#pills-login"]').tab('show')
    });
    $('.sinscrire-button').on('click',function (e) {
        e.preventDefault();
        $('#pills-tab a[href="#pills-register"]').tab('show')
    });

  // Go to shop page
  $( ".goToCategoryPage" ).click(function() {
    location.href = location.origin + '/maturin/' + 'category.html';
  });
  // Go to main page
  $( ".goToHomePage" ).click(function() {
    location.href = location.origin + '/maturin/';
  });

// Go to product page
  $(".product-btn").on('click', function (e) {
    if (!$(e.target).is(".product-btn-overview") && !$(e.target).is(".product-btn-like") && !$(e.target).is(".product-btn-add-to-cart")) {
      location.href = location.origin + '/maturin/product.html';
    };
  });
// Produt page gallery
    $(".gallery-thumb").on('click', 'a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
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
    $('.gallery-image li').click(function() {
        var image = $(this).find('img').attr('src');
        $('#product').append('<div class="product-zoom"><img src="' + image + '" alt="product zoom"></div>');
        $('.product-info').hide();
        $('.product-zoom img').click(function(e) {
            e.stopPropagation();
            $(this).parent().remove();
            $('.product-info').show();
        });
    });
});
