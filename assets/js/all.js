"use strict";

/*-------------------jquery-------------------*/
$(document).ready(function () {
  /*-------------------導覽列-------------------*/
  // 下拉選單箭頭-點擊開啟旋轉動畫
  $('.dropdown').click(function (e) {
    $('.caret').stop().toggleClass('caret__change--active');
  });
  /*-------------------下方廣告視窗-------------------*/
  // 預設廣告視窗顯示

  $('.required__alert').slideDown(); // 點擊按鈕關閉廣告視窗

  $('.required__alert--close').click(function (e) {
    e.preventDefault();
    $('.required__alert').remove();
  });
  /*-------------------偵測頁面位置-------------------*/
  //偵測頁面滾動位置來顯示/隱藏內容

  $(window).scroll(function (e) {
    var scrollHeight = $(this).scrollTop(); // console.log(scrollHeight);
    //導覽列縮放效果

    if (scrollHeight > 200) {
      //如果頁面到達指定位置，使導覽列padding縮小
      $('.nav__padding').addClass('nav__padding--change');
    } else {
      //如果頁面回到上層位置，取消padding縮小效果
      $('.nav__padding').removeClass('nav__padding--change');
    } //廣告視窗顯示/隱藏效果


    if (scrollHeight < 3970) {
      //如果頁面要到footer的位置時，隱藏廣告視窗
      $('.required__alert').slideDown();
    } else {
      //如果頁面離開footer或還沒到達footer位置時，顯示廣告視窗
      $('.required__alert').slideUp();
    } //顯示/隱藏右側icon列表


    if (scrollHeight > 500) {
      //如果頁面往下移動到某個距離，顯示右側的icon列表
      $('.nav__icon').fadeIn();
    } else {
      //如果頁面還沒移動到指定距離，則不顯示右側的icon列表
      $('.nav__icon').fadeOut();
    }
  });
  /*-------------------animate效果-------------------*/
  //點擊回到最上層

  $('.scroll__top-btn').click(function (e) {
    e.preventDefault();
    $('html,body').stop().animate({
      scrollTop: 0
    }, 1000);
  }); //服務項目-點擊移動到該服務項目的位置

  $('.btn--move').click(function (e) {
    e.preventDefault();
    var btnPosition = $(this).attr('href'); // console.log($(btnPosition).offset().top);

    $('html,body').stop().animate({
      scrollTop: $(btnPosition).offset().top - 100
    }, 1000);
  });
  /*-------------------分頁點擊效果-------------------*/
  //設計師作品-點擊分頁並標示目前分頁位置

  $('.page-link').click(function (e) {
    e.preventDefault(); //點擊分頁標籤-新增/移除class-active

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });
  /*-------------------自訂表單驗證-------------------*/
  //聯絡我們-偵測欄位是否有填寫，沒有填寫則跳出警告視窗

  $('.contact__btn').click(function (e) {
    e.preventDefault();

    if ($('.name').val().trim() == '' || $('.email').val().trim() == '' || $('.phone').val().trim() == '' || $('.opinion').val().trim() == '') {
      alert('請填寫完整資料');
    } else {
      //資料填寫完整，送出後清空欄位資料
      alert('謝謝您的建議');
      $('.name').val('');
      $('.email').val('');
      $('.phone').val('');
      $('.opinion').val('');
    }
  });
  /*-------------------部落格文章收藏按鈕設定-------------------*/
  //hover效果

  $('.blog__article').mouseover(function (e) {
    //如果滑鼠移動到文章區塊上，讓按鈕出現
    $(this).find('.card > .card__like').addClass('card__like--move');
  });
  $('.blog__article').mouseout(function (e) {
    //如果滑鼠離開文章區塊，讓按鈕消失
    $(this).find('.card > .card__like').removeClass('card__like--move');
  }); //點擊效果

  $('.card__like').click(function (e) {
    //點擊收藏按鈕，使用toggleClass來改變按鈕顏色
    e.preventDefault();
    $(this).toggleClass('card__like--click');
  });
  /*-------------------視差滾動預設內容-------------------*/
  //視差滾動設定

  $('.parallax-window').parallax({
    imageSrc: './assets/images/banner.jpg'
  });
  /*-------------------lightbox-JS預設內容-------------------*/
  //lightbox-JS

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
});
/*-------------------javascript-------------------*/

/*-------------------bootstrap-------------------*/
//表單驗證

(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
/*-------------------swiper相關設定-------------------*/

/*-------------------swiper(沒有箭頭、有進度條)-------------------*/
//首頁-居家風格-swiper-電腦版


var swiper = new Swiper(".swiper--pagination", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
/*-------------------swiper(有箭頭、有進度條、單排(直向)、無限輪播)-------------------*/
//首頁-屋主評價-平板/手機版
//設計師作品-推薦設計師
//部落格-推薦文章
//公司介紹-設計師總攬

var swiper = new Swiper(".swiper__infinite-loop", {
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
/*-------------------swiper(有箭頭、有進度條、三個一排(橫向)、無限輪播)-------------------*/
//合作商家-商家swiper

var swiper = new Swiper(".swiper__infinite-loop-slides-per-group--3", {
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
});
/*-------------------swiper(無箭頭、有進度條、三個一排呈現(橫向)、定點停止)-------------------*/
//公司介紹-企業合作
//設計作品-公司介紹-相關文章

var swiper = new Swiper(".swiper__slides-per-view", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
/*-------------------swiper(有箭頭、有進度條、四個一排呈現(橫向)、定點停止)-------------------*/
//公司介紹-設計師總攬-swiper

var swiper = new Swiper(".swiper__infinite-loop-slides-per-group--4", {
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
});
/*-------------------swiper(幻燈片)-------------------*/
//公司介紹-作品總攬-swiper

var swiper = new Swiper(".swiper__thumbs-gallery-loop--bottom", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".swiper__thumbs-gallery-loop--top", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
});
/*-------------------vanillajs-datepicker-------------------*/

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
}
/*-------------------AOS效果-------------------*/


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

});
//# sourceMappingURL=all.js.map
