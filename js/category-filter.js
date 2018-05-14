$(document).ready(function () {
    var checkedFilters = $('.category-products').find('#checked-filters');
    $(document).on('click', 'input[type=checkbox]', function () {
        if($(this)[0].checked === true){
            var newDiv = $(' <div class="category-products-filter-by">'+$(this)[0].value+'<button class="category-products-filter-by-btn-close" value="'+$(this).attr("id")+'">x</button></div>');
            checkedFilters.append(newDiv);
        }else{
          var checkboxId = $(this).attr("id");
          $('#checked-filters').find( "button[value='"+checkboxId+"']" ).parent().remove();
        }
    });
    $(document).on('click', '.category-products-filter-by-btn-close', function () {
        var inputId = '#' + $(this)[0].value;
        var parentText = $(this).parent()[0].innerText.replace('x','');
        $(inputId)[0].checked = false;
        $(this).parent().remove();
    })

});