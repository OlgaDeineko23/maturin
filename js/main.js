$(document).ready(function () {
  // init sliders
  $('.header-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
  });
  $('.produit-en-vedette').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: false,
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          arrows: false
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
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          arrows: false
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
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
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
          slidesToShow: 3,
          arrows: false
        }
      }
    ]
  });
  $('.vous-aimeriez-aussi').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: false,
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
          centerMode: true
        }
      }
    ]
  });

  $('.product-image-wrapper').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoHeight: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  }).on("dragged.owl.carousel", function (event) {
    if (event.relatedTarget['_drag']['direction'] === 'left') {
      $('.owl-theme .owl-nav .owl-next').css('opacity', '1');
      $('.owl-theme .owl-nav .owl-prev').css('opacity', '0');
    } else {
      $('.owl-theme .owl-nav .owl-prev').css('opacity', '1');
      $('.owl-theme .owl-nav .owl-next').css('opacity', '0');
    }
  });


  // show buttons on slide hover effect
  $(".product-image").mouseover(function () {
    $(".product-btn").css("display", "block");
  });

  // Stars hover efect
  $('ul.rating li').hover(function () {
    var id = $('a', this).attr('id');
    var counter = 1;
    var salt = $(this).attr('class');
    var parent = $(this).parent();
    $('a').removeClass("starHover");
    $('li.' + salt, parent).each(function (i) {
      if (id >= counter) {
        $('a#' + counter, parent).addClass("starHover");
      } else {
        $('a#' + counter, parent).removeClass("starHover");
      }
      counter++;
    });
  });
  // Sous menu
  $('.sous-menu-main li.sous-menu-main-item').mouseover(function () {
    $(this).parent().find('.default').removeClass("active");
    $(this).children().css("display", "block");
    $(this).addClass("active");
  }).mouseleave(function () {
    $(this).removeClass("active");
    if ($(this).children()[1]) {
      $(this).children()[1].style.display = 'none';
    }
    $(this).parent().find('.default').addClass("active");
  });

  $('.sous-menu-main-item-wm').mouseover(function () {
    $(this).parent().find('.default').addClass("active");
  });


  // Open login\registration modal with specific tab
  $('.se-connecter-button').on('click', function (e) {
    e.preventDefault();
    $('#pills-tab a[href="#pills-login"]').tab('show')
  });
  $('.sinscrire-button').on('click', function (e) {
    e.preventDefault();
    $('#pills-tab a[href="#pills-register"]').tab('show')
  });

  // Go to shop page
  $(".goToCategoryPage").click(function () {
    location.href = location.origin + '/maturin/' + 'category.html';
  });
  // Go to main page
  $(".goToHomePage").click(function () {
    location.href = location.origin + '/maturin/';
  });

// Go to product page
  $(".product-btn").on('click', function (e) {
    if (!$(e.target).is(".product-btn-overview") && !$(e.target).is(".product-btn-like") && !$(e.target).is(".product-btn-add-to-cart")) {
      location.href = location.origin + '/maturin/product.html';
    }
  });

// Produt page gallery
  $(".gallery-thumb").on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 600);
  });

  $('.product-property-title').click(function () {
    if ($(this).hasClass('product-open')) {
      $('.product-property-description').hide('slow');
      $('.product-property-title').removeClass('product-open');
      $(this).find('.product-property-icon img').attr("src", "./images/icons/open-menu.svg");
      $(this).siblings().hide('slow');
      $(this).parent().siblings().find('.product-property-icon img').attr("src", "./images/icons/open-menu.svg");
    } else {
      $('.product-property-description').hide('slow');
      $('.product-property-title').removeClass('product-open');
      $(this).find('.product-property-icon img').attr("src", "./images/icons/close-menu.svg");
      $(this).parent().siblings().find('.product-property-icon img').attr("src", "./images/icons/open-menu.svg");
      $(this).addClass('product-open');
      $(this).siblings().show('slow');
    }
  });
  $('.gallery-image li').click(function () {
    var image = $(this).find('img').attr('src');
    $('#product').append('<div class="product-zoom"><img src="' + image + '" alt="product zoom"></div>');
    $('body, html').scrollTop(0);
    $('.product-info').hide();
    $('.product-zoom img').click(function (e) {
      e.stopPropagation();
      $(this).parent().remove();
      $('.product-info').show();
    });
  });

  //ADDED SPACE TO THE HEADER TITLE
  $.fn.mathSpace = function () {
    return $(this).each(function () {
      $(this).children('span').each(function () {
        var el = $(this);
        var text = el.text();
        el.text(
          text.split(' ').join('\u205f')
        );
      });
    });
  };

  $('.header-slider-caption-title').mathSpace();
  $('.category-header-top-caption').mathSpace();

  // Change header slider image on mobile screen
  if ($(window).width() < 480) {
    $(".header-slider-bg").attr("src", "./images/header/img1-min.png");
    $(".category-header-top-img").attr("src", "./images/header/header2-min.png");
  } else {
    $(".header-slider-bg").attr("src", "./images/header/img1.png");
    $(".category-header-top-img").attr("src", "./images/header/header2.png");
  }


  $(window).resize(function () {
    if ($(window).width() < 480) {
      $(".header-slider-bg").attr("src", "./images/header/img1-min.png");
      $(".category-header-top-img").attr("src", "./images/header/header2-min.png");
    } else {
      $(".header-slider-bg").attr("src", "./images/header/img1.png");
      $(".category-header-top-img").attr("src", "./images/header/header2.png");
    }
  });

//SHOW/HIDE COMMENTS ON PRODUCT PAGE (MOBILE)
  if ($(window).width() < 750) {
    $('article:gt(-3)').hide();
  }

  $('.product-property-more-btn').on('click', function () {
    if ($(this).hasClass('more')) {
      $('article:gt(-3)').show('slow');
      $(this).removeClass('more');
      $(this).addClass('less');
      $(this).text('- Moins d’avis');
    } else {
      $('article:gt(-3)').hide('slow');
      $(this).removeClass('less');
      $(this).addClass('more');
      $(this).text('+ Plus d’avis');
    }

  });
});