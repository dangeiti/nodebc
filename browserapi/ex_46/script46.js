window.onload = function(){
    let form = document.querySelector('form');
    let body = document.querySelector('body');

    const select = document.querySelector('select');

    form.onsubmit = function(event){
        event.preventDefault();
        let index = select.selectedIndex;
        let div = document.createElement('div');
        let selectedCountry = select.options[index].innerHTML
        let optionValue = select.options[index].value
        div.innerHTML = `${selectedCountry} has been selected and it has ${optionValue} as id`;
        body.appendChild(div)
    }
}