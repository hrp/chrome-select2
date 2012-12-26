requirejs.config(requirejsConfig);

requirejs(['jquery'],
function(   $   ) {

  var selectize = function() {
    $(function() {
      $('select:visible').select2();
    })
  };

  if ($('select:visible').length > 0) {
    $('<div style="position:absolute; top: 5px; right: 5px; background-color: pink; cursor: pointer">Select2</div>')
      .appendTo('body')
      .on('click', function() { 
        selectize();
        $(this).css('background-color', 'red');
      });
  }

});
