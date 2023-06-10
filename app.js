const settingsModal = document.querySelector(".settingsModal")
const settings = document.querySelector('.settings');
const close = document.querySelector('.X')
const overlay = document.querySelector('.overlay');

const openModal = function () {
    console.log('Button Clicked');
    settingsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');

};

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

