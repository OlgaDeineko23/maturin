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
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",
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
                    slidesToShow: 3
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
                breakpoint: 750,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
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

    // Mobile sous menu
    var mobileMenuModal = $('#mobileMenuModal');
    var defaultmobileMenuModalTitle = mobileMenuModal.find('.modal-title').text();
    var mobileMenuModalBackButton = mobileMenuModal.find('.modal-back-button')[0];

    $(document).on('click', '.sous-menu-mobile-item', function () {
        // mobileMenuModal.find('.modal-title').text($(this).find('.sous-submenu-mobile-title').text());
        var sousSubmenuMobileTitle = $(this).find('.sous-submenu-mobile-title').text();
        mobileMenuModal.find('.modal-title').fadeOut(300, function () {
            $(this).text(sousSubmenuMobileTitle).fadeIn(300);
        });

        mobileMenuModalBackButton.style.display = 'block';
        var defaultParentHTML = $(this).parent().html();
        var defaultParent = $(this).parent();
        // $(this).parent()[0].innerHTML = $(this).find('.sous-submenu-mobile-body')[0].innerHTML;
        var sousSubmenuMobileBody = $(this).find('.sous-submenu-mobile-body').html();
        $(this).parent().fadeOut(300, function () {
            $(this).html(sousSubmenuMobileBody).fadeIn(300);
        });


        $('.modal-back-button').on('click', function () {
            mobileMenuModalBackButton.style.display = 'none';
            mobileMenuModal.find('.modal-title').fadeOut(300, function () {
                $(this).text(defaultmobileMenuModalTitle).fadeIn(300);
            });

            defaultParent.fadeOut(300, function () {
                $(this).html(defaultParentHTML).fadeIn(300);
            });
        });

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
            $(this).siblings().hide('slow');
        } else {
            $('.product-property-description').hide('slow');
            $('.product-property-title').removeClass('product-open');
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
    } else {
        $(".header-slider-bg").attr("src", "./images/header/img1.png");
    }


    $(window).resize(function () {
        if ($(window).width() < 480) {
            $(".header-slider-bg").attr("src", "./images/header/img1-min.png");
        } else {
            $(".header-slider-bg").attr("src", "./images/header/img1.png");
        }
    });

});
