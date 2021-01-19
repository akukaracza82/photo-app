$(document).ready(function() {

  var show_error, stripeResponseHandler, submitHandler;

  submitHandler = function (event) {

  var $form = $(event.target);

  $form.find("input[type=submit]").prop("disabled", true);

  //If Stripe was initialized correctly this will create a token using the credit card info

  if(Stripe){

  Stripe.card.createToken($form, stripeResponseHandler);

  } else {

  show_error("Failed to load credit card processing functionality. Please reload this page in your browser.")

  }

  return false;
  $(".cc_form").on('submit', submitHandler);
})
