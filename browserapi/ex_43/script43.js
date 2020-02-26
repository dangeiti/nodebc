window.onload = function(){
    let form = document.querySelector('form');
    let div = document.querySelector('div');
    let body = document.querySelector('body');

    let allProp = []

    let formAction = form.action;
    let formEncoding = form.encoding;
    let formMethod = form.method;
    let formName = form.name;
    
    allProp.push(formAction)
    allProp.push(formEncoding)
    allProp.push(formMethod)
    allProp.push(formName)

    for(i = 0; i <= allProp.length - 1; i++){
       let p = document.createElement('p');
       p.innerHTML = allProp[i];
       div.appendChild(p);
       body.appendChild(div);
    }

    

    // console.log(form.elements)
    // console.log(form.elements[1])
    // console.log(document.forms[0])
    // console.log(document.forms)
    // console.log(form.action);
    // console.log(form.encoding);
    // console.log(form.method); 
    // console.log(form.name);

}