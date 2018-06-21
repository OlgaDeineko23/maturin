$(document).ready(function () {
  var checkedFilters = $('.category-products').find('#checked-filters');
// CHECKBOX FILTERS
  $(document).on('click', '.not-mobile input[type=checkbox]', function () {
    var elementIdModal = '#mobileFilterModal #' + $(this).attr("id");
    if ($(this)[0].checked === true) {
      var newDiv = $(' <div class="category-products-filter-by">' + '<span>'+$(this)[0].value+'</span>' + '<button class="category-products-filter-by-btn-close" value="' + $(this).attr("id") + '"></button></div>');
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
      $(this).addClass('underline-effect');
    } else {
      var parentsTextArray = [];
      $(this).parents("div[class^='category-product-filter-hierarchy']").each(function () {
        parentsTextArray.push(transformText($(this).find('.category-product-filter-hierarchy-title').first().text()).replace(/\n/g, ''));
        });
      var textForBtn = parentsTextArray.reverse().join('&nbsp; >> &nbsp;');
      var newDiv = $(' <div class="category-products-filter-by">' + '<span>'+textForBtn+'</span>' + '<button class="category-products-filter-by-btn-close" value="' + $(this).attr("id") + '"></button></div>');
      checkedFilters.append(newDiv);
      $(this).addClass('active');
      $(this).removeClass('underline-effect');
    }
  });

  // MOBILE CHECKBOX FILTERS
  var filtersIDArrayCheckbox = [];
  var filtersIDArrayText = [];
  $(document).on('click', '#mobileFilterModal input[type=checkbox]', function () {
    filtersIDArrayCheckbox.push({id: $(this).attr("id"), value: $(this)[0].value, checked: $(this)[0].checked});
  });
// MOBILE TEXT FILTERS
  $(document).on('click', '#mobileFilterModal .text-filter', function () {
    var parentsTextArray = [];
    $(this).parents("div[class^='category-product-filter-hierarchy']").each(function () {
      parentsTextArray.push(transformText($(this).find('.category-product-filter-hierarchy-title').first().text()).replace(/\n/g, ''));
    });
    var textForBtn = parentsTextArray.reverse().join('&nbsp; >> &nbsp;');
    filtersIDArrayText.push({id: $(this).attr("id"), value: textForBtn, activeClass: $(this).hasClass('active')});
  });

  $(document).on('click', '#mobileFilterModal .cancel-filter', function () {
    $.each(filtersIDArrayCheckbox, function (index, value) {
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
    var uniquefiltersIDArrayText = unique(filtersIDArrayText);
    if (uniquefiltersIDArrayText.length > 0) {
      $.each(uniquefiltersIDArrayText, function (index, value) {
        var elementId = '.not-mobile #' + value.id;
        var elementIdModal = '#mobileFilterModal #' + value.id;
        switch (value.activeClass) {
          case true:
            $('#checked-filters').find("button[value='" + value.id + "']").parent().remove();
            $(elementId).removeClass('active');
            $(elementId).addClass('underline-effect');
            $(elementIdModal).removeClass('active');
            $(elementIdModal).addClass('underline-effect');
            break;
          case false:
            var newDiv = $(' <div class="category-products-filter-by">' + '<span>'+value.value+'</span>' + '<button class="category-products-filter-by-btn-close" value="' + value.id + '"></button></div>');
            checkedFilters.append(newDiv);
            $(elementId).addClass('active');
            $(elementId).removeClass('underline-effect');
            $(elementIdModal).addClass('active');
            $(elementIdModal).removeClass('underline-effect');
            break;
        }
      });
      filtersIDArrayText = [];
    }
    if (filtersIDArrayCheckbox.length > 0) {
      $.each(filtersIDArrayCheckbox, function (index, value) {
        var elementId = '.not-mobile #' + value.id;
        switch (value.checked) {
          case true:
            var newDiv = $(' <div class="category-products-filter-by">' +'<span>'+ value.value+'</span>' + '<button class="category-products-filter-by-btn-close" value="' + value.id + '"></button></div>');
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
    if($(filterId)[0].checked){
      $(filterId)[0].checked = false;
      $(filterIdMobile)[0].checked = false;
    }
    $(this).parent().remove();
    if ($(filterId).hasClass('active')) {
      $(filterId).removeClass('active');
    }

    if ($(filterIdMobile).hasClass('active')) {
      $(filterIdMobile).removeClass('active');
    }
  });

  //HIERARCHICAL FILTER CATEGORY PAGE
  $(document).on('click', '.category-product-filter-hierarchy-title', function () {
    if ($(this).parent().hasClass("category-product-filter-hierarchy")) {
      $(this).addClass('active');
      $(this).parent().children('.category-product-filter-hierarchy-l2').show();
      $(this).parent().children('.category-product-filter-hierarchy-back-btn').show();
      $(this).parent().children('.category-product-filter-hierarchy-back-btn').find('i').css('color', 'white');
      $(this).parent().siblings().hide();
      $('#category-header-breadcrumb-l1 a').text(transformText($(this).text()));
      $('#category-header-breadcrumb-l1').show();
      $('#category-header-breadcrumb-l2').hide();
      $('#category-header-breadcrumb-l3').hide();
    } else if ($(this).parent().parent().hasClass("category-product-filter-hierarchy-l2")){
      $(this).addClass('active');
      $(this).parent().parent().children('.category-product-filter-hierarchy-l3').show();
      $(this).parent().parent().children('.category-product-filter-hierarchy-back-btn').show();
      $(this).parent().parent().siblings(".category-product-filter-hierarchy-l2").hide();
      $('#category-header-breadcrumb-l2 a').text(transformText($(this).text()));
      $('#category-header-breadcrumb-l2').show();
      $('#category-header-breadcrumb-l3').hide();

    } else if ($(this).parent().parent().hasClass("category-product-filter-hierarchy-l3")){
      checkedFilters.children('.category-products-filter-by').remove();
      $(this).addClass('active');
      $(this).parent().parent().children('.category-product-filter-hierarchy-l4').show();
        $(this).parent().parent().siblings('.category-product-filter-hierarchy-l3').children('.category-product-filter-hierarchy-l4').hide();
      $(this).parent().parent().siblings('.category-product-filter-hierarchy-l3').find('.category-product-filter-hierarchy-title').removeClass('active');
      $(this).parent().parent().siblings('.category-product-filter-hierarchy-l3').find('.category-product-filter-hierarchy-back-btn').hide();
      $('#category-header-breadcrumb-l3 a').text(transformText($(this).text()));
      $('#category-header-breadcrumb-l3').show();

    } else if ($(this).parent().parent().hasClass("category-product-filter-hierarchy-l4")){
      $(this).siblings().children().find('.category-product-filter-hierarchy-title').removeClass('active');
      $(this).parent().parent().parent().siblings().children().find('.category-product-filter-hierarchy-title').removeClass('active');
      $(this).parent().parent().parent().siblings().children('.category-product-filter-hierarchy-l4').hide();
    }
  });
  $(document).on('click', '.category-product-filter-hierarchy-back-btn', function () {
    checkedFilters.children('.category-products-filter-by').remove();
    if ($(this).parent().hasClass("category-product-filter-hierarchy")){
      $(this).parent().siblings().show();
      $(this).siblings().hide();
      $(this).hide();
      $(this).siblings('.category-product-filter-hierarchy-title').show();
      $(this).siblings('.category-product-filter-hierarchy-title').removeClass('active');
      $('.category-header-breadcrumb-wrapper').hide();
    }else{
      $(this).siblings().hide();
      $(this).siblings('.underline-effect-wrapper').show();
      $(this).hide();
      $(this).siblings('.underline-effect-wrapper').children().find('.category-product-filter-hierarchy-title').removeClass('active');
      var parentClass = '.' + $(this).parent().attr('class');
      $(this).parent().siblings(parentClass).show();
      if($(this).parent().attr('class') === 'category-product-filter-hierarchy-l2'){
        $('#category-header-breadcrumb-l2').hide();
        $('#category-header-breadcrumb-l3').hide();
      }else if($(this).parent().attr('class') === 'category-product-filter-hierarchy-l3'){
        $('#category-header-breadcrumb-l3').hide();
      }
      $(this).parent().find(".category-product-filter-hierarchy-title").removeClass('active');
    }
  });

  function transformText(text) {
    var s = text.toLowerCase();
    s = s.charAt(0).toUpperCase() + s.substr(1);
    return s;
  }
});

function unique(myArr, prop) {
  return myArr.filter(function (obj, pos, arr) {
    return arr.map(function (mapObj) {
      return mapObj[prop];
    }).indexOf(obj[prop]) === pos;
  });
}