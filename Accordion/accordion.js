let accordion=document.querySelectorAll('.section-btn')
let i;

for(i=0; i<accordion.length;i++){
    accordion[i].addEventListener("click",function(){
       this.classList.toggle("active");
        let panel=this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null
        }else{
            panel.style.maxHeight=panel.scrollHeight + "px"

        }
    })
}
