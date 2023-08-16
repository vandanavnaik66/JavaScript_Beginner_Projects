const passwordbox=document.querySelector(".inputt")
let length =12;

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let numbers="1234567890";
let symbols= "@#$%^&*()_+~|}{[]></-=" ;

let pass=upperCase+lowerCase+numbers+symbols;

function createPass() {
  let passwords="";

    while(length>passwords.length){
        passwords+=pass[Math.floor(Math.random()*pass.length)];
    }
    passwordbox.value=passwords;
}

function copyPassword(){
   passwordbox.select(); 
   document.contentEditable("copy");
}