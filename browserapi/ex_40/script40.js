window.onload = function(){
//     let a = document.querySelector('a');
//     let colors = ['red','blue','green','gray','white'];
//     let i = 0;
//     let currentColors;

//     let mouseOver = function(){
//         if(i == 0){
//             currentColors = [];
//             this.style.backgroundColor = colors[i];
//             let color = currentColors.push(colors[i])
//             i++
//             return color
//         }else if(i == 1){
//             currentColors = [];
//             this.style.backgroundColor = colors[i];
//             let color = currentColors.push(colors[i])
//             i++
//             return color
//         }else if(i == 2){
//             currentColors = [];
//             this.style.backgroundColor = colors[i];
//             let color = currentColors.push(colors[i])
//             i++
//             return color
//         }else if(i == 3){
//             currentColors = [];
//             this.style.backgroundColor = colors[i];
//             let color = currentColors.push(colors[i])
//             i++
//             return color
//         }else if(i == 4){
//             currentColors = [];
//             this.style.backgroundColor = colors[i];
//             let color = currentColors.push(colors[i])
//             i = 0
//             return color
//         }
//     }
//     let mouseOut = function(event){
//         alert(`The link background color is: ${currentColors}`);
//     }
// a.onmouseover = mouseOver;
// a.onmouseout = mouseOut;
    

let links = document.querySelectorAll('a');
let colors = ['red','blue','green','gray','white'];
let i = 0;
let currentColors;

for(const link of links){
    let mouseOver = function(){
            currentColors = [];
            this.style.backgroundColor = colors[i];
            let color = currentColors.push(colors[i])
            i++

            if(i == colors.length){
                i = 0
            }

            return color
        }
    let mouseOut = function(event){

        alert(`The link background color is: ${currentColors}`);
    }
    link.onmouseover = mouseOver;
    link.onmouseout = mouseOut;
    }
}