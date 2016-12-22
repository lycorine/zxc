/* Login/Register Toggle */

(function($) {
  jQuery( "#login-btn" ).click(
    function() {
      event.preventDefault();
      jQuery( "#register-btn" ).removeClass( "active" );
      jQuery( "#login-btn" ).addClass( "active" );

      jQuery( "#register-form" ).removeClass( "active" );
      jQuery( "#login-form" ).addClass( "active" );
    });

  jQuery( "#register-btn" ).click(
    function() {
      event.preventDefault();
      jQuery( "#login-btn" ).removeClass( "active" );
      jQuery( "#register-btn" ).addClass( "active" );

      jQuery( "#login-form" ).removeClass( "active" );
      jQuery( "#register-form" ).addClass( "active" );
    });
})(jQuery);
