$(document).ready(function () {
    var checkedFilters = $('.category-products').find('#checked-filters');
// CHECKBOX FILTERS
    $(document).on('click', '.not-mobile input[type=checkbox]', function () {
        var elementIdModal = '#mobileFilterModal #' + $(this).attr("id");
        if ($(this)[0].checked === true) {
            var newDiv = $(' <div class="category-products-filter-by">' + $(this)[0].value + '<button class="category-products-filter-by-btn-close" value="' + $(this).attr("id") + '">x</button></div>');
            checkedFilters.append(newDiv);
            $(elementIdModal)[0].checked = true;
        } else {
            var checkboxId = $(this).attr("id");
            $('#checked-filters').find("button[value='" + checkboxId + "']").parent().remove();
            $(elementIdModal)[0].checked = false;
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
            var elementId = '.not-mobile #' + value.id;
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
                var elementId = '.not-mobile #' + value.id;
                var elementIdModal = '#mobileFilterModal #' + value.id;
                switch (value.activeClass) {
                    case true:
                        $('#checked-filters').find("button[value='" + value.id + "']").parent().remove();
                        $(elementId).removeClass('active');
                        $(elementIdModal).removeClass('active');
                        break;
                    case false:
                        var newDiv = $(' <div class="category-products-filter-by">' + value.value + '<button class="category-products-filter-by-btn-close" value="' + value.id + '">x</button></div>');
                            checkedFilters.append(newDiv);
                        $(elementId).addClass('active');
                        $(elementIdModal).addClass('active');
                        break;
                }
            });
            filtersIDArrayText = [];
        }
        if(filtersIDArrayCheckbox.length > 0){
            $.each(filtersIDArrayCheckbox, function( index, value ) {
                var elementId = '.not-mobile #' + value.id;
                switch (value.checked) {
                    case true:
                        var newDiv = $(' <div class="category-products-filter-by">' + value.value + '<button class="category-products-filter-by-btn-close" value="' + value.id + '">x</button></div>');
                        checkedFilters.append(newDiv);
                        $(elementId)[0].checked = true;
                        break;
                    case false:
                        $('#checked-filters').find("button[value='" + value.id + "']").parent().remove();
                        $(elementId)[0].checked = false;
                        break;
                }
            });
            filtersIDArrayCheckbox = [];
        }
        $('#mobileFilterModal').modal('hide');
    });

// MOBILE TEXT FILTERS

    $(document).on('click', '.category-products-filter-by-btn-close', function () {
        var filterId = '.not-mobile #' + $(this)[0].value;
        var filterIdMobile = '#mobileFilterModal #' + $(this)[0].value;
        var parentText = $(this).parent()[0].innerText.replace('x', '');
        $(filterId)[0].checked = false;
        $(filterIdMobile)[0].checked = false;
        $(this).parent().remove();
        if($(filterId).hasClass('active')){
            $(filterId).removeClass('active');
        }

        if($(filterIdMobile).hasClass('active')){
            $(filterIdMobile).removeClass('active');
        }
    });

    //HIERARCHICAL FILTER CATEGORY PAGE
    $(document).on('click', '.category-product-filter-hierarchy', function () {
        $(this).addClass('active');
        $(this).children('.category-product-filter-hierarchy-l2').show();
        $(this).children('.category-product-filter-hierarchy-back-btn').show();
        $(this).siblings().hide();
        // console.log($(this).children('.category-product-filter-hierarchy-l2'))
    });

    $(document).on('click', '.category-product-filter-hierarchy-l2', function () {
        $(this).children('.category-product-filter-hierarchy-l3').show();
        $(this).children('.category-product-filter-hierarchy-back-btn').show();
        $(this).parent().siblings('div.category-product-filter-hierarchy-l2').hide();
        $(this).siblings().find('.category-product-filter-hierarchy-l2').hide();
        $(this).addClass('active');
    });

    $(document).on('click', '.category-product-filter-hierarchy-l3', function () {
        $(this).addClass('active');
        $(this).children('.category-product-filter-hierarchy-l4').show();
        $(this).children('.category-product-filter-hierarchy-back-btn').show();
    });

    $(document).on('click', '.category-product-filter-hierarchy-l4', function () {
        $(this).children().find('.category-product-filter-hierarchy-title').addClass('active');
    });
});