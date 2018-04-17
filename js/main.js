$(document).ready(function () {
  $('.produit-en-vedette').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true
  });
  $('.parcourir-par-catégories').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    arrows: true
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
});