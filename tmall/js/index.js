/*轮播图 start*/
var aSliderI=document.querySelectorAll('.slide-item');
var nowIndex=0;
setInterval(function () {
    aSliderI[nowIndex].classList.remove('active');
    if(nowIndex==2){
        nowIndex=-1;
    }
    aSliderI[++nowIndex].classList.add('active')
},3000);

/*轮播图 end*/