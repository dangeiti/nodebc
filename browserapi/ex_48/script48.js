window.onload = function(){
    let form = document.querySelector('form');
 
    let username = form.elements[0]
    let password = form.elements[1]
    console.log(username);
    console.log(password)

    
    username.onfocus = function() {
        username.style.boxShadow = '0 0 8px #666';
    }

    username.onblur = function() {
        username.style.boxShadow = 'none';
      }
    
    password.onfocus = function() {
        password.style.boxShadow = '0 0 8px #666';
    }

    password.onblur = function() {
        password.style.boxShadow = 'none';
      }

      form.onsubmit = function(event){
        event.preventDefault()
        if(username.value && !password.value){
            alert(`The username is ${username.value} but no value input on password`)
        }else if(!username.value && password.value){
            alert(`The username has no value input but the password is ${password.value}`)
        }else if(!username.value && !password.value){
            alert(`The username and password has no value input`)
        }else {
            alert(`The username is ${username.value} and the password is ${password.value}`)
        }
      }

}