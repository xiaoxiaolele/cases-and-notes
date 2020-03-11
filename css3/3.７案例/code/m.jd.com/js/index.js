window.onload=function(){
    // window.onload JS入口函数--作用：让我页面（HTML）加载完毕，
    // 才加载我这里的JS
    //初始化swiper3--让我们的轮播动起来
 var swiper = new Swiper('.swiper1', {
    spaceBetween: 0,
  //   swiper-slide之间图片与图片之间的间隔
    autoplay:3000,
  //   要注意Swiper4.x与Swiper3.x的写法不同导致的超快速切换。
    //设置为自动播放，时间为3秒
    loop:true,
    //设置轮播循环播放--无缝轮播
    pagination: '.swiper-pagination'
    //pagination指的是轮播点
  //   swiper5 --写法不一样
  //   pagination：{
  //       el:"swiper-pagination",
     //      clickable:true
  //   }
  });
  //产品轮播的初始化
  var swiper = new Swiper('.swiper2', {
    pagination: '.swiper-pagination'
  });
}
