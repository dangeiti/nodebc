window.onload = function(){
    let firstBtn = document.querySelector('#firstButton');
    let div = document.querySelector('div');
    let counter = 0;

    let dblClickOn = function(){
        counter++
        div.innerHTML = counter;
    }

    firstBtn.ondblclick = dblClickOn;
}