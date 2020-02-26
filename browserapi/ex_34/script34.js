window.onload = function(){
    let firstBtn = document.querySelector('#firstButton');
    let secondBtn = document.getElementById('secondButton');

    const oneClick = function(){
        alert('You clicked an event listened element');
    }

    firstBtn.addEventListener('click', oneClick);

    const removeEventClick = function(){
        firstBtn.removeEventListener('click', oneClick);
    }

    secondBtn.onclick = removeEventClick;
}