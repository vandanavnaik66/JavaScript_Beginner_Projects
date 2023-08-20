let nameEr=document.getElementById('name-error');
let phoneEr=document.getElementById('phone-error');
let emailEr=document.getElementById('email-error');
let messageEr=document.getElementById('message-error');
let submitEr=document.getElementById('submit-error');

function nameError(){
    let name=document.getElementById("nameVal").value;
if(name.length==0){
  nameEr.innerHTML='Name is required'
  return false;
}else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameEr.innerHTML=" Write full name";
  return false;
}
nameEr.innerHTML='<i class="fa-solid fa-circle-check"></i>'
return true;
}

function phoneError(){
    let phone=document.getElementById("phoneVal").value;
    if(phone.length==0){
        phoneEr.innerHTML="PhoneNo is required"
        return false;
    }
    else if(!phone.match(/^[0-9]{10}$/)){
         phoneEr.innerHTML="Enter 10 valid number"
        return false;
    }
phoneEr.innerHTML='<i class="fa-solid fa-circle-check"></i>'
return true;
}

function emailError(){
    let email=document.getElementById("emailVal").value;
    if(email.length==0){
        phoneEr.innerHTML="email is required";
        return false;
    }
    else if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
emailEr.innerHTML="email invalid"
return false;
}
emailEr.innerHTML='<i class="fa-solid fa-circle-check"></i>'
return true;
}

function messageError(){
    let message=document.getElementById("messageVal").value;
    let count=30;
    let left=count-message.length;
    if(left>0){
        messageEr.innerHTML=`${left} more characters required`;
        return false;
    }
messageEr.innerHTML='<i class="fa-solid fa-circle-check"></i>'

    return true;
}

function validateForm(){
    if(!nameError() || !phoneError() || !emailError() || !messageError()){
        submitEr.style.display='block';
        submitEr.innerHTML="Please fix the error to submit";
        //after showing the error that error should be hide after 3 second for that 
        // setTimeout is used
        setTimeout(function(){ submitEr.style.display='none'; },3000)
        return false
    }

}














