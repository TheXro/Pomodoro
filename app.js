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

settings.addEventListener('click', openModal)

close.addEventListener('click', closeModal)
// settings.classList.add('hidden'); 
