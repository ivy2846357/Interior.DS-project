// 表單驗證JS
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

//沒有箭頭、有進度條
//首頁-居家風格-swiper-電腦版
var swiper = new Swiper(".swiper--pagination", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//有箭頭、有進度條、單排、無限制
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
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//無箭頭、有進度條、三個一排
//公司介紹-企業合作
//設計作品-公司介紹-相關文章
var swiper = new Swiper(".swiper--slides-per-view", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//幻燈片式swiper
//公司介紹-作品總攬-swiper
var swiper = new Swiper(".swiper--thumbs-gallery-loop__bottom", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".swiper--thumbs-gallery-loop__top", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

//有箭頭、有進度條、一排四個
//公司介紹-設計師總攬-swiper
var swiper = new Swiper(".swiper--infinite-loop-slides-per-group__4", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//有箭頭、有進度條、一排三個
//合作商家-商家swiper
var swiper = new Swiper(".swiper--infinite-loop-slides-per-group__3", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(document).ready(function () {
    // 廣告視窗顯示
    $('.required--alert').slideDown();
    // 點擊關閉廣告視窗
    $('.required--alert__close').click(function (e) {
        e.preventDefault();
        $('.required--alert').remove();
    })

    //偵測滑鼠滾動顯示/隱藏
    $(window).scroll(function (e) {
        let scrollHeight = $(this).scrollTop();
        // console.log(scrollHeight);

        //顯示/隱藏廣告視窗
        if (scrollHeight < 3970) {
            $('.required--alert').slideDown();
        } else {
            $('.required--alert').slideUp();
        }

        //顯示/隱藏右側icon列表
        if (scrollHeight > 500) {
            $('.nav--icon').fadeIn();
        } else {
            $('.nav--icon').fadeOut();
        }
    });

    //點擊回到最上層
    $('.scroll--top-btn').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    //服務項目-點擊到工程施作
    $('.btn--construction-works').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 400
        }, 1000);
    })

    //服務項目-居家格局設計
    $('.btn--layout-planning').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 1048
        }, 1000);
    })

    //服務項目-室內裝潢
    $('.btn--interior-design').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 1700
        }, 1000);
    })

    //服務項目-客製家具
    $('.btn--furniture-making').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 2348
        }, 1000);
    })

    //設計師作品-分頁點擊效果
    $('.page-link').click(function (e) {
        e.preventDefault();
        //點擊分頁標籤-新增/移除class-active
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        // let page = $(this).attr('href');
    })

    //聯絡我們
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
    })

})