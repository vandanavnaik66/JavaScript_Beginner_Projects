
const notesContainers=document.querySelector(".notesContainers")
let notes=document.querySelectorAll(".input-box")

function showNotes(){
    notesContainers.innerHTML=localStorage.getItem("notes")
}
showNotes()
function updateStorage(){
    localStorage.setItem("notes",notesContainers.innerHTML)
}
function createNote(){
let inputBox=document.createElement("p")
let img=document.createElement("img")
img.src="images/delete.png";
inputBox.setAttribute("contenteditable" ,"true")
inputBox.className="input-box"
notesContainers.appendChild(inputBox).appendChild(img)

}

notesContainers.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage()
    } else if(e.target.tagName="P"){
        notes=document.querySelectorAll(".input-box")
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }   
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})