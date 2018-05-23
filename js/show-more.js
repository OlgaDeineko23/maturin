var text = $('.text-overflow'),
  btn = $('.btn-overflow'),
  h = text[0].scrollHeight;

if(h > 70) {
  btn.addClass('less');
  btn.css('display', 'block');
}

btn.click(function(e)
{
  e.stopPropagation();

  if (btn.hasClass('less')) {
    btn.removeClass('less');
    btn.addClass('more');
    btn.text('Less');

    text.animate({'height': h});
  } else {
    btn.addClass('less');
    btn.removeClass('more');
    btn.text('+ Plus');
    text.animate({'height': '70px'});
  }
});