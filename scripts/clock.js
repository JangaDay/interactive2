let clockEl = document.querySelector('#clock')
let secondHand = document.querySelector('#secondHand')

// run getTime once on load

getTime();

// call getTime every 1 second

setInterval(function() {
  getTime();
}, 1000);




// set up time getting function

function getTime(){
  
  // get the date
  
  let d = new Date();

  // get hours, minutes, and seconds
  
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  // update the clock's text
  
  // let timeText = h + ":" + m + ":" + s
  // clockEl.innerText = timeText

  // rotate secondHand based on the second
    
  secondHand.animate([{
    transform:'rotate('+ (s-1) * 6 +'deg)'
  },
  {
    transform:'rotate('+ s * 6 +'deg)'
  }],{
    duration:100,
    easing:'cubic-bezier(0.75, 0.000, 0.800, 1.5)',
    fill:'forwards'
  })
  
  
  // detect a specific time
  
  if(h < 19 && h > 16){
    clockEl.classList.add('classTime');
  } else {
    clockEl.classList.remove('classTime');
  }
}

// add a zero to times below 10

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}