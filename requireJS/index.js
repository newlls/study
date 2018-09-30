require(['add'],function (add) {//  第一个参数['add'] ，表示引用的模块
                                // function 的参数用来接收引用的模块
    var a=5;
    var b=10;
    console.log(add(a,b))
});

