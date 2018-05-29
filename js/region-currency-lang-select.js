$(document).ready(function () {
  var regionContainer = $('.modify-parameter-region');
  var currencyContainer = $('.modify-parameter-currency');
  var langContainer = $('.modify-parameter-lang');

  $( "form" ).submit(function( event ) {
    $.each($(this).serializeArray(), function( index, value ) {
      switch (value.name) {
        case 'region':
          regionContainer.text(value.value.toUpperCase());
          break;
        case 'currency':
          currencyContainer.text(value.value.toUpperCase());
          break;
        case 'lang':
          langContainer.text(value.value.toUpperCase());
      }
      $('#modifiezVosParamètres').modal('hide');
    });
    event.preventDefault();
  });
});

