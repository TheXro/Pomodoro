const settingsModal = document.querySelector(".settingsModal")
const settings = document.querySelector('.settings');
const close = document.querySelector('.X')
const overlay = document.querySelector('.overlay');

const openModal = function () {
    console.log('Button Clicked');
    settingsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};

//for closing the modal when esc key is pressed
addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !settingsModal.classList.contains('hidden')) {
        closeModal();
    }
}
)
//closing the modal
const closeModal = function () {
    console.log('Button Clicked');
    settingsModal.classList.add('hidden');
    overlay.classList.add('hidden');
};
overlay.addEventListener('click', closeModal);
close.addEventListener('click', closeModal);
settings.addEventListener('click', openModal);
 
//timer function
const time = document.querySelector('.time');
const pause = document.querySelector('.pause');


//getting the time and updating the value of time
const pmdr = document.querySelector('.pmdr');
const shtbrk = document.querySelector('.shrtbrk');
const lngbrk = document.querySelector('.lngbrk');
const applybtn = document.querySelector('.applybtn');
applybtn.addEventListener('click', function () {
    console.log('Button Clicked');
    time.textContent = pmdr.value + ':' + '00';
    closeModal();
}
)




// changing the colors and font
function btnColorChange(color) {
    document.documentElement.style.setProperty('--button-bg', color );
}
btnColorChange('#c6996f'); 

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');

color1.addEventListener('click', function () {
    btnColorChange('#ef3131d9');
    document.documentElement.style.setProperty('--bg-color', '#ef3131');
    document.documentElement.style.setProperty('--bg-shadow-1', '#a52222');
    document.documentElement.style.setProperty('--bg-shadow-2', '#ff4f4f');
    document.documentElement.style.setProperty('--bg-color-after', '#a52222d9');
    document.documentElement.style.setProperty('--bg-changer', '#a12200d9');
    document.documentElement.style.setProperty('--font-color', '#0f290e83');

}
)
color2.addEventListener('click', function () {
    btnColorChange('#e5b10fd9');
    document.documentElement.style.setProperty('--bg-color', '#e5a50a');
    document.documentElement.style.setProperty('--bg-shadow-1', '#c38c09');
    document.documentElement.style.setProperty('--bg-shadow-2', '#ffcd0d');
    document.documentElement.style.setProperty('--bg-color-after', '#c38c09d9');
    document.documentElement.style.setProperty('--bg-changer', '#c39c06');
    document.documentElement.style.setProperty('--font-color', '#0f290e83');
    
}
)
color3.addEventListener('click', function () {
    btnColorChange('#1f3b77');
    document.documentElement.style.setProperty('--bg-color', '#190c49');
    document.documentElement.style.setProperty('--bg-shadow-1', '#0e072a');
    document.documentElement.style.setProperty('--bg-shadow-2', '#241168');
    document.documentElement.style.setProperty('--bg-color-after', '#0e072ad9');
    document.documentElement.style.setProperty('--bg-changer', '#0d0836');
    document.documentElement.style.setProperty('--font-color', '#ffffffd7');
}
)
// Default theme
btnColorChange('#f6496f');
document.documentElement.style.setProperty('--bg-color', '#190c49');
document.documentElement.style.setProperty('--bg-shadow-1', '#0e072a');
document.documentElement.style.setProperty('--bg-shadow-2', '#241168');
document.documentElement.style.setProperty('--bg-color-after', '#0e072ad9');
document.documentElement.style.setProperty('--bg-changer', '#0d0836');
document.documentElement.style.setProperty('--font-color', '#cff5ffd7');
document.documentElement.style.setProperty('--font-family', 'Josefin Sans');


const fnt = document.querySelectorAll('.fnt');
fnt[0].addEventListener('click', function () {
    document.documentElement.style.setProperty('--font-family', 'Poppins');
}
)
fnt[1].addEventListener('click', function () {
    document.documentElement.style.setProperty('--font-family', 'Bungee');
}
)
fnt[2].addEventListener('click', function () {
    document.documentElement.style.setProperty('--font-family', 'Josefin Sans');
}
)