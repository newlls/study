define(['jquery'],function ($) {

    function Carrouse() {
        this.container=$('<div class="container"></div>');
        this.pre=$('<span class="pre">&lt;</span>');
        this.next=$('<span class="next">&gt;</span>');
        this.tab=$('<ul class="tab"></ul>');

        this.iNow=0;
    }
    Carrouse.prototype.init=function (option) {
        var defalt={    //默认值
            arrowPos:'buttom',
            btnType:'circle',
        };

        var _this=this;

        option=$.extend(defalt,option);
       /* var option={
            selector:'.box',
            imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']
        };*/
        for(var i=0;i<option.imgData.length;i++){
            $(this.container).append(`<img class="${i==0?'selected':''}" src="${option.imgData[i]}">`);
            $(this.tab).append(`<li class="${i==0?'selected '+ 'tab-'+option.btnType :'tab-'+option.btnType}">${i+1}</li>`);
        }

        this.pre.addClass('pre-'+option.arrowPos);
        this.next.addClass('next-'+option.arrowPos);

        $(this.container).append(this.pre).append(this.next).append(this.tab);
        $(option.selector).append(this.container);

        //按钮样式
        $('li',this.tab).on('click',function () {
            _this.iNow=$(this).index();
            changeImg(_this.iNow);
        });

        //切换图片
        function changeImg(index) {
            $('li',_this.tab).eq(index).addClass('selected').siblings().removeClass('selected');
            $('img',_this.container).eq(index).addClass('selected').siblings().removeClass('selected');
        }
        //上一张
        this.pre.on('click',function () {
            _this.iNow--;
            if(_this.iNow < 0){
                _this.iNow=option.imgData.length-1;
            }
            changeImg(_this.iNow);
        });
        //下一张
        this.next.on('click',function () {
            _this.iNow++;
            if(_this.iNow > option.imgData.length){
                _this.iNow=0;
            }
            changeImg(_this.iNow);
        });

        // 自动轮播
        function start() {
            _this.timer=setInterval(function () {
                _this.next.trigger('click');
            },1000);
        }
        start();
        // 划入停止 移出轮播
        this.container.hover(function () {
            clearInterval(_this.timer);
        },function () {
            start();
        })

    };
    return Carrouse;
});