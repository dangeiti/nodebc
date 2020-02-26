window.onload = function(){
    let ul = document.querySelector('ul');
    let ulChildren = ul.children;

    let firstUlChild = ul.children[0];
    let secondUlChild = ul.children[1];
    let thirdUlChild = ul.children[2];
    let fourthUlChild = ul.children[3];
    let fifthUlChild = ul.children[4];
    let sixthUlChild = ul.children[5];
    
    let secondUlChildWithClass = firstUlChild.nextElementSibling.classList.add('orange');
    let thirdUlChildWithClass = secondUlChild.nextElementSibling.classList.add('orange');
    let fourthUlChildWithClass = thirdUlChild.nextElementSibling.classList.add('orange');
    let fifthUlChildWithClass = fourthUlChild.nextElementSibling.classList.add('orange');
    
    let thirdUlChildWithNewClass = fourthUlChild.previousElementSibling.classList.replace('orange', 'red');
    let firstUlChildWithNewClass = secondUlChild.previousElementSibling.classList.add('green');

    console.log(ul)

}