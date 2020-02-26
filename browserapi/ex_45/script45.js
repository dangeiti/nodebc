window.onload = function(){
    let form = document.querySelector('form');
    let username = form.elements[0];
    let password = form.elements[1];

    form.onsubmit = function(event){
        alert(`The username is ${username.value} and the password is ${password.value} `)
        event.preventDefault();
    }
    // console.log(form.elements)
}
