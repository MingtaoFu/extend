function scroll(obj,l,direction){
    if(obj == window){
        if (direction == 'y'){
            obj.scrollBy(0,l);
        }
        else{
            obj.scrollBy(l,0);
        }
    }
    else{
        if(direction == 'y'){
            obj.scrollTop = obj.scrollTop + l;
        }
        else{
            obj.scrollLeft = obj.scrollLeft + l;
        }
    }
}
// chrome.tabs.onCreated.addListener(function(){
//     alert(2);
// });

function getTop(e){
    var offset = e.offsetTop;
    if(e.offsetParent != null && e.offsetParent.nodeName != 'BODY'){
        offset += getTop(e.offsetParent);
    }
    return offset;
}
function getLeft(e){
    var offset = e.offsetLeft;
    if(e.offsetParent != null){
        offset += getLeft(e.offsetParent);
    }
    return offset;
}
//键盘操作滚屏
document.addEventListener("keydown",function(event){
    //var dataJson = {75:-40,74:40,72:-40,76:40};
    // if (event.keyCode == 74){
    //     scrollDown(editFrame,);
    // }
    var obj = window;
    if(model == 1){
        switch (event.keyCode){
            case 74:
                scroll(obj,40,'y');
                break;
            case 75:
                scroll(obj,-40,'y');
                break;
            case 72:
                scroll(obj,-40,'x');
                break;
            case 76:
                scroll(obj,40,'x');
                break;
            case 73:
                model = 2;
                break;
        }
    }
    else if(model == 2){
        switch (event.keyCode){
            case 74:
                focusMove();
            break;
        }
    }
}, false);


//冒泡排序
function bubbleSort(arr,value){
    var i = arr.length,j;
    var tempExchangVal;
    while(i > 0){
            for(j = 0;j < i-1;j++){
                if(arr[j].value > arr[j+1].value){
                    tempExchangVal = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tempExchangVal;
                }
            }
            i--;
        }
    return arr;
}

//生成焦点框
var focusFrame = document.createElement('div');
focusFrame.id = 'focusFrame';
focusFrame.style.width = '100px';
focusFrame.style.height = '100px';
focusFrame.style.top = '0px';
focusFrame.style.left = '0px';

function focusMove(){
    focusFrame.style.top = dom_a2[count].top + 'px';
    focusFrame.style.left = dom_a2[count].left + 'px';
    count++;
}


document.getElementsByTagName('body')[0].appendChild(focusFrame);

//获取所有底层元素
var elementArray = [];
var dom_a = document.getElementsByTagName('a');
var dom_input = document.getElementsByTagName('input');
var dom_button = document.getElementsByTagName('button');
var dom_textarea = document.getElementsByTagName('textarea');
//dom_a = bubbleSort(dom_a,getTop);


var dom_a2 = [];
for(var i = 0;i < dom_a.length;i++){
    //如果不能让用户看到，就删了
    var style = getComputedStyle(dom_a[i]);
    if(dom_a[i].offsetHeight != 0 && dom_a[i].offsetWidth != 0 && style.display != 'none'){

        dom_a[i].top = getTop(dom_a[i]);
        dom_a[i].left = getLeft(dom_a[i]);
		  dom_a[i].bottom = dom_a[i].top + dom_a[i].offsetHeight;
        dom_a2.push(dom_a[i]);
if(i ==0)console.log('iiii',dom_a2[i],dom_a2[0].left);
    }
}
//console.log(dom_a2[0].top);
//dom_a2 = bubbleSort(dom_a2,top);


var iiii = {
     top:100,
     bottom:200,
     left:100
}
var aaaaa = [iiii];
loadLayout(dom_a2);
console.log('uuuuuuuu',layout);

focusFrame.style.top = dom_a2[count].top + 'px';
focusFrame.style.left = dom_a2[count].left + 'px';
