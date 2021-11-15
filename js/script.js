window.onload = function () {
    var swiperBanner = new Swiper('.sw-banner', {
        loop: true,
        effect: 'fade',
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerGroup: 2
    })
    var swWelcome = new Swiper('.sw-welcome', {
        slidesPerView: 4,

    })
    var swBtm = new Swiper('.sw-btm', {
        loop: true,

    })

    let best = $('.best-age >li>a');
    let best_right = $('.box-wrap > div')


    $.each(best, function () {
        $(this).click(function (e) {
            e.preventDefault();
            best.removeClass('rank1');
            $(this).addClass('rank1');
            //모든 내용을 일단 숨기고 해당하는 1개만보여줌
        })
    })

    $.each(best_right, function () {
        $(this).click(function () {
            best_right.hide();
            best_right.eq(index).show();
            //모든 내용을 일단 숨기고 해당하는 1개만보여줌
        })
    })


}