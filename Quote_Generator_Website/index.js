const api_url="https://api.quotable.io/random";

const quote=document.getElementById("quotation")
const author=document.getElementById("auth")

async function getQuote(url){
const response=await fetch(url);
const data=await response.json();
console.log(data)
quote.innerHTML=data.content;
author.innerHTML=data.author;
}
getQuote(api_url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="  + quote.innerHTML +"---by"+ author.innerHTML, "Tweet window" , "width=600,height=300")
}
 tweet()