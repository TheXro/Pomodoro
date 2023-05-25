const settingsModal = document.querySelector(".settingsModal")
const settings = document.querySelector('.settings');
const close = document.querySelector('.X')

const openModal = function () {
    console.log('Button Clicked');
    settingsModal.classList.remove('hidden');
};

const closeModal = function () {
    console.log('Button Clicked');
    settingsModal.classList.add('hidden');
};


settings.addEventListener('click', openModal)

close.addEventListener('click', closeModal)
// settings.classList.add('hidden'); 
