$(document).ready(function () {
    var checkedFilters = $('.category-products').find('#checked-filters');
    $(document).on('click', 'input[type=checkbox]', function () {
        if($(this)[0].checked === true){
            var newDiv = $(' <div class="category-products-filter-by">'+$(this)[0].value+'<button class="category-products-filter-by-btn-close">x</button></div>');
            checkedFilters.append(newDiv);
        }else{
            var checkboxValue = $(this)[0].value;
            $('#checked-filters').find( "div:contains("+checkboxValue+")" ).remove();
        }
    });
    $(document).on('click', '.category-products-filter-by-btn-close', function () {
        var parentText = $(this).parent()[0].innerText.replace('x','');
        $("input[type='checkbox'][value='"+parentText+"']")[0].checked = false;
        $(this).parent().remove();
    })

});