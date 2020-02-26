window.onload = function(){
    let body = document.querySelector('body');

    let pressKey = function(event){
        const keyCode = event.charCode;
        const key = String.fromCharCode(keyCode);

        console.log(`You pressed the ${key} key with the ${keyCode} code`)
    }

    body.addEventListener('keypress', pressKey )

}