window.onload = function(){
    const body = document.querySelector('body');
    let name = ['dan','bea','dyan','danica','geiti','bennette','diana','grail','dante','leticia'];
    const ul = document.createElement('ul');

    for (i = 0; i <= name.length - 1; i++){
        const li = document.createElement('li');
        li.innerText = name[i];
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
    console.log(body)
}