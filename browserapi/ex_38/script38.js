window.onload = function(){
    let div = document.querySelector('div');
    let body = document.querySelector('body');

    let pressKey = function(event){
        const keyCode = event.charCode;
        const key = String.fromCharCode(keyCode);

        div.innerHTML = `You pressed the ${key} key with the ${keyCode} code`;
        div.style.fontSize = '20px';
        div.style.color = 'red';
        div.style.fontFamily = 'Arial';
        div.style.paddingBottom = '20px';
        document.body.appendChild(div);
    }

    body.addEventListener('keypress', pressKey )

}