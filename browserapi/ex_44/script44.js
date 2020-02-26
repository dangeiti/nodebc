window.onload = function(){
    let btn = document.querySelector('button')
    let form = document.querySelector('form');
    let username = form.elements[0];
    let password = form.elements[1];
    // let button = form.elements[2];

    username.value = 'morty';
    password.value = 1234;

    btn.onclick = function(){
        alert(`The username is ${username.value} and the password is ${password.value} `)
    }
    // console.log(form.elements)
}
