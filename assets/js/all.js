"use strict";

$(document).ready(function () {
  //下拉選單箭頭旋轉動畫
  $('.dropdown').click(function (e) {
    $('.caret').stop().toggleClass('caret-change__active');
  }); // 廣告視窗顯示

  $('.required--alert').slideDown(); // 點擊關閉廣告視窗

  $('.required--alert__close').click(function (e) {
    e.preventDefault();
    $('.required--alert').remove();
  }); //偵測滑鼠滾動顯示/隱藏

  $(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop(); // console.log(scrollHeight);
    //導覽列縮放效果

    if (scrollHeight > 200) {
      $('.nav--padding').addClass('nav--padding__change');
      $('body').addClass('banner--change');
    } else {
      $('.nav--padding').removeClass('nav--padding__change');
      $('body').removeClass('banner--change');
    } //顯示/隱藏廣告視窗


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
    $('html,body').stop().animate({
      scrollTop: 0
    }, 100);
  }); //服務項目移動動畫

  $('.btn--move').click(function (e) {
    e.preventDefault();
    var btnPosition = $(this).attr('href'); // console.log($(btnPosition).offset().top);

    $('html,body').stop().animate({
      scrollTop: $(btnPosition).offset().top - 100
    }, 100);
  }); //設計師作品-分頁點擊效果

  $('.page-link').click(function (e) {
    e.preventDefault(); //點擊分頁標籤-新增/移除class-active

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  }); //聯絡我們

  $('.btn--contact').click(function (e) {
    e.preventDefault();

    if ($('.name').val().trim() == '' || $('.email').val().trim() == '' || $('.phone').val().trim() == '' || $('.opinion').val().trim() == '') {
      alert('請填寫完整資料');
    } else {
      alert('謝謝您的建議');
      $('.name').val('');
      $('.email').val('');
      $('.phone').val('');
      $('.opinion').val('');
    }
  }); //lightbox-JS

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  }); //文章-加入收藏按鈕-動畫(移入移出)

  $('.blog--article').mouseover(function (e) {
    $(this).find('.card > .card--like').addClass('card--like__move');
  });
  $('.blog--article').mouseout(function (e) {
    $(this).find('.card > .card--like').removeClass('card--like__move');
  }); //文章-加入收藏按鈕-點擊換色

  $('.card--like').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('card--like__click');
  }); //視差滾動設定

  $('.parallax-window').parallax({
    imageSrc: './assets/images/banner.jpg'
  });
}); // 表單驗證JS
// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})(); //沒有箭頭、有進度條
//首頁-居家風格-swiper-電腦版


var swiper = new Swiper(".swiper--pagination", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); //有箭頭、有進度條、單排、無限制
//首頁-屋主評價-平板/手機版
//設計師作品-推薦設計師
//部落格-推薦文章
//公司介紹-設計師總攬

var swiper = new Swiper(".swiper--infinite-loop", {
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
}); //無箭頭、有進度條、三個一排
//公司介紹-企業合作
//設計作品-公司介紹-相關文章

var swiper = new Swiper(".swiper--slides-per-view", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); //幻燈片式swiper
//公司介紹-作品總攬-swiper

var swiper = new Swiper(".swiper--thumbs-gallery-loop__bottom", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".swiper--thumbs-gallery-loop__top", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
}); //有箭頭、有進度條、一排四個
//公司介紹-設計師總攬-swiper

var swiper = new Swiper(".swiper--infinite-loop-slides-per-group__4", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //有箭頭、有進度條、一排三個
//合作商家-商家swiper

var swiper = new Swiper(".swiper--infinite-loop-slides-per-group__3", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //vanillajs-datepicker

var datepickerMeasure = document.querySelector('input[name="datepickerMeasure"]');

if (datepickerMeasure) {
  var datepickerMeasureElem = new Datepicker(datepickerMeasure, {
    autohide: true,
    nextArrow: '>',
    prevArrow: '<'
  });
}

var datepickerConstruction = document.querySelector('input[name="datepickerConstruction"]');

if (datepickerConstruction) {
  var datepickerConstructionElem = new Datepicker(datepickerConstruction, {
    autohide: true,
    nextArrow: '>',
    prevArrow: '<'
  });
} //AOS效果


AOS.init(); // You can also pass an optional settings object
// below listed default settings

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

}); // //vanillajs-datepicker
// const datepickerMeasure = document.querySelector('input[name="datepickerMeasure"]');
// const datepickerMeasureElem = new Datepicker(datepickerMeasure, {
//     autohide: true,
//     nextArrow: '>',
//     prevArrow: '<'
// });
// const datepickerConstruction = document.querySelector('input[name="datepickerConstruction"]');
// const datepickerConstructionElem = new Datepicker(datepickerConstruction, {
//     autohide: true,
//     nextArrow: '>',
//     prevArrow: '<'
// });
//# sourceMappingURL=all.js.map
