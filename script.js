//При перезагрузке сайта, скрипт обнуляет скролл
const body = document.querySelector('body');
body.scrollBy(0,0);
// Для открытия окна при нажатии на один из элементов товаров
const windowBody = document.querySelector('.windowBG');
const addProductBTN = document.querySelectorAll('.addProduct');
function showMainWindow(event) {
    windowBody.style = `
    transition-duration: 1s;
    display: flex`;
};
// Для закрытия окна
const closeWindowBTN = document.querySelector('.closeWindow');
closeWindowBTN.addEventListener("click", function () {
    windowBody.style = `
    transition-duration: 1s;
    opacity: 0;
    display: none`;
});
// Для отправки формы
const clicksend = document.querySelector('.clicksend');
const doneWindow = document.querySelector('.showWindowIsDone');
clicksend.addEventListener("click", function () {
    const userName = document.querySelector('#userName');
    const userTel = document.querySelector('#telUser');
    const textError = document.querySelector('.textError');
    if (userName.value.trim().length < 3) {
        textError.innerHTML = "*Имя должно содержать не менее 3 символов";
        textError.style.display = 'flex';
        return;
    } else if (isNaN(userTel.value.trim()) || userTel.value.trim() === '') {
        textError.innerHTML = "*Номер телефона должен содержать только цифры";
        textError.style.display = 'flex';
        return;
    } else {
        textError.style.display = 'none';
        doneWindow.style = `display: flex`;
        windowBody.style = `
        transition-duration: 1s;
        opacity: 0;
        display: none`;
    }
});
