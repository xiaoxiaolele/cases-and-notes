window.onload=function() {
    var swiper = new Swiper('.swiper1', {
        /*slidesPerView: 1,*/
        autoplay: 1500,
        spaceBetween: 2,
        loop: true,
        pagination: '.swiper-pagination',
    });
    var swiper = new Swiper('.swiper2', {
        pagination: '.swiper-pagination'
    });
};
