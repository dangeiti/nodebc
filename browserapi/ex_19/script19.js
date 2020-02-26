window.onload = function(){
    let elementH1 = document.querySelector('h1');
    let elementDiv = document.querySelector('div');

    let h1HasAttr = elementH1.hasAttributes();
    let divHasAttr = elementDiv.hasAttributes();

    if(h1HasAttr || divHasAttr){
        elementH1.classList.add('striked');
        elementDiv.classList.add('striked');
    } else {
        elementH1.classList.add('bold');
        elementDiv.classList.add('bold');
    }

    elementDiv.removeAttribute('name');
    let removeDivAttr = elementDiv.hasAttribute('name');
    console.log(removeDivAttr);
}

