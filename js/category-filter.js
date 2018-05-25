$(document).ready(function () {
    var checkedFilters = $('.category-products').find('#checked-filters');
// CHECKBOX FILTERS
    $(document).on('click', 'input[type=checkbox]', function () {
        if ($(this)[0].checked === true) {
            var newDiv = $(' <div class="category-products-filter-by">' + $(this)[0].value + '<button class="category-products-filter-by-btn-close" value="' + $(this).attr("id") + '">x</button></div>');
            checkedFilters.append(newDiv);
        } else {
            var checkboxId = $(this).attr("id");
            $('#checked-filters').find("button[value='" + checkboxId + "']").parent().remove();
        }
    });
// TEXT FILTERS
    $(document).on('click', '.text-filter', function () {
        if ($(this).hasClass('active')) {
            var textFeildId = $(this).attr("id");
            $('#checked-filters').find("button[value='" + textFeildId + "']").parent().remove();
            $(this).removeClass('active');
        } else {
            var newDiv = $(' <div class="category-products-filter-by">' + $(this).text() + '<button class="category-products-filter-by-btn-close" value="' + $(this).attr("id") + '">x</button></div>');
            checkedFilters.append(newDiv);
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.category-products-filter-by-btn-close', function () {
        var filterId = '#' + $(this)[0].value;
        var parentText = $(this).parent()[0].innerText.replace('x', '');
        $(filterId)[0].checked = false;
        $(this).parent().remove();
        if($(filterId).hasClass('active')){
            $(filterId).removeClass('active');
        }
    });

});