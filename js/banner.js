//获取节点
//隐藏菜单所需节点
var oItem = document.getElementsByClassName("item");
var oSubmenu = document.getElementsByClassName("submenu");
//轮播所需节点
var oBanner_Box = document.getElementsByClassName("g-banner-box")[0];
var oBanner_slide = document.getElementsByClassName("banner-slide");
var aSpan = document.getElementsByClassName("banner-dots")[0].getElementsByTagName("span");
var oNext = document.getElementsByClassName("next")[0];
var oPrev = document.getElementsByClassName("prev")[0];
var oActive = document.getElementsByClassName("active")[0];

for (var j = 0; j<oItem.length; j++) {
    oItem[j].onmouseover = function () {
        this.className = "item js-menu-item-on";
        oSubmenu[0].style.display = "block" ;
    }
    oItem[j].onmouseout = function () {
        this.className = "item";
        oSubmenu[0].style.display = "none" ;
    }
}
for (var j = 0; j<oItem.length; j++) {
    oSubmenu[0].onmouseover = function () {
        oSubmenu[0].style.display = "block" ;
    }
    oSubmenu[0].onmouseout = function () {
        oSubmenu[0].style.display = "none" ;
    }
}




//轮播图
//
//
//
//
//初始化界面
oBanner_slide[0].style.visibility = "visible";
oBanner_slide[0].style.opacity = "1";
aSpan[0].className = "active";
var num=0;

for (var i = 0; i<aSpan.length; i++) {
    // 遍历小圆点，赋予其下标值
    aSpan[i].index = i;
    //点击小圆点切换图片
    aSpan[i].onclick = function () {
        for (var j = 0; j < aSpan.length; j++) {
            aSpan[j].className = "";
            oBanner_slide[j].style.opacity = "0";
            oBanner_slide[j].style.visibility = "hidden";
        }
        num = this.index;
        aSpan[num].className = "active";
        oBanner_slide[num].style.visibility = "visible";
        oBanner_slide[num].style.opacity = "1";
    }
    //点击下一张
    oNext.onclick = function () {
        for (var j = 0; j < aSpan.length; j++) {
            if (aSpan[j].className == "active") {
                aSpan[j].className = "";
                oBanner_slide[j].style.opacity = "0";
                oBanner_slide[j].style.visibility = "hidden";
                j++;
                num++;
                if (j > 5) {j = 0;}
                aSpan[j].className = "active";
                oBanner_slide[j].style.visibility = "visible";
                oBanner_slide[j].style.opacity = "1";
            }
        }
    }
    //点击前一张
    oPrev.onclick = function () {
        for (var j = 0; j < aSpan.length; j++) {
            if (aSpan[j].className == "active") {
                aSpan[j].className = "";
                oBanner_slide[j].style.opacity = "0";
                oBanner_slide[j].style.visibility = "hidden";
                j--;
                num--;
                if (j < 0) {
                    j = 5;
                }
                aSpan[j].className = "active";
                oBanner_slide[j].style.opacity = "1";
                oBanner_slide[j].style.visibility = "visible";
            }
        }
    }
}
function Time() {//设置定时器
    num++;
    if (num<6) {
        for (var j = 0; j < aSpan.length; j++) {
            aSpan[j].className = "";
            oBanner_slide[j].style.opacity = "0";
            oBanner_slide[j].style.visibility = "hidden";
        }
        aSpan[num].className = "active";
        oBanner_slide[num].style.opacity = "1";
        oBanner_slide[num].style.visibility = "visible";
    }
    else {
        num = -1;
        Time();
    }
}
clearInterval(timer);
var timer = setInterval("Time()",3000);
oBanner_Box.onmouseover = function () {
    clearInterval(timer);
}
oBanner_Box.onmouseout = function () {
    clearInterval(timer);
    timer = setInterval("Time()",3000);
}