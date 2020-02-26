window.onload = function(){
    const firstBtn = document.getElementById('firstbutton');

    const handleClickEvent = function(){
        alert('Oh.. Don\'t Click Me!!');
    }

    firstBtn.onclick = handleClickEvent
}