



let teeth = document.querySelector('.teeth')

let corn = document.querySelector('.corn')

let cherry = document.querySelector('.cherry')
let watermelon = document.querySelector('.watermelon')


let cherryText = document.querySelector('.cherryText')

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

	cherry.addEventListener('mouseenter',function(event){
		watermelon.classList.add('dim')
		// cherryText.classList.add('show')
	})

	cherry.addEventListener('mouseleave',function(event){
		watermelon.classList.remove('dim')
	})


}