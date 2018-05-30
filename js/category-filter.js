$(document).ready(function () {
    var checkedFilters = $('.category-products').find('#checked-filters');
// CHECKBOX FILTERS
    $(document).on('click', '.not-mobile input[type=checkbox]', function () {
        if ($(this)[0].checked === true) {
            var newDiv = $(' <div class="category-products-filter-by">' + $(this)[0].value + '<button class="category-products-filter-by-btn-close" value="' + $(this).attr("id") + '">x</button></div>');
            checkedFilters.append(newDiv);
        } else {
            var checkboxId = $(this).attr("id");
            $('#checked-filters').find("button[value='" + checkboxId + "']").parent().remove();
        }
    });
// TEXT FILTERS
    $(document).on('click', '.not-mobile .text-filter', function () {
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

    // MOBILE CHECKBOX FILTERS
    var filtersIDArrayCheckbox = [];
    var filtersIDArrayText = [];
    $(document).on('click', '#mobileFilterModal input[type=checkbox]', function () {
        filtersIDArrayCheckbox.push({id: $(this).attr("id"), value:$(this)[0].value, checked:$(this)[0].checked});
    });
// MOBILE TEXT FILTERS
    $(document).on('click', '#mobileFilterModal .text-filter', function () {
        filtersIDArrayText.push({id: $(this).attr("id"), value:$(this).text(), activeClass:$(this).hasClass('active')});
    });

    $(document).on('click', '#mobileFilterModal .cancel-filter', function () {
        $.each(filtersIDArrayCheckbox, function( index, value ) {
            var elementId = '#' + value.id;
            var elementIdModal = '#mobileFilterModal #' + value.id;
            switch (value.checked) {
                case true:
                    $(elementId)[0].checked = false;
                    $(elementIdModal)[0].checked = false;
                    break;
                case false:
                    $(elementId)[0].checked = true;
                    $(elementIdModal)[0].checked = true;
                    break;
            }
        });
        filtersIDArrayCheckbox = [];
        filtersIDArrayText = [];
        $('#mobileFilterModal').modal('hide')
    });

    $(document).on('click', '#mobileFilterModal .apply-filter', function () {
        if(filtersIDArrayText.length > 0){
            $.each(filtersIDArrayText, function( index, value ) {
                var elementId = '#' + value.id;
                switch (value.activeClass) {
                    case true:
                        $('#checked-filters').find("button[value='" + value.id + "']").parent().remove();
                        $(elementId).removeClass('active');
                        break;
                    case false:
                        var newDiv = $(' <div class="category-products-filter-by">' + value.value + '<button class="category-products-filter-by-btn-close" value="' + value.id + '">x</button></div>');
                            checkedFilters.append(newDiv);
                        $(elementId).addClass('active');
                        break;
                }
            });
            filtersIDArrayText = [];
        }
        if(filtersIDArrayCheckbox.length > 0){
            $.each(filtersIDArrayCheckbox, function( index, value ) {
                var elementId = '#' + value.id;
                switch (value.checked) {
                    case true:
                        var newDiv = $(' <div class="category-products-filter-by">' + value.value + '<button class="category-products-filter-by-btn-close" value="' + value.id + '">x</button></div>');
                        checkedFilters.append(newDiv);
                        break;
                    case false:
                        $('#checked-filters').find("button[value='" + value.id + "']").parent().remove();
                        break;
                }
            });
            filtersIDArrayCheckbox = [];
        }
        $('#mobileFilterModal').modal('hide');
    });

// MOBILE TEXT FILTERS

    $(document).on('click', '.category-products-filter-by-btn-close', function () {
        var filterId = '#' + $(this)[0].value;
        var filterIdMobile = '#mobileFilterModal #' + $(this)[0].value;
        var parentText = $(this).parent()[0].innerText.replace('x', '');
        $(filterId)[0].checked = false;
        $(filterIdMobile)[0].checked = false;
        $(this).parent().remove();
        if($(filterId).hasClass('active')){
            $(filterId).removeClass('active');
        }
    });

});