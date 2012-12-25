requirejs.config(requirejsConfig);

requirejs(['jquery'],
function(   $   ) {

  $(function() {
    $('select:visible').select2();
  });

});
