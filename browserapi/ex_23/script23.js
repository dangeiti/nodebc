window.onload = function(){
    let ul = document.querySelector('ul');
    ul.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li>';

    console.log(ul.children);
    console.log(ul.innerHTML);

    console.log(ul.textContent)
    console.log(ul.innerText)

    console.log(ul.parentElement)
}