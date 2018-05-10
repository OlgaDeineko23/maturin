$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#example-one");

    $mainNav.append("<li class='magic-line'></li>");
    var $magicLine = $(".magic-line");
    $magicLine
        .width($("#example-one .current_page_item").width())
        .css("left", $("#example-one .current_page_item a.nav-link").offset().left)
        .data("origLeft", $("#example-one .current_page_item a.nav-link").offset().left)
        .data("origWidth", $magicLine.width());

    $("#example-one li.nav-item a.nav-link").hover(function() {
        console.log($(this))
        $el = $(this);
        leftPos = $el.offset().left;
        newWidth = $el.parent().width();
        // console.log($(this),$el.position(), leftPos, newWidth)
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
        if($el[0].className.includes("active")){
            $magicLine.css("background", "#f0632f");
        }else{
            $magicLine.css("background", "black");
        }
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
        $magicLine.css("background", "black");
    });

    var $eltop, leftPostop, newWidthtop,
        $mainNavtop = $("#example-two");

    $mainNavtop.append("<li class='magic-line'></li>");
    var $magicLinetop = $("#example-two .magic-line");
    $magicLinetop
        .width($("#example-two .current_page_item").width())
        .css("left", $("#example-two .current_page_item a").offset().left)
        .data("origLeft", $("#example-two .current_page_item a").offset().left)
        .data("origWidth", $magicLinetop.width());

    $("#example-two li a").hover(function() {
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