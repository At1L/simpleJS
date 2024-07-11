const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let hexColr = getHex();
    color.textContent = hexColr;
    document.body.style.backgroundColor = hexColr;
    
})

const getHex = () => {
    let hexClr = '#';
    for(let i = 0; i < 6; i++){
        hexClr += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexClr;
}