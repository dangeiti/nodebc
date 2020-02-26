window.onload = function(){
    let firstBtn = document.querySelector('#firstButton');
    let secondBtn = document.getElementById('secondButton');
    let a = document.querySelector('a');

    const oneClick = function(){
        alert('You clicked an event listened element');
    }

    firstBtn.addEventListener('click', oneClick);

    const removeEventClick = function(){
        firstBtn.removeEventListener('click', oneClick);
    }

    secondBtn.onclick = removeEventClick;

    const preventDefault = function(event){
        event.preventDefault();
        alert('This link doesn\'t send us to a differen page as we\'re preventing the default behaviour');
    }

    a.addEventListener('click', preventDefault)

}