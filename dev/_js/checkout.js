/* ==========================================================================
   Payment Type Select
========================================================================== */

(function($) {

  $("input[name=payment-type]:radio").click(function () {
    if ($('input[name=payment-type]:checked').val() === "credit-card") {
      $('#payment__credit-card').show();

    } else {
      $('#payment__credit-card').hide();
    }
  });
})(jQuery);
