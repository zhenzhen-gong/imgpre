
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
//ͼƬ�ڵ�
var jsImg = document.getElementById("pic");
//��ȡ���е�li
var jsUl = document.getElementById("list");
var jsLis = jsUl.getElementsByTagName("li");
//��ʾ��ǰ��ͼƬ�±�
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
            //�����е�СԲ����ɫ���
            for (let k = 0; k < jsLis.length; k++) {
               jsLis[k].style.backgroundColor = "#aaa";
             }
            //�������ͼƬԲ���Ϊ��ɫ
            jsLis[j].style.backgroundColor = "red";
        }
    }
}
//���ؼ�
close.onclick = function(){
    firstpage.style.display = "block";
    secondpage.style.display = "none";
}

//���Բ���л�ͼƬ
for (let i = 0; i < jsLis.length; i++) {
    jsLis[i].onclick = function(){
        jsImg.src = imgs[i];
        currentPage = i;
         //�����е�СԲ����ɫ���
         for (let k = 0; k < jsLis.length; k++) {
            jsLis[k].style.backgroundColor = "#aaa";
          }
         //�������ͼƬԲ���Ϊ��ɫ
         jsLis[i].style.backgroundColor = "red";
    }
  }

  

// var moudeD = 0;
// var moudeO = 0;
//���һ�����Ļ�л�ͼƬ
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
//     //����ͼƬ
//     jsImg.src = imgs[currentPage];
//     //�����е�СԲ����ɫ���
//     for (var i = 0; i < jsLis.length; i++) {
//         jsLis[i].style.backgroundColor = "#aaa";
//     }
//     //�ı��ӦСԲ��Ϊ��ɫ
//     jsLis[currentPage].style.backgroundColor = "red";
// }


// //����СԲ��
// for (let j = 0; j < jsLis.length; j++) {
//     jsLis[j].onmouseover = function() {
//         currentPage = parseInt(this.innerHTML) - 1;
//         changePic();
//     };
// }