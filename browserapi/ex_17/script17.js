window.onload = function(){
    let color = prompt('Please choose & input one of the following colors: green, blue or red');

    let firstLink = document.querySelector('a');

    if(color.toLowerCase() == 'green'){
        firstLink.classList.add('green');
    } else if(color.toLowerCase() == 'blue'){
        firstLink.classList.add('blue');
    } else if(color.toLowerCase() == 'red'){
        firstLink.classList.add('red');
    } else {
        alert('Please input only green, blue or red')
    }

}