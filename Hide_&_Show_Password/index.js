
    let Password=document.getElementById("pass");
    let passwordImg=document.getElementById("passImg")
    let conPassword=document.getElementById("conPass");
    let conPasswordImg=document.getElementById("conPassImg")

    passwordImg.onclick=function(){
      if(Password.type== "password")  {
        Password.type="text"
        passwordImg.src="images/eye-open.png"
      }else{
        Password.type="password"
        passwordImg.src="images/eye-close.png"

      }
    }
    conPasswordImg.onclick=function(){
        if(conPassword.type=="password"){
            conPassword.type="text";
            conPasswordImg.src="images/eye-open.png"
        }else{
            conPassword.type="password"
            conPasswordImg.src="images/eye-close.png"


        }
    }

    