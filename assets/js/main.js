var line = document.querySelector('.slider-card__line');
var overlayLeft = document.querySelector('.slider-card__overlay');
var overlayRight = document.querySelector('.slider-card__overlay_right');
var btnLeft = document.querySelector('.slider-wrapper__arrow_left');
var btnRight = document.querySelector('.slider-wrapper__arrow_right');
var item = document.querySelector('.slider-card__item:nth-child(2)');
console.log(item);
// var item = document.querySelector('.slider-card__item');
var itemWidth = null;
var gridGap = null;
var lineLeft = line.getBoundingClientRect().left;
var lineRight = line.getBoundingClientRect().right;
var windowWidth = null;

function processLeftClick(){
  gridGap = +((getComputedStyle(line).gridColumnGap).slice(0, -2));
  itemWidth = item.getBoundingClientRect().width;

  nextLinePos = +((getComputedStyle(line).left).slice(0,-2)) + (itemWidth + gridGap);
  line.style.left = nextLinePos + 'px';
  lineLeft = line.getBoundingClientRect().left + (itemWidth + gridGap);
  lineRight = line.getBoundingClientRect().right + (itemWidth + gridGap);
  btnLeft.removeEventListener('click', processLeftClick);
}

function processRightClick(){
  gridGap = +((getComputedStyle(line).gridColumnGap).slice(0, -2));
  itemWidth = item.getBoundingClientRect().width;
  
  nextLinePos = +((getComputedStyle(line).left).slice(0,-2)) - (itemWidth + gridGap);
  line.style.left = nextLinePos + 'px'; // -140 if widthWindon <= 375px then -542px
  lineLeft = line.getBoundingClientRect().left - (itemWidth + gridGap);
  lineRight = line.getBoundingClientRect().right - (itemWidth + gridGap);
  btnRight.removeEventListener('click', processRightClick);
  windowWidth = document.documentElement.clientWidth;
  console.log('document.documentElement.clientWidth: ', windowWidth);
}

btnLeft.addEventListener('click', processLeftClick);
btnRight.addEventListener('click', processRightClick);

function changeOpacityLeft(lineLeft){
  if (lineLeft > overlayLeft.getBoundingClientRect().left) {
    btnLeft.style.zIndex = 0;
  } else {
    btnLeft.style.zIndex = 2;
  };
} 

function changeOpacityRight(lineRight){
  if (lineRight < overlayRight.getBoundingClientRect().left) {
    btnRight.style.zIndex = 0;
  } else {
    btnRight.style.zIndex = 2;
  };
}

changeOpacityLeft(lineLeft);
changeOpacityRight(lineRight);

line.addEventListener('transitionend', function() {
  btnLeft.addEventListener('click', processLeftClick);
  btnRight.addEventListener('click', processRightClick);
  changeOpacityLeft(lineLeft);
  changeOpacityRight(lineRight);
});

window.addEventListener('resize', function(event){
  changeOpacityLeft(lineLeft);
  changeOpacityRight(lineRight);
});














// line.addEventListener('click', function(){
//   console.log('lineLeft: ', line.getBoundingClientRect().left);
//   console.log('overlayLeft.getBoundingClientRect().left: ', overlayLeft.getBoundingClientRect().left);
//   console.log('lineRight: ', line.getBoundingClientRect().right);
//   console.log('-------------------');
// })

overlayLeft.addEventListener('click', function(){
  console.log('lineLeft: ', lineLeft);
  console.log('overlay: ', overlayLeft.getBoundingClientRect().left);
  console.log('-------------------');
})

// overlayRight.addEventListener('click', function(){
//   console.log('overlayRight: ', overlayRight.getBoundingClientRect().left);
//   console.log('-------------------');
// })