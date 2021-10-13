"use strict";

//居家風格-swiper-電腦版
var swiper = new Swiper(".swiper--room-style__lg", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); //屋主評價-swiper-平板/手機版

var swiper = new Swiper(".swiper--recommend__sm", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
$(document).ready(function () {
  // 廣告視窗顯示
  $('.required--alert').slideDown(); // 點擊關閉廣告視窗

  $('.required--alert__close').click(function (e) {
    e.preventDefault();
    $('.required--alert').remove();
  }); //偵測滑鼠滾動顯示/隱藏

  $(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop(); // console.log(scrollHeight);
    //顯示/隱藏廣告視窗

    if (scrollHeight < 3970) {
      $('.required--alert').slideDown();
    } else {
      $('.required--alert').slideUp();
    } //顯示/隱藏右側icon列表


    if (scrollHeight > 500) {
      $('.nav--icon').fadeIn();
    } else {
      $('.nav--icon').fadeOut();
    }
  }); //點擊回到最上層

  $('.scroll--top-btn').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});
//# sourceMappingURL=all.js.map
