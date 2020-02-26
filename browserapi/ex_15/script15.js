window.onload = function() { 

    const important = document.getElementById('important');
    const link = document.querySelectorAll('li a');
    const ul = document.querySelector('ul');
    const blue = document.querySelector('p.blue');

	console.log(important);
    console.log(link);
    console.log(ul);
    console.log(blue);
}

// const element = document.querySelector('p')

// console.log(element.attributes); // NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

// console.log(element.attributes[0].name);  // id
// console.log(element.attributes[0].value); // main

// console.log(element.attributes[1].name);  // class
// console.log(element.attributes[1].value); // red