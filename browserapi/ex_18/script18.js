window.onload = function(){
    let firstLink = document.querySelector('a');

    let hasClass = firstLink.hasAttribute('class');

    if (hasClass){
        firstLink.classList.add('azul');
    }else {
        firstLink.classList.add('rojo');
    }
}