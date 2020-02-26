window.onload = function(){

    const body = document.querySelector('body');
    const ol = document.createElement('ol');
    let listInArray = [];

    while(true){

        let li = document.createElement('li');
        let ask = prompt('Please input any names you want');
        li.innerText = ask;
        if(ask){
            ol.appendChild(li);
            body.appendChild(ol);
            listInArray.push(li);//push in array to iterate in array
            for(i = 0;i <= listInArray.length - 1;i++){
                if(i % 2 == 0){//reverses even number because of index 0 to start
                    li.style.color = '#eee';
                }else {
                    li.style.color = '#ddd';
                }
            }
        }else if(ask == '') {
            break
        }
    }
    
}