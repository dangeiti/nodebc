window.onload = function(){
    let images = ['batmanwb.png','flashwb.png','supermanwb.png','wonder_womanwb.png'];
    
    const body = document.querySelector('body');

    for(i = 0;i <= images.length - 1; i++){
        let img = document.createElement('img');
        img.setAttribute('src', `img/${images[i]}`);
        body.appendChild(img);
    }

    let imgs = document.querySelectorAll('img');
    let otherImages = [];

    for (const image_ of imgs) {
        image_.onmouseover = function(){
            otherImages = [];
            let attr = this.attributes[0].value;
            otherImages.push(attr)
            let sliceWord = otherImages[0].slice(0,-6)
            this.setAttribute('src', sliceWord.concat('.png'))
        };
        image_.onmouseout = function(e){
            otherImages = [];
            let attr = e.target.attributes[0].value;
            otherImages.push(attr)
            let sliceWord = otherImages[0].slice(0,-4)
            e.target.setAttribute('src', sliceWord.concat('wb.png'))
        };

        image_.onclick = function(e){
            let sliceWord = e.target.attributes[0].value.slice(4,-4)
            alert(`The superhero name is ${sliceWord}`)
        }
      }
}