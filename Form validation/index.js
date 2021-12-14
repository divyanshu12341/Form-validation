const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//add event
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validate();
});

const sendData  =(sRate,count)=>{
    if(sRate===count){
        
        Swal.fire(
            'Congratulations!',
            'success'
          )
    }
} 

const successmsg = () =>{
    let formCon = document.getElementsByClassName("form-control");
    var count = formCon.length - 1;
    for(var i = 0;i<formCon.length;i++){
        var sRate = 0 + i;
        if(formCon[i].className=="form-control success"){
            sendData(sRate,count);
        }else{
            return false;
        }
    }
}
// Validate email

const isEmail = (emailVal)=>{

    //@ should not be at first place
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol<1){
        return false;
    }

    //checking for minimum 3 characters of dot
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 3){
        return false;
    }
    if(dot===emailVal.length-1){
        return false;
    }
    return true;
}
const validate = ( )=>{
    //For removing whitespaces
    const formVal = form.value;
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value;
    const passwordVal = password.value;
    const cpasswordVal = cpassword.value;

    //validate username
    if(usernameVal===""){
        setErrorMsg(username,"username cannot be blank");
    }
    else if (usernameVal.length<=2){
        setErrorMsg(username,"Min 3 character");
    }
    else{
        setSuccessMsg(username);
    }

    //validate email
    if(emailVal===""){
        setErrorMsg(email,"Email cannot be blank");
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email,"Not a valid email");
    }
    else{
        setSuccessMsg(email);
    }

    //validate phone

    if(phoneVal===""){
        setErrorMsg(phone,"Phone cannot be blank");
    }
    else if(phoneVal.length!=10){
        setErrorMsg(phone,"Not a valid phone no");
    }
    else{
        setSuccessMsg(phone);
    }
    //validate password

    if(passwordVal===""){
        setErrorMsg(password,"Password cannot be null");
    }
    else if(passwordVal.length<8){
        setErrorMsg(password,"Enter minimum eight characters");
    }
    else{
        setSuccessMsg(password);
    }

    //validate confirm password

    if(cpasswordVal===""){
        setErrorMsg(cpassword,"Confirm password cannot be null");
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword,"It does not matches with above password");
    }
    else{
        setSuccessMsg(cpassword);
    }
    successmsg();
    
}
function setErrorMsg(input,errorMsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errorMsgs;
}
function setSuccessMsg(input,errorMsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control success";
    small.innerText = errorMsgs;
}
