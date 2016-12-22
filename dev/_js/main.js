/* ==========================================================================
   Mobile Menu
========================================================================== */
(function($) {
  $( "#mobile-menu-open" ).click(
    function() {
      event.preventDefault();
      $( "#mobile-toggle-menu" ).slideToggle();
    });

  $( "#mobile-menu-close" ).click(
    function() {
      event.preventDefault();
      $( "#mobile-toggle-menu" ).slideUp();
    });

  $( ".menu-link---dropdown" ).click(
    function() {
      event.preventDefault();
      $( this ).next( ".sub-menu" ).slideToggle();
    });
})(jQuery);

/* ==========================================================================
   Modal
========================================================================== */

(function($) {
  $( ".btn--open-modal" ).click(
    function() {
      event.preventDefault();
      var modalID = this.getAttribute('data-modal');

      $( "#" + modalID ).addClass( "active" );
    });

  $( ".modal-window-close" ).click(
    function() {
      event.preventDefault();
      $( ".modal" ).removeClass( "active" );
    });
})(jQuery);

