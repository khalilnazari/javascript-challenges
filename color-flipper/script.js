//pannel script 

const flipColor = document.querySelector('#flip_color'); 
const generateColor = document.querySelector('#generate_color'); 
const displayColor = document.querySelectorAll('.display-color'); 

flipColor.addEventListener('click', () => {
    togglePanel('flip_color')
})

generateColor.addEventListener('click', () => {
    togglePanel('generate_color')
})

function togglePanel (attValue) {
    displayColor.forEach(el => {
        let forAtt = el.getAttribute('for'); 

        if(forAtt == attValue) {
            el.classList.remove('hide') 
            el.classList.add('show') 
            
        } else {
            el.classList.remove('show') 
            el.classList.add('hide') 
        }
    })
}



// flip Color 
const colorList = ['#0000ff', '#40ff00', 'rgb(128, 0, 0)', 'hsl(0, 100%, 50%)']

document.querySelector('#flip_btn').addEventListener('click', () => {
    const randomNumber = getRandomNumber(colorList.length-1); 
    const randomColor = colorList[randomNumber];  
    document.body.style.backgroundColor=randomColor;
    document.querySelector('#show_flip_color').textContent=randomColor;
})



// Generate Color

const colorChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const show_color  = document.querySelector('.show_color'); 
const flip_color_btn = document.querySelector('#flip_color_btn'); 


flip_color_btn.addEventListener('click', () => {
    let randomColor = getRandomColor(); 
    let btnColor = getRandomColor(); 
    document.body.style.backgroundColor=randomColor; 
    flip_color_btn.style.backgroundColor=btnColor; 
    show_color.style.backgroundColor=btnColor; 
    show_color.textContent = btnColor; 
})

function getRandomColor() {
    let max = colorChar.length - 1; 
    return randomColorStr = "#" + 
    colorChar[getRandomNumber(max)] + ""+ 
    colorChar[getRandomNumber(max)]+ "" +
    colorChar[getRandomNumber(max)]+ "" +
    colorChar[getRandomNumber(max)]+ "" +
    colorChar[getRandomNumber(max)]+ "" +
    colorChar[getRandomNumber(max)]; 
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max  - 0 + 1) + 0); 
}