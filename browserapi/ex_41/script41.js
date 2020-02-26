window.onload = function(){
    let body = document.querySelector('body');
    let ul = document.createElement('ul');

    let weeklyChores = [
        'do laundry',
        'sweep the floor',
        'vaccum the carpet',
        'carwash',
        'dishwash',
        'bath kids',
        'shopping',
        'feed the dog',
        'cook',
        'throw garbage'
    ]
    for(i = 0;i <= weeklyChores.length - 1; i++){
        let li = document.createElement('li');
        li.innerHTML = weeklyChores[i];
        ul.appendChild(li);
        body.appendChild(ul)
    }
    let allLists = document.querySelectorAll('li')

    for (const list of allLists) {
        list.addEventListener('click', function(event) {
          event.target.classList.add('striked');
        })
      }
}