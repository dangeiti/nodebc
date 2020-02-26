window.onload = function(){
    let form = document.querySelector('form');

    const validateUser = function(username) {
        // we check if the username value (string) has alphabumeric characters only
        const usernameRegex = /^[a-z0-9]+$/i;
        
        return usernameRegex.test(username);
      }

      const validatePass = function(password) {
        // we check if the username value (string) has alphabumeric characters only
        const passwordRegex = /^[a-z0-9]+$/i;
        
        return passwordRegex.test(password);
      }

      const validateEmail = function(email) {
        // this is a simple email validation regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        // this text method will return a true/false value depending if the string matches the regex or not
        return emailRegex.test(email);
      }

    form.onsubmit = function(event){
        event.preventDefault();
        const email = event.target.elements[0];
        const username = event.target.elements[1];
        const password = event.target.elements[2];

        // if(username.value.length === 0 && password.value.length === 0){
        //     username.classList.add('error');
        //     password.classList.add('error');
        //     alert(`Please input a username and password`)
        // }else if(username.value.length === 0){
        //     username.classList.add('error');
        //     alert(`Please input username`)
        // }else if(password.value.length === 0){
        //     password.classList.add('error');
        //     alert(`Please input password`)
        // }else{
        //     alert(`Congratulation! You've logged in!`)
        // }

        if (!validateUser(username.value)) {
            console.log('Incorrect username');
            // return false;
        }
        
        if (!validateEmail(email.value)) {
            console.log('Incorrect Email');
            // return false;
        }
        if (!validatePass(password.value)) {
        console.log('Incorrect Password');
        // return false;
        } 
        if(validateUser(username.value) && validateEmail(email.value) && validatePass(password.value)){
        // At this point we can say that the form is valid as the username and email both match the expected regex
        // return true;
        console.log('You have logged in!')
        }
    }
}