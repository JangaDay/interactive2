



let scrollone = document.querySelector('.scrollone')

scrollone.addEventListener('scroll',function(event){
  console.log(event.target.scrollTop)
  let maxScroll = 565
  let animationLength = 2000

  let negativeMillis = -event.target.scrollTop/maxScroll * animationLength


  scrollone.style.animationDelay = negativeMillis + 'ms'
})










let scrolltwo = document.querySelector('.scrolltwo')
let scrollthree = document.querySelector('.scrollthree')

scrolltwo.addEventListener('scroll',function(event){
  scrollthree.scrollTop = event.target.scrollTop
  
})






scrollthree.addEventListener('scroll',function(event){
  console.log(event.target.scrollTop)
  let maxScroll = 565
  let animationLength = 2000

  let negativeMillis = -event.target.scrollTop/maxScroll * animationLength


  scrollthree.style.animationDelay = negativeMillis + 'ms'
})





