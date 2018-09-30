define(['isArray'],function (isArray) {
    function sortArray(arr){
        if(isArray(arr)){
            arr.sort(function(x,y){
                return x-y;
            });
            return arr;
        }else{
            return '请输入数组';
        }
    }
   return sortArray;//把排序的方法暴露出去
});

// sort函数在原来的数组上排序，不生成副本

