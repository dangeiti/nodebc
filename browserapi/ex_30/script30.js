window.onload = function(){
    let ul = document.querySelector('ul');

    for(i = ul.children.length - 1; i >= 0; i--){
        ul.removeChild(ul.children.item(i))
    }
}