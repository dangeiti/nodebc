window.onload = function(){
    const body = document.querySelector('body');

let number = [];
for(i = 1; i <= 100; i++){
    number.push(i) 
}

let ul = document.createElement('ul');

for(i = 0; i <= number.length - 1; i++){
    let li = document.createElement('li');
    li.innerText = number[i]

    if(number[i] % 2 == 0){
        li.style.color = '#ddd';
    } else {
        li.style.color = '#eee';
    }

    body.appendChild(ul);
    ul.appendChild(li)
}
}