window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("button")
    const list = document.getElementsByTagName("li")
    const rating = document.getElementById("rating");
    const firstcontainer = document.getElementById("firstcontainer")
    const secondcontainer = document.getElementById("secondcontainer")
   
 

 

    for(let i = 0; i < list.length; i++){
      

      list[i].addEventListener("click", function(){
          if(list[i].classList.contains("defaultcolor")){
            list[i].classList.remove("defaultcolor")
            list[i].classList.add('clicked')
          } 
        else{
          list[i].classList.add("defaultcolor")
        }   
   
         button.addEventListener("click", getValue)
    
        
        
      function getValue(){
           rating.innerHTML = list[i].value
           firstcontainer.classList.add("hide");
           secondcontainer.classList.remove("hide")
           
           
        }
      })
      
      
    }
    
   


    
    

});

