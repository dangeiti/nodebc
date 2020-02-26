window.onload = function(){
    const body = document.querySelector('body');
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Dynamic content!!!';
    
    const p = document.createElement('p');
    p.innerHTML = 'This elements were created using JavaScript';
    document.body.appendChild(h1);
    document.body.appendChild(p);
}