



let teeth = document.querySelector('.teeth')

let corn = document.querySelector('.corn')

let cherry = document.querySelector('.cherry')
let watermelon = document.querySelector('.watermelon')
let fruit = document.querySelector('.fruit')

let cherrytext = document.querySelector('.cherrytext')

if(teeth){


setTimeout(()=>{

window.scroll(0,0)  



document.addEventListener('scroll',function(event){
  console.log(window.scrollY)



  let maxScroll = window.innerHeight

  let scrollPercent = window.scrollY / maxScroll
  


  teeth.style.top = -(scrollPercent * 400) + 'px'

  corn.style.top = (515 + (scrollPercent * 515)) + 'px'



if(scrollPercent > 0.95){
window.location.href ="Frykholm%202.html"
// console.log('hihi')

}


})



},16)

} else if(cherry){





	window.addEventListener('mousemove',(e)=>{
		cherry.classList.remove('hover')
		fruit.classList.remove('hover')
		watermelon.classList.remove('hover')
		watermelon.classList.remove('dim')
		fruit.classList.remove('dim')
		cherry.classList.remove('dim')
		cherrytext.classList.remove('show')

		if(e.clientX < 475){
			cherry.classList.add('hover')
			watermelon.classList.add('dim')
			fruit.classList.add('dim')
			cherrytext.classList.add('show')
		} else if(e.clientX < 950){
			watermelon.classList.add('hover')
			cherry.classList.add('dim')
			fruit.classList.add('dim')
			// watermelontext.classList.add('show')
		} else {
			fruit.classList.add('hover')
			cherry.classList.add('dim')
			watermelon.classList.add('dim')
		}
	})






// 	cherry.addEventListener('mouseenter',function(event){
// 		watermelon.classList.add('dim')
// 		fruit.classList.add('dim')
// 		cherrytext.classList.add('show')
// 	})

// 	cherry.addEventListener('mouseleave',function(event){
// 		watermelon.classList.remove('dim')
// 		fruit.classList.remove('dim')
// 	})


// watermelon.addEventListener('mouseenter',function(event){
// 		cherry.classList.add('dim')
// 		fruit.classList.add('dim')
// 		// cherryText.classList.add('show')
// 	})

// 	watermelon.addEventListener('mouseleave',function(event){
// 		cherry.classList.remove('dim')
// 		fruit.classList.remove('dim')
// 	})


// 	fruit.addEventListener('mouseenter',function(event){
// 		cherry.classList.add('dim')
// 		watermelon.classList.add('dim')
// 		// cherryText.classList.add('show')
// 	})

// 	fruit.addEventListener('mouseleave',function(event){
// 		cherry.classList.remove('dim')
// 		watermelon.classList.remove('dim')
// 	})

}








