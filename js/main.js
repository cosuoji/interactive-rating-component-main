window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("button")
    const list = document.getElementsByTagName("li")
    const rating = document.getElementById("rating");
    const firstcontainer = document.getElementById("firstcontainer")
    const secondcontainer = document.getElementById("secondcontainer")
   
 

 

    for(let i = 0; i < list.length; i++){
      

      list[i].addEventListener("click", function(){
        // reset previously clicked option, if any
        const previouslyclicked = [ ...list ].find( li => li.classList.contains('clicked') )
        if(previouslyclicked){
          previouslyclicked.classList.remove('clicked')
          previouslyclicked.classList.add("defaultcolor")
        }

        // update clicked option
        list[i].classList.remove('defaultcolor')
        list[i].classList.add('clicked')
   
         button.addEventListener("click", getValue)
    
        
        
      function getValue(){
           rating.innerHTML = list[i].value
           firstcontainer.classList.add("hide");
           secondcontainer.classList.remove("hide")
           
           
        }
      })
      
      
    }
    
   


    
    

});

