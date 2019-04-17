



let teeth = document.querySelector('.teeth')

let corn = document.querySelector('.corn')


setTimeout(()=>{

window.scroll(0,0)  





document.addEventListener('scroll',function(event){
  console.log(window.scrollY)



  let maxScroll = window.innerHeight

  let scrollPercent = window.scrollY / maxScroll
  


  teeth.style.top = -(scrollPercent * 400) + 'px'

  corn.style.top = (515 + (scrollPercent * 515)) + 'px'



if(scrollPercent > 0.95){
window.location.href ="file:///Users/jangaday11/Documents/Documents/GitHub/interactive2/Frykholm%202.html"
// console.log('hihi')

}


})










},16)