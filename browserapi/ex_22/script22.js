window.onload = function(){
    let h1 = document.querySelector('h1');
    let h1Text = h1.innerText;

    let p = document.querySelector('p');
    let pText = p.textContent;

    h1.innerText = pText;
    p.textContent = h1Text;
}