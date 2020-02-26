window.onload = function(){
    let firstBtn = document.querySelector('#firstButton');
    const mousedownClick = function(){
        this.style.color = 'blue';
    }

    const oneClick = function(){
        alert('You clicked an event listened element');
    }

    firstBtn.addEventListener('click', oneClick)
    firstBtn.addEventListener('mousedown', mousedownClick)
}