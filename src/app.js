const element=document.querySelector('.btn-pic');
element.addEventListener('click',myfunction);
function myfunction(){
    document.querySelector('.start-pic').style='display:block'
    document.querySelector('.btn-pic').style='display:none'
    
}
const btn=document.querySelector('.btn-close');
btn.addEventListener('click',mybtn);
function mybtn(){
    document.querySelector('.start-pic').style='display:none'
    document.querySelector('.btn-pic').style='display:block'
    
}
// courses
// document.queryselectore('.item-navbar').addEventListener("mouseover", mouseOver);
// document.queryselectore('.item-navbar').addEventListener("mouseout", mouseOut);
// function mouseOver() {
//     document.queryselectore('.item-navbar').style='display:block';
//   }
  
//   function mouseOut() {
//     document.queryselectore('.item-navbar').style='display:none';
//   }
// end courses