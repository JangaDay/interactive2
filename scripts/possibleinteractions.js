
let element3 = document.querySelector('#element-3')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')

element3.addEventListener('click',function() {
  
  element3.animate([{
			opacity: getComputedStyle(this).opacity,
			marginTop: getComputedStyle(this).marginLeft,
		},
    {
			opacity: 0,
			marginTop: '125px',
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });

})
  
element6.addEventListener('pointermove',function(e){
  var xPos = e.pageX-125;
  var yPos = e.pageY-125;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})
  
element4.addEventListener('click',function(){
  this.classList.t('gradient-background')
})

element5.addEventListener('click', function(){
  this.nextElementSibling.classList.toggle('circle');
})







let item22 = document.querySelector('.item22')
let scroller = document.querySelector('.item22 .scroller')

item22.addEventListener('scroll',function(){
  scroller.style.fontFamily = 'sans-serif'

})





let item23 = document.querySelector('.item23')
let scroller2 = document.querySelector('.item23 .scroller')

item23.addEventListener('scroll',function(){
  item23.style.borderRadius = 0
})



let item24 = document.querySelector('.item24')
let scroller3 = document.querySelector('.item24 .scroller')

item24.addEventListener('scroll',function(){
  item24.style.background = 'blue'
})


let item25 = document.querySelector('.item25')
let scroller4 = document.querySelector('.item25 .scroller')

item25.addEventListener('scroll',function(){
  item25.classList.add('spin')
})




let item26 = document.querySelector('.item26')
let scroller5 = document.querySelector('.item26 .scroller')

item26.addEventListener('scroll',function(){
  item26.classList.add('spinmore')
})









let item27 = document.querySelector('.item27')
let scroller6 = document.querySelector('.item27 .scroller')

item27.addEventListener('scroll',function(){
  item27.classList.add('spinevenmore')
})






let item28 = document.querySelector('.item28')
let scroller7 = document.querySelector('.item28 .scroller')

item28.addEventListener('scroll',function(){
  item28.classList.add('shrink')
})



let item29 = document.querySelector('.item29')
let scroller8 = document.querySelector('.item29 .scroller')

item29.addEventListener('scroll',function(){
  item29.classList.add('shrink')
})


















