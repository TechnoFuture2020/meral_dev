<<<<<<< HEAD
// - - - - -  VERSION BASE ON POSITION LEFT OF THE ELEMENT - - - - - -
// 
// window.onload = function() {
// let sliderParent = document.querySelector('.slider');
// let overlayPos = document.querySelector('.slider-card__overlay');
// let sliderMoved = document.querySelector('.slider-card__items');

// let sliderCurrentPos = +( getComputedStyle(sliderMoved).left.slice(0, -2) ); // number
// let screenWidth = document.body;
// const btnLeft = document.querySelector('.slider-wrapper__arrow_left');
// const btnRight = document.querySelector('.slider-wrapper__arrow_right');


// // function getScreenWidth() {
// //   return screenWidth.getBoundingClientRect().width;
// // }

// // if ( (getScreenWidth()) < 1500) {
  
// // };




// function changeLeftBtn(sliderCurrentPos) {  

//   if (sliderCurrentPos > 0) {
//     btnLeft.style.zIndex = 1;
//   } else if (sliderCurrentPos < 0) {
//     btnLeft.style.zIndex = 2;
//   }
// }

// function changeRightBtn(sliderCurrentPos) {
//   if (sliderCurrentPos <= -428) {
//     console.log('sliderCurrentPos: ', sliderCurrentPos );
//     btnRight.style.zIndex = 1;
//   } else if (sliderCurrentPos > -428) {
//     btnRight.style.zIndex = 2;
//   }

//   // console.log('sliderCurrentPos.left: ', sliderCurrentPos);
//   // console.log('getComputedStyle(overlayPos).left: ', +( getComputedStyle(overlayPos).left.slice(0, -2) ));
//   // console.log('- - - - - - - - - - - - - - - ');
// }

// changeLeftBtn(sliderCurrentPos);
// changeRightBtn(sliderCurrentPos);




// // processing the click mouse on the left and right button
//   sliderParent.addEventListener('click', function(event){

//     let target = event.target;

//     // processing click on the right button
//     if (target.classList.contains('slider-wrapper__arrow_right')) { 
//       sliderMoved.style.left = (sliderCurrentPos - 288) + 'px';  // 148 - 288 = -140px
//       sliderCurrentPos = +(sliderMoved.style.left.slice(0, -2)); // -140
//       // Make button opacity
//       changeLeftBtn(sliderCurrentPos);
//       changeRightBtn(sliderCurrentPos);
//     }

//     // processing click on the left button
//     if (target.classList.contains('slider-wrapper__arrow_left')) { 
//       sliderMoved.style.left = (sliderCurrentPos + 288) + 'px'; // -144px
//       sliderCurrentPos = +(sliderMoved.style.left.slice(0, -2));
//       // Make button opacity
//       changeLeftBtn(sliderCurrentPos);
//       changeRightBtn(sliderCurrentPos);
//     }  

//   })
// };




=======
window.onload = function() {
let sliderParent = document.querySelector('.slider');
let sliderMoved = document.querySelector('.slider-card__items');
let sliderCurentPos = +( getComputedStyle(sliderMoved).left.slice(0, -2) ); // number
let btnLeft = document.querySelector('.slider-wrapper__arrow_left');
let btnRight = document.querySelector('.slider-wrapper__arrow_right');
    
let overlayLeft = document.querySelector('.slider-card__overlay');
let overlayLeftCoord = overlayLeft.getBoundingClientRect().right;  // number
>>>>>>> 344877f38c87325954d6f2ec4f6293446f36555b

let overlayRight = document.querySelector('.slider-card__overlay_right');
let overlayRightCoord = overlayRight.getBoundingClientRect().left;  // number

let sliderBoundLeftCoord = document.querySelector('.slider-card__items').getBoundingClientRect().x;
let sliderBoundRightCoord = document.querySelector('.slider-card__items').getBoundingClientRect().right;
  
console.log('sliderBoundLeftCoord: ', sliderBoundLeftCoord);
console.log('sliderBoundRightCoord: ', sliderBoundRightCoord);
console.log('overlayLeftCoord: ', overlayLeftCoord);
console.log('overlayRightCoord: ', overlayRightCoord);
console.log('sliderCurentPos: ', sliderCurentPos);



<<<<<<< HEAD
=======
function changeLeftBtn(sliderCurentPos) {
//     console.log('sliderBoundLeftCoord in changeLeftBtn: ', sliderBoundLeftCoord);
//     console.log('overlayLeftCoord in changeLeftBtn: ', overlayLeftCoord);
//     console.log('if (sliderBoundLeftCoord > overlayLeftCoord) btnLeft.style.zIndex = 1');
  console.log('-----IN changeLeftBtn(sliderBoundLeftCoord)------- ');
  console.log('sliderBoundLeftCoord: ', sliderBoundLeftCoord);
  console.log('sliderBoundRightCoord: ', sliderBoundRightCoord);
  console.log('overlayLeftCoord: ', overlayLeftCoord);
  console.log('overlayRightCoord: ', overlayRightCoord);
  console.log('sliderCurentPos: ', sliderCurentPos);
  console.log('------------------------------------------- ');
//   if ( sliderBoundLeftCoord > overlayLeftCoord ) {
//     btnLeft.style.zIndex = 1;
//   } else if (sliderBoundLeftCoord < overlayLeftCoord) {
//     btnLeft.style.zIndex = 2;
//   }
}

function changeRightBtn(sliderCurentPos) {
//     console.log('sliderBoundRightCoord in changeRightBtn: ', sliderBoundRightCoord);
//     console.log('overlayRightCoord in changeRightBtn: ', overlayRightCoord);
//     console.log('if (sliderBoundRightCoord < overlayRightCoord) btnRight.style.zIndex = 1');
  console.log('-----IN changeRightBtn(sliderBoundRightCoord)------- ');
  console.log('sliderBoundLeftCoord: ', sliderBoundLeftCoord);
  console.log('sliderBoundRightCoord: ', sliderBoundRightCoord);
  console.log('overlayLeftCoord: ', overlayLeftCoord);
  console.log('overlayRightCoord: ', overlayRightCoord);
  console.log('sliderCurentPos: ', sliderCurentPos);
  console.log('------------------------------------------- ');
//   if (sliderCurentPos >= overlayRightCoord) {
//     btnRight.style.zIndex = 1;
//   } else if (sliderCurentPos < overlayRightCoord) {
//     btnRight.style.zIndex = 2;
//   }
//   if (sliderBoundRightCoord < overlayRightCoord) {
//     btnRight.style.zIndex = 1;
//   } else if (sliderBoundRightCoord > overlayRightCoord) {
//     btnRight.style.zIndex = 2;
//   }
}
>>>>>>> 344877f38c87325954d6f2ec4f6293446f36555b




<<<<<<< HEAD






















window.onload = function() {
  let sliderParent = document.querySelector('.slider');
  let sliderMoved = document.querySelector('.slider-card__line');
  let sliderCurentPos = +( getComputedStyle(sliderMoved).left.slice(0, -2) ); // number
  let innerWidth = function(){
    return document.documentElement.clientWidth;
=======
sliderParent.addEventListener('click', function(event){
  let target = event.target;

  if (target.classList.contains('slider-wrapper__arrow_right')) { 
    sliderMoved.style.left = (sliderCurentPos - 288) + 'px';  // 148 - 288 = -140px
    sliderCurentPos = (sliderCurentPos - 288);
//     sliderBoundRightCoord = document.querySelector('.slider-card__items').getBoundingClientRect().right
    changeLeftBtn(sliderCurentPos); // Make button opacity sliderBoundLeftCoord
    changeRightBtn(sliderCurentPos);// Make button opacity sliderBoundRightCoord
>>>>>>> 344877f38c87325954d6f2ec4f6293446f36555b
  }
  

  let sliderBoundRightCoord = document.querySelector('.slider-card__line').getBoundingClientRect().right;
  let sliderBoundLeftCoord = document.querySelector('.slider-card__line').getBoundingClientRect().x;
  let changeOpacityRightBtn = sliderBoundRightCoord;
  let changeOpacityLeftBtn = sliderBoundLeftCoord;

<<<<<<< HEAD
  let btnLeft = document.querySelector('.slider-wrapper__arrow_left');
  let btnRight = document.querySelector('.slider-wrapper__arrow_right');
  let btnOverlayLeft = document.querySelector('.btn-overlay__left');
  let btnOverlayRight = document.querySelector('.btn-overlay__right');
  console.log('btnOverlayLeft: ', btnOverlayLeft);
  console.log('btnOverlayRight: ', btnOverlayRight);
=======
    sliderMoved.style.left = (sliderCurentPos + 288) + 'px'; // -144px
    sliderCurentPos = (sliderCurentPos + 288);
    sliderBoundLeftCoord = document.querySelector('.slider-card__items').getBoundingClientRect().x;
    //sliderCurentPos = +( getComputedStyle(sliderMoved).left.slice(0, -2) );
    changeLeftBtn(sliderCurentPos); // Make button opacity sliderBoundLeftCoord
    changeRightBtn(sliderCurentPos);// Make button opacity sliderBoundRightCoord
  }  
>>>>>>> 344877f38c87325954d6f2ec4f6293446f36555b


      
  let overlayLeft = document.querySelector('.slider-card__overlay');
  let overlayLeftCoord = overlayLeft.getBoundingClientRect().right;  // number
  let overlayRight = document.querySelector('.slider-card__overlay_right');
  let overlayRightCoord = overlayRight.getBoundingClientRect().left;  // number
  
  // window.addEventListener('resize', function(){
  //   if (innerWidth() < 577 && innerWidth() > 375) {
  //     changeLeftBtn = function changeLeftBtn() {
  //       btnLeft.style.pointer = 'pointer-events: none;';
  //       console.log('Its a changeLeftBtn in the window.resize!');

  //     }
  //     console.log('%c%s', 'color: blueviolet; font-size: 14px; line-height: 1em;', 'innerWidth(): ',  innerWidth());
  //   }
    
  // }, false);
  
  
  // console.log('----------GLOBAL---------------------------- ');
  // console.log('sliderBoundLeftCoord: ', sliderBoundLeftCoord);
  // console.log('sliderBoundRightCoord: ', sliderBoundRightCoord);
  // console.log('overlayLeftCoord: ', overlayLeftCoord);
  // console.log('overlayRightCoord: ', overlayRightCoord);
  // console.log('changeOpacityLeftBtn: ', changeOpacityLeftBtn);
  // console.log('changeOpacityRightBtn: ', changeOpacityRightBtn);
  // console.log('sliderCurentPos: ', sliderCurentPos);
  // console.log('------------------------------------------- ');
  
  
  let changeLeftBtn = function(changeOpacityLeftBtn, changeOpacityRightBtn) {
    // console.log('-----IN changeLeftBtn(sliderBoundLeftCoord)------- ');
    // console.log('overlayLeftCoord: ', overlayLeftCoord);
    // console.log('overlayRightCoord: ', overlayRightCoord);
    // console.log('changeOpacityLeftBtn: ', changeOpacityLeftBtn);
    // console.log('changeOpacityRightBtn: ', changeOpacityRightBtn);
    // console.log('------------------------------------------- ');
    if ( changeOpacityLeftBtn > overlayLeftCoord ) {
      btnLeft.style.zIndex = 1;
    } else if (changeOpacityLeftBtn < overlayLeftCoord) {
      btnLeft.style.zIndex = 2;
    }
  }
  


  function changeRightBtn(changeOpacityLeftBtn, changeOpacityRightBtn) {
    // console.log('-----IN changeRightBtn(sliderBoundRightCoord)------- ');
    // console.log('overlayLeftCoord: ', overlayLeftCoord);
    // console.log('overlayRightCoord: ', overlayRightCoord);
    // console.log('changeOpacityLeftBtn: ', changeOpacityLeftBtn);
    // console.log('changeOpacityRightBtn: ', changeOpacityRightBtn);
    // console.log('------------------------------------------- ');
    if (changeOpacityRightBtn < overlayRightCoord) {
      btnRight.style.zIndex = 1;
      if (innerWidth() <= 576 && innerWidth() > 375) {
        console.log('innerWidth work!');
      }
    } else if (changeOpacityRightBtn > overlayRightCoord) {
      btnRight.style.zIndex = 2;
    }
  }
  
  changeLeftBtn(changeOpacityLeftBtn, changeOpacityRightBtn);
  changeRightBtn(changeOpacityLeftBtn, changeOpacityRightBtn);
  
  
  
  sliderParent.addEventListener('click', function(event){
    let target = event.target;
  
    if (target.classList.contains('slider-wrapper__arrow_right')) { 
      sliderMoved.style.left = (sliderCurentPos - 288) + 'px';  // 148 - 288 = -140px
      sliderCurentPos = (sliderCurentPos - 288);
      changeOpacityLeftBtn -= 288;
      changeOpacityRightBtn -= 288;
      changeLeftBtn(changeOpacityLeftBtn, changeOpacityRightBtn); // Make button opacity sliderBoundLeftCoord      
      changeRightBtn(changeOpacityLeftBtn, changeOpacityRightBtn);// Make button opacity sliderBoundRightCoord
    }
  
    if (target.classList.contains('slider-wrapper__arrow_left')) { 
      sliderMoved.style.left = (sliderCurentPos + 288) + 'px'; // -144px
      sliderCurentPos = (sliderCurentPos + 288);
      changeOpacityLeftBtn += 288;
      changeOpacityRightBtn += 288;
      changeLeftBtn(changeOpacityLeftBtn, changeOpacityRightBtn); // Make button opacity sliderBoundLeftCoord      
      changeRightBtn(changeOpacityLeftBtn, changeOpacityRightBtn);// Make button opacity sliderBoundRightCoord
    }
  
  })
};
  