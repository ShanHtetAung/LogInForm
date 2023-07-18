const form = document.querySelector("form");
const eField = form.querySelector(".email"),
eInput = eField.querySelector("input");
const pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    if(eInput.value == ""){ // if email is empty, add "shake" element in class 
        eField.classList.add("shake", "errorshow");
    }else{
        checkEmail();
    }
    if(pInput.value == ""){ // if password is empty
        pField.classList.add("shake", "errorshow");
    }

    setTimeout(()=>{ //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    function checkEmail () {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("errorshow");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value!="") ? errorTxt.innerHTML = "Enter a valid email address" : errorTxt.innerHTML = "Email can't be blank";
        }
        else{
            eField.classList.remove("errorshow");
        }
        
    }
   
    pInput.onkeyup = ()=>{
        
        if(eInput.value == ""){
            pField.classList.add("errorshow");
        }
        else{
            pField.classList.remove("errorshow");
        }
    }

    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        // window.location.href = "#";
        console.log("Form submitted");
        
    }
}