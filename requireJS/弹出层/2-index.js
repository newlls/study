requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});

require(['jquery','2-dialog'],function ($, Dialog) {
   $('.btn').on('click',function () {
       var dialog1=new Dialog({
           width:300,
           height:300,
           title:'登录',
           content:'test.html',
       });
       dialog1.open();
   });

    $('body').on('click','.confirm-btn',function () {
        var dialog2=new Dialog({
            width:200,
            height:200,
            title:'请输入用户名',
            content:'username.html'
        });
        dialog2.open();

    })
});