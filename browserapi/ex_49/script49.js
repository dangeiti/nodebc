window.onload = function(){
    let form = document.querySelector('form');

    form.onsubmit = function(event){
        event.preventDefault();
        const username = event.target.elements[0];
        const password = event.target.elements[1];

        if(username.value.length === 0 && password.value.length === 0){
            username.classList.add('error');
            password.classList.add('error');
            alert(`Please input a username and password`)
        }else if(username.value.length === 0){
            username.classList.add('error');
            alert(`Please input username`)
        }else if(password.value.length === 0){
            password.classList.add('error');
            alert(`Please input password`)
        }else{
            alert(`Congratulation! You've logged in!`)
        }
    }

}