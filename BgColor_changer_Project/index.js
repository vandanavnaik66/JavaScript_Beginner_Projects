const buttons=document.querySelectorAll(".btn")
const body=document.querySelector('body')
buttons.forEach(function (button){
console.log(button)
button.addEventListener("click" ,function(e){
console.log(e)
console.log(e.target)
if(e.target.id=="lightseagreen"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=="pink"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=="lightblue"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=="lightsalmon"){
    body.style.backgroundColor=e.target.id
}
if(e.target.id=="lightslategray"){
    body.style.backgroundColor=e.target.id
}
})
})
