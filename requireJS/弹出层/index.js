requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});

require(['jquery','dialog'],function ($,dialog) {
    $('.btn').on('click',function () {

        dialog.open({
            width:200,
            height:200,
            title:'登录',
            content:'test.html',
        });
        $('body').on('click','.confirm-btn',function () {
            dialog.close();
        })
    })
});

