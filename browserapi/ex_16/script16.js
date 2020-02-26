 window.onload = function() { 
	const element = document.querySelector('a.menu')

    console.log(element.attributes);

    console.log(element.attributes[0].name);  
    console.log(element.attributes[0].value); 

    console.log(element.attributes[1].name); 
    console.log(element.attributes[1].value);

    console.log(element.getAttribute('href'));
    console.log(element.getAttribute('class'));

    console.log(element.className);
    // console.log(element.href);
}




