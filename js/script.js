/* ハンバーガーメニュー */
$(function () {
    $('.menu').on('click', function () {
    $(this).toggleClass('open');
    $("#nav").toggleClass('active');
    })
});
$(function () {
    $('#nav a').on('click', function () {
    $('#nav').toggleClass('active');
      $(".menu").toggleClass('active');
    })
  });

