require(['carrouse'],function (Carrouse) {
    var carrouse=new Carrouse();
    carrouse.init({
        selector:'.box',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        arrowPos:'center',
        btnType:'circle',
    });

    var carrouse1=new Carrouse();
    carrouse1.init({
        selector:'.box1',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
    });
});