
var imgs = [
    "https://img.alicdn.com/tps/i4/TB1fbhiawoQMeJjy0FnSuv8gFXa.jpg_970x970q100.jpg_.webp",
    "https://img.alicdn.com/tps/i4//TB17xyChvzO3e4jSZFxSuuP_FXa.jpg_970x970q100.jpg_.webp",
    "https://img.alicdn.com/simba/img/TB1rhMBeiDsXe8jSZR0SutK6FXa.jpg"
]

var imgbox = document.getElementById("imgbox");
var firstpage =  document.getElementById("contain");
var secondpage =  document.getElementById("secondpage");
var close = document.getElementById("close");
console.log(secondpage);
 
var jsDivBox = document.getElementById("loopDiv");
//图片节点
var jsImg = document.getElementById("pic");
//获取所有的li
var jsUl = document.getElementById("list");
var jsLis = jsUl.getElementsByTagName("li");
//显示当前的图片下标
var currentPage = 0;


for(let i = 0; i<imgs.length; i++){
    var li = document.createElement('li');
    li.innerHTML = "<img src=" +imgs[i] +" style='width:100px; height: 100px'>";
    imgbox.appendChild(li);
}

if(imgbox.getElementsByTagName("li")){
    var list = imgbox.getElementsByTagName("li");
    for(let j = 0;j<list.length;j++){
        list[j].onclick = function(){
            currentPage = j;
            firstpage.style.display = "none";
            secondpage.style.display = "block";
            jsImg.src = imgs[j];
            //将所有的小圆点颜色清空
            for (let k = 0; k < jsLis.length; k++) {
               jsLis[k].style.backgroundColor = "#aaa";
             }
            //被点击的图片圆点变为红色
            jsLis[j].style.backgroundColor = "red";
        }
    }
}
//返回键
close.onclick = function(){
    firstpage.style.display = "block";
    secondpage.style.display = "none";
}

//点击圆点切换图片
for (let i = 0; i < jsLis.length; i++) {
    jsLis[i].onclick = function(){
        jsImg.src = imgs[i];
        currentPage = i;
         //将所有的小圆点颜色清空
         for (let k = 0; k < jsLis.length; k++) {
            jsLis[k].style.backgroundColor = "#aaa";
          }
         //被点击的图片圆点变为红色
         jsLis[i].style.backgroundColor = "red";
    }
  }

  

// var moudeD = 0;
// var moudeO = 0;
//左右滑动屏幕切换图片
// secondpage.onmousedown=function(e){
//     console.log(e);
//     moudeD = e.clientX;
//     console.log(currentPage);
// }
// secondpage.onmouseu = function(e){

//     console.log(e);

//     moudeO = e.clientX;
// }



// function func() {
//     currentPage++;
//     changePic();
//     console.log(currentPage);

// }
// function changePic() {
//     if (currentPage == 3) {
//         currentPage = 0;
//     }
//     if (currentPage == -1) {
//         currentPage = 2;
//     }
//     //更换图片
//     jsImg.src = imgs[currentPage];
//     //将所有的小圆点颜色清空
//     for (var i = 0; i < jsLis.length; i++) {
//         jsLis[i].style.backgroundColor = "#aaa";
//     }
//     //改变对应小圆点为红色
//     jsLis[currentPage].style.backgroundColor = "red";
// }


// //进入小圆点
// for (let j = 0; j < jsLis.length; j++) {
//     jsLis[j].onmouseover = function() {
//         currentPage = parseInt(this.innerHTML) - 1;
//         changePic();
//     };
// }