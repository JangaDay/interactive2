let letters = document.querySelectorAll('.letter')

    for(let counter = 0; counter < letters.length; counter ++){
        letters[counter].addEventListener('mouseenter',function(){
        	letters[counter].classList.add('beenMoused')
        })

    }