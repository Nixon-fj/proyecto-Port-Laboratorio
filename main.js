const copy = [

    { intro:"A multi-talented freelance web desiger & front-end developer" },
    { transform: "I transform ideas into digital solutions that help clients better connect with their audiences.I believe having a clean and minimal design is the best way to make websites elegant and functional..."},
    { simply:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
    { popular: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    { passages: "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
];

let hasChanged;

function change(){
    console.log("change");
    let title = document.body.getElementsByTagName('h1')[0];
    let btn = document.body.getElementsByTagName('button')[0];

    if(hasChanged){
        hasChanged = false;
        title.textContent = "A multi-talented freelance web desiger & front-end developer";
        btn.textContent = "Change this text";
    }else{
        hasChanged = true;
        title.textContent = "This is a new title now!";
        btn.textContent = "Back to default text"
    }
}//fin de la funcion

function mobOpenMenu() {
    console.log("funciona");
    let nav = document.body.getElementsByClassName('top-nav')[0];
    nav.style.left = "0";

}//fin de la funcion

function mobCloseMenu() {
    console.log("funciona");
    let nav = document.body.getElementsByClassName('top-nav')[0];
    nav.style.left = "-21em";

}//fin de la funcion


function showErrorMsg(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    hideError(referenceNode);
}

function hideError(el) {
    el.addEventListener("blur", (event) => {
        el.classList.remove("error");
        if (el.nextElementSibling !== null) {
            el.nextElementSibling.remove();
        }
    });
}

function checkForm() {

    let hasErrors;

    let name = document.getElementById('contact_name');
    if (validator.isEmpty(name.value)) {
        name.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "This field is required";
        showErrorMsg(name, msg);
        hasErrors = true;
    }

    let email = document.getElementById('contact_email');
    if (!validator.isEmail(email.value)) {
        console.log("not an email");
        email.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Valid email is required";
        showErrorMsg(email, msg);
        hasErrors = true;
    }

    let comment = document.getElementById('contact_message');
    if (validator.isEmpty(comment.value)) {
        comment.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "This field is required";
        showErrorMsg(comment, msg);
        hasErrors = true;
    }

    if (hasErrors) {
        return false;
    } else {
        return true;
    }

};//fin de la funcion 

document.addEventListener('DOMContentLoaded', (event) =>{

    
    let title = document.body.getElementsByTagName('h1')[0];
    title.textContent = copy[0].intro;

    AOS.init();
    
});


