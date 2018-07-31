/**
 * Created by lixue on 2018/7/28.
 */
$('.nav-menu').on("click",function () {
    $('.overlay').addClass('active');
    $('.container').css('display','none');
});
$('.menu-close').on("click",function () {
    $('.overlay').removeClass('active');
    $('.container').css('display','block');
});

/*slider start*/
var nowIndex=0;
setInterval(function () {
    run();
},2500);
$('.next').on('click',function () {
    run();
});

function run() {
    nowIndex++;
    var runLeft = $(".slider-list li").width() * nowIndex;
    $('.slider-list').css({
        transform:'translateX('+(-runLeft)+'px)',
        transition:'all 1s ease'
    });
    setTimeout(function(){
        if(nowIndex >= 3){
            nowIndex = 0;
            $(".slider-list").css({
                transition:'unset',
                transform:'translateX(0)'
            });
        }
    },1000)
}
/*slider end*/

/*coffeehouse start*/
var scrollBar=$('.scroll-items')[0];
$('.btn-prev').on('click',function () {
    change('right');
});
$('.btn-next').on('click',function () {
   change('left');
});
function change(dire) {
    var scrollW=dire=="left" ? scrollBar.scrollLeft+300:scrollBar.scrollLeft-300;
    $('.scroll-items').animate({
        scrollLeft:scrollW
    },500,function () {
        showArrow();
    })
}
function showArrow() {
    $('.btn-prev').add('.btn-next').show();
    if(scrollBar.scrollLeft<=0){
        $('.btn-prev').hide();
    }
    if(scrollBar.scrollLeft>=scrollBar.scrollWidth-scrollBar.clientWidth){
        $('.btn-next').hide();
    }
}
$('.scroll-items').on('scroll',function () {
    if($(this).data("timer")){
        clearTimeout($(this).data("timer"));
    }
    $(this).data("timer",setTimeout(function () {
        showArrow();
    }),1000);
});
/*coffeehouse end*/