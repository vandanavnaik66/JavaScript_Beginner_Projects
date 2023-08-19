function bulbHandle(){
    let bulbRef=document.getElementById("bulb");
    let btnRef=document.getElementById("Btn");
    if(btnRef.innerHTML=="ON"){
        bulbRef.src="images/on.png";
        btnRef.innerHTML="OFF";
    }
    else{
        bulbRef.src="images/off.png"
        btnRef.innerHTML="ON" 
    }
}
