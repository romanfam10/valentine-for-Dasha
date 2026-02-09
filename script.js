const messages = [
    "Э в смысле нет",
    "ТАК",
    "Как это нет",
    "Это еще что такое",
    "Нажми да пожалуйста...",
    "НУ НАЖМИ ДА",
    "Так если еще раз нет нажмешь все сломается",
    "Шучу, просто нажми да! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}