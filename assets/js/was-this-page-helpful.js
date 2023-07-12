$(function () {
  $('.feedback').fadeIn('slow').addClass('d-block').removeClass('d-none');
  $('.btn-feedback').click(function () {
    $('.btn-feedback').addClass('img-grayscale').attr('disabled', 'disabled');
    $('.feedback-thanks').fadeIn('slow').addClass('d-block');
  });
  $('.btn-feedback-helpful').click(function () {
    $('.feedback-helpful').fadeIn('slow').addClass('d-block');
    $('.feedback-helpful').removeClass('d-none');
  });
  $('.btn-feedback-not-helpful').click(function () {
    $('.feedback-not-helpful').fadeIn('slow').addClass('d-block');
    $('.feedback-not-helpful').removeClass('d-none');
  });
});
