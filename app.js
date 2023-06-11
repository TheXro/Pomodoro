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




// changing the colors 
function toggleColorMode(color) {
    document.documentElement.style.setProperty('--button-bg', color );
}
toggleColorMode('#c6996f'); 

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');

color1.addEventListener('click', function () {
    toggleColorMode('#c6996f');
}
)
color2.addEventListener('click', function () {
    toggleColorMode('#f5f96f');
}
)
color3.addEventListener('click', function () {
    toggleColorMode('#1f3b77');
}
)

