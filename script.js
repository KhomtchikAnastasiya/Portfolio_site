"use strict"

let burgerButt=document.getElementById('hamburger');
burgerButt.addEventListener("click", openModal);


let modalBurgerButt=document.getElementById('modal-window__hamburger');
modalBurgerButt.addEventListener("click", closeModal);


function openModal() {
    document.getElementById('navigation').style.display='block';
    document.getElementById('hamburger').style.display='none';
    document.getElementById('modal-window__hamburger').style.display='block';
}

function closeModal() {
    document.getElementById('navigation').style.display='none';
    document.getElementById('hamburger').style.display='block';
    document.getElementById('modal-window__hamburger').style.display='none';
}


function errorMessage(text, error) {
    error=document.createElement('span');
    error.style.color='red';
    error.className ='error';
    error.innerHTML=text;
    return error;
}

const formTag=document.forms.contacts_form;
formTag.setAttribute('novalidate', 'true');

const nameField=formTag.elements.name;
nameField.addEventListener('focusout',validateField,false);
nameField.addEventListener('change',validateField,false);

const emailField=formTag.elements.email;
emailField.addEventListener('focusout',validateField,false);
emailField.addEventListener('change',validateField,false);

const messageField=formTag.elements.message;
messageField.addEventListener('focusout',validateField,false);
messageField.addEventListener('change',validateField,false);

function validateField(eo) {
    eo=eo||window.event;
    var field=eo.target;
    const fieldValue=field.value;
    
    var error=field.parentNode.querySelector('.error');
    if (error!=null) {
        error.remove();
    }

    if ( fieldValue =="") {
        var error=errorMessage('Поле не заполнено!', error);
        field.parentNode.append(error);
        return;
    }
}


console.log("Пример, как бы выглядел запрос для отправки данных из формы на сервер: www.script-obrabotchik.com/?name=Ivan&email=ivan@gmail.com&message=Hi")