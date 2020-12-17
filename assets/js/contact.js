$(document).ready(function () {

  // メッセージ文表示
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScLHvIIJFwWTOEYHvctL_t7mbeu1Mu0b6BM7-LwPGsyAeH3wA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown(500);
          $(".c-form-submit-btn").fadeOut(100);
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown(200);
        }
      }
    });
    event.preventDefault();
  });

  // 全て入力するまで送信できなくする
  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });


});