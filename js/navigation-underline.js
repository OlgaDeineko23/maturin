$(function() {
    $(window).resize(function() {
        $magicLinetop
            .width($("#example-two .current_page_item").width())
            .css("left", $("#example-two .current_page_item a.nav-link").offset().left)
            .data("origLeft", $("#example-two .current_page_item a.nav-link").offset().left)
            .data("origWidth", $magicLinetop.width());
    });
// HEADER-MENU-TOP

    var $eltop, leftPostop, newWidthtop,
        $mainNavtop = $("#example-two");

    $mainNavtop.append("<li class='magic-line'></li>");
    var $magicLinetop = $("#example-two .magic-line");
    $magicLinetop
        .width($("#example-two .current_page_item").width())
        .css("left", $("#example-two .current_page_item a.nav-link").offset().left)
        .data("origLeft", $("#example-two .current_page_item a.nav-link").offset().left)
        .data("origWidth", $magicLinetop.width());

    $("#example-two li a.nav-link").hover(function() {
        $eltop = $(this);
        leftPostop = $eltop.offset().left;
        newWidthtop = $eltop.parent().width();
        $magicLinetop.stop().animate({
            left: leftPostop,
            width: newWidthtop
        });
    }, function() {
        $magicLinetop.stop().animate({
            left: $magicLinetop.data("origLeft"),
            width: $magicLinetop.data("origWidth")
        });
    });





    // for Firefox
  $("#example-two li button").hover(function() {
    $eltop = $(this);
    leftPostop = $eltop.offset().left;
    newWidthtop = $eltop.parent().width();
    $magicLinetop.stop().animate({
      left: leftPostop,
      width: newWidthtop
    });
  }, function() {
    $magicLinetop.stop().animate({
      left: $magicLinetop.data("origLeft"),
      width: $magicLinetop.data("origWidth")
    });
  });
});
