



let teeth = document.querySelector('.teeth')

let corn = document.querySelector('.corn')

let cherry = document.querySelector('.cherry')
let watermelon = document.querySelector('.watermelon')
let fruit = document.querySelector('.fruit')

let steven = document.querySelector('.steven')
let summer = document.querySelector('.summer')

let cherrytexttitle = document.querySelector('.cherrytexttitle')
let cherrytextinfo = document.querySelector('.cherrytextinfo')

let watermelontexttitle = document.querySelector('.watermelontexttitle')
let watermelontextinfo = document.querySelector('.watermelontextinfo')

let fruittexttitle = document.querySelector('.fruittexttitle')
let fruittextinfo = document.querySelector('.fruittextinfo')

if(!cherry){


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

}

if(cherry){





	window.addEventListener('mousemove',(e)=>{
		cherry.classList.remove('hover')
		
		fruit.classList.remove('hover')
		
		watermelon.classList.remove('hover')
		
		watermelon.classList.remove('dim')
		
		fruit.classList.remove('dim')
		
		cherry.classList.remove('dim')

		steven.classList.remove('dim')

		summer.classList.remove('dim')

		teeth.classList.remove('dim')
		
		cherrytexttitle.classList.remove('show')
		
		cherrytextinfo.classList.remove('show')
		
		watermelontexttitle.classList.remove('show')

		watermelontextinfo.classList.remove('show')
		
		fruittexttitle.classList.remove('show')

		fruittextinfo.classList.remove('show')

		let thirdOfWindow = 475 //window.innerWidth/3
		

		if(window.innerWidth > 600){

			if(e.clientX < thirdOfWindow - 25){
				cherry.classList.add('hover')
				watermelon.classList.add('dim')
				fruit.classList.add('dim')
				steven.classList.add('dim')
				summer.classList.add('dim')
				cherrytexttitle.classList.add('show')
				cherrytextinfo.classList.add('show')
				teeth.classList.add('dim')
			} else if(e.clientX > thirdOfWindow && e.clientX < (2 * thirdOfWindow)){
				watermelon.classList.add('hover')
				cherry.classList.add('dim')
				fruit.classList.add('dim')
				watermelontexttitle.classList.add('show')
				watermelontextinfo.classList.add('show')
				steven.classList.add('dim')
				summer.classList.add('dim')
				teeth.classList.add('dim')
			} else if(e.clientX > 2 * thirdOfWindow + 25){
				fruit.classList.add('hover')
				cherry.classList.add('dim')
				watermelon.classList.add('dim')
				fruittexttitle.classList.add('show')
				fruittextinfo.classList.add('show')
				steven.classList.add('dim')
				summer.classList.add('dim')
				teeth.classList.add('dim')
			}
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








