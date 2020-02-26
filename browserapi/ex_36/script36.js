window.onload = function(){
    let firstBtn = document.querySelector('#firstButton');
    let secondBtn = document.getElementById('secondButton');
    let a = document.querySelector('a');
    let html = document.querySelector('html');

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
        alert('This link doesn\'t send us to a different page as we\'re preventing the default behaviour');
    }

    a.addEventListener('click', preventDefault)

    const axis = function(event){
        let x = event.clientX;
        let y = event.clientY;

        console.log(`Click position: x-axis: ${x}, y-axis: ${y}`)

    }

    html.addEventListener('click', axis)

}