// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const female = checkboxes[0];
// const male = checkboxes[1];

// console.log(female.checked);  // returns true as the element has the checked attribute
// female.checked = false; // Set's the checkbox checked property to false
// console.log(female.value); // returns f as it's the element value

// console.log(male.checked);  // returns false as the element is not checked
// male.checked = true; // Set checked to true
// console.log(male.value); // returns m as it's the element value
// console.log(checkboxes)

window.onload = function(){
    let form = document.querySelector('form');
    // let body = document.querySelector('body');
    // const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    form.onsubmit = function(event){
        event.preventDefault();
        const selectedHeroElement = document.querySelectorAll('input:checked');
        // console.log(selectedHeroElement)

        if(selectedHeroElement.length == 0){
            alert(`Please at least select a superheroe`)
        }else if(selectedHeroElement.length == 1){
            alert(`The best superheroe is: ${selectedHeroElement[0].value}`)
        }else if(selectedHeroElement.length > 1){
            let allHeroes = []
            for(const heroes of selectedHeroElement){
                allHeroes.push(heroes.value) 
            }
            // console.log(allHeroes)
            alert(`The best superheores are: ${allHeroes.toString()}`)
        }
    }
}