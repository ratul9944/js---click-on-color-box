const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'violet', 'indigo'];

const container = document.querySelector('section');
const h1 = document.querySelector('h1');
const selectedColor = document.querySelector('#selectedColor');

for(let i=0; i<colors.length; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.backgroundColor = colors[i];
    
    box.addEventListener('click', function(){
    h1.innerText = 'You have selected: '
    selectedColor.innerText = colors[i];
    selectedColor.style.backgroundColor = colors[i];
})
}

