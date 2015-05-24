var model = 1;      //按键模式
var count = 0;      //焦点位置
var layout = [];    //布局数组

//页面布局
function loadLayout(arr){
    for(var i = 0;i < arr.length;i++){
        for(var j = 0;j < layout.length;j++){
            if(judgeDirection(arr[i],layout[j][0]) == 2){
                var newArr = [];
                newArr.push(arr[i]);
                layout.splice(j,0,newArr);
                break;
            }
            else if(judgeDirection(arr[i],layout[j][0]) == 3){
                for(var k = 0;k < layout[j].length;k++){
                    if(arr[i].left < layout[j][k]){
                        layout[j].splice(k,0,arr[i]);
                        break;
                    }
                    if(k == layout[j].length - 1)
                        layout[j].push(arr[i]);
                    break;
                }
            }
            if(j == layout.length - 1){
                var newArr = [];
                newArr.push(arr[i]);
                layout.push(newArr);
            }
        }
    }
}

//判断方向
function judgeDirection(newDIv,oldDiv){
    if(newDIv.top >= oldDiv.bottom)
        return 1;       //向下
    else if(newDIv.bottom <= newDIv.top)
        return 2;       //返回上一层
    else
        return 3;       //当前行
}
