$(function () {
  // 「#nav-btn」のclickイベント
  $("#nav-btn").on("click", function () {
    if (!$(".header__nav").hasClass("is_active")) {
      $(".header__nav").addClass("is_active");
      $(".header__btn").addClass("is_active");
      $(".c-burger").addClass("is_active");
    } else {

      $(".header__nav").removeClass("is_active");
      $(".header__btn").removeClass("is_active");
      $(".c-burger").removeClass("is_active");
    }
  });

  $('.header__nav a[href]').on('click', function (event) {
    $('#nav-btn').trigger('click');
  });

  // 画面サイズがPC以上になったらサイドバーを開いた状態でもPC用のデフォルト画面に戻す;
  var $win = $(window);

  $win.on("load resize", function () {
    var windowWidth = window.innerWidth;

    if (windowWidth >= 961) {
      // PCの処理
      $(".header__nav").removeClass("is_active");
      $(".header__btn").removeClass("is_active");
      $(".c-burger").removeClass("is_active");
    }
  });
});