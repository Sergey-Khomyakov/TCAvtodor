
document.addEventListener('DOMContentLoaded', function(){

    setInterval(updateClock, 1000)
 });

const updateClock = () => {
    const deadline = document.querySelectorAll('[dedlineTimer]'); // Получаем все элементы с атрибутом dedlineTimer
    deadline.forEach(item => {
        const time = item.getAttribute('dedlineTimer'); // Получаем значение атрибута dedlineTimer
        const days = item.querySelector('[dedlineTimerDays]'); // Получаем элемент с атрибутом dedlineTimerDays
        const daysName = item.querySelector('[dedlineTimerDaysText]'); // Получаем элемент с атрибутом dedlineTimerDays
        const hours = item.querySelector('[dedlineTimerHours]'); // Получаем элемент с атрибутом dedlineTimerHours
        const minutes = item.querySelector('[dedlineTimerMinutes]'); // Получаем элемент с атрибутом dedlineTimerMinutes
        const seconds = item.querySelector('[dedlineTimerSeconds]'); // Получаем элемент с атрибутом dedlineTimerSeconds

        const date = new Date(time); // Создаем объект даты
        const now = new Date(); // Создаем объект даты
        const diff = date - now; // Вычисляем разницу между датами

        if (diff < 0) {
            days.textContent = "0";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            clearInterval(updateClock); // Останавливаем таймер
            return; // Выходим из функции
        }

        const daysNumber = Math.floor(diff / (1000 * 60 * 60 * 24)); // Вычисляем количество дней
        const hoursNumber = Math.floor((diff / (1000 * 60 * 60)) % 24); // Вычисляем количество часов
        const minutesNumber = Math.floor((diff / 1000 / 60) % 60); // Вычисляем количество минут
        const secondsNumber = Math.floor((diff / 1000) % 60); // Вычисляем количество секунд
        const daysText = declensionNum(daysNumber, ['день', 'дня', 'дней']); // Склоняем дни

        days.textContent = daysNumber; // Устанавливаем значение элемента с атрибутом dedlineTimerDays
        daysName.textContent = daysText; // Устанавливаем значение элемента с атрибутом dedlineTimerDaysText
        hours.textContent = String(hoursNumber).padStart(2, '0'); // Устанавливаем значение элемента с атрибутом dedlineTimerHours
        minutes.textContent = String(minutesNumber).padStart(2, '0'); // Устанавливаем значение элемента с атрибутом dedlineTimerMinutes
        seconds.textContent = String(secondsNumber).padStart(2, '0'); // Устанавливаем значение элемента с атрибутом dedlineTimerSeconds

    })
};

const declensionNum = (number, titles) => {
    // Убедитесь, что number - это целое число
    number = Math.abs(number) % 100;
    const num1 = number % 10;

    if (number > 10 && number < 20) {
        return `${titles[2]}`; // Для чисел от 11 до 19
    }
    if (num1 > 1 && num1 < 5) {
        return `${titles[1]}`; // Для чисел 2, 3, 4
    }
    if (num1 === 1) {
        return `${titles[0]}`; // Для числа 1
    }
    return `${titles[2]}`; // Для остальных случаев (0, 5-9)
}
