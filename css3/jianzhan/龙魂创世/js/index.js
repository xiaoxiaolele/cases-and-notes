window.onload=function(){
    var swiper = new Swiper('.swiper1', {
        effect: 'coverflow',
        loop:true,
        grabCursor : true,/*pc端当鼠标悬浮式会变成小手的形状*/
        paginationClickable:true,
        centeredSlides: true,/*设置居中*/
        slidesPerView: 'auto',/*设置能够同时显示的数量*/
        autoplay:2000,/*旋转间隔时间*/
        coverflow: {
            rotate: 0,
            stretch: 65,
            depth: 200,
            modifier: 1,
            slideShadows : true,
            /*rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows：开启slide阴影。默认 true。*/
        },
        pagination: '.swiper-pagination',
    })

};
window.onload=function () {
    var swiper = new Swiper('.swiper2', {
        effect: 'coverflow',
        loop:true,

        grabCursor : true,/*pc端当鼠标悬浮式会变成小手的形状*/
        paginationClickable:true,
        centeredSlides: true,/*设置居中*/
        slidesPerView: 'auto',/*设置能够同时显示的数量*/
        autoplay:2000,/*旋转间隔时间*/
        coverflow: {
            rotate: 50,
            stretch: 65,
            depth: 400,
            modifier: 1,
            slideShadows : true,
            /*rotate：slide做3d旋转时Y轴的旋转角度。默认50。
            stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
            depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
            modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
            slideShadows：开启slide阴影。默认 true。*/
        },
        pagination: '.swiper-pagination',/*控制底部的点*/
       /* prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',/!*箭头的控制*!/*/
    })
}