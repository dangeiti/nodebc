// const div = document.querySelector('div');
// const children = div.children;
// const firstChildElement = children[0];

// console.log(firstChildElement); // <p>Child Element</p>
// console.log(children.item(0));
window.onload = function(){
    let ul = document.querySelector('ul');
    let ulChildren = ul.children;
    console.log(ulChildren);

    let secondUlChild = ul.children[1];
    let putGreenClassOnSecond = secondUlChild.classList.add('green');
    let fourthUlChild = ul.children[3];
    let putRedClassOnFourth = fourthUlChild.classList.add('red');

    console.log(secondUlChild.parentElement);

    let secondChildParent = secondUlChild.parentElement;
    let secondChildParentClassOrange = secondChildParent.classList.add('orange')

    console.log(secondUlChild.parentElement)
}


