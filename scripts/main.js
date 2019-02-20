let letters = document.querySelectorAll('.firstpage .letter')

    
let doneDidScroll = false

setTimeout(function(){
	 window.addEventListener('scroll',function(){
	 	
	 	if(!doneDidScroll){
		 	for(let counter = 0; counter < letters.length; counter ++){
		       
		    	letters[counter].classList.add('beenMoused')
		        

		    }
		}

		doneDidScroll = true

	 })
	},10)





let letters2 = document.querySelectorAll('.centerthings .letter')

    
let doneDidScroll2 = false

setTimeout(function(){
	 window.addEventListener('scroll',function(){
	 	
	 	if(window.scrollY > window.innerHeight){



		 	if(!doneDidScroll2){
			 	for(let counter = 0; counter < letters2.length; counter ++){
			       
			    	letters2[counter].classList.add('beenMoused')
			        

			    }
			}

			doneDidScroll2 = true
		}
	 })
	},10)







let letters3 = document.querySelectorAll('.lastpage .letter')

    for(let counter = 0; counter < letters3.length; counter ++){
        letters3[counter].addEventListener('mouseenter',function(){
        	letters3[counter].classList.add('beenMoused')
        })

    }
