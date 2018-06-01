$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val(),
            'class': 'selected-' + $this.children('option').eq(i)[0].selected
        }).appendTo($list);
    }

    var $listItems = $list.children('li');
    $('#modifiezVosParamètres').on('shown.bs.modal', function () {
        $.each($listItems, function( index, value ) {
            if($(this).hasClass('selected-true')){
                $styledSelect.text($(this).text());
                $(this).css('background', '#e6e6e6');
                var selectedItem = $(this);
                $(this).siblings().mouseover(function() {
                    selectedItem.css('background', 'white');
                    selectedItem.mouseover(function() {
                        selectedItem.css('background', '#e6e6e6');
                    });
                });
            }
        });
    })


    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $(this).removeClass('selected-false');
        $(this).addClass('selected-true');

        $(this).siblings().removeClass('selected-true');
        $(this).siblings().addClass('selected-false');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});