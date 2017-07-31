
(function($){

  // kick in the action when the DOM is loaded
  $(window).load(function(){

    // extra load time for your eyes only!
    setTimeout(function() {

      // remove "pulsate" animation from logo
      $('#logo').removeClass('active')

      // kick in the transistions
      $('#loadWrapper, #overlay').addClass('loaded');

    }, 2000);

    // hide load elements from DOM
    setTimeout( "$('#loadWrapper').addClass('hide')", 4000 );
    setTimeout( "$('#logo').addClass('hide')", 4500 );
    setTimeout( "$('#overlay').addClass('hide')",  5000);

    // remove load elements from DOM
    setTimeout( "$('#load').remove();", 6150 );
    setTimeout("$('.pg-container').fadeIn();", 4900);

  });

})(jQuery);
