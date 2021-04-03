const timer = (timerSelector, promoEndTime) => {

    // вспомогательная функция, добавляет ноль перед днями,
    // часами, минутами и секундами: 1:2:3:4 => 01:02:03:04
    const addZero = (number) => {
        if (number <= 9) {
            return '0' + number;
        } else {
            return number;
        }
    };

    const getTimeRemaining = () => {
        // сколько миллисекунд осталось до окончания акции
        const delta = Date.parse(promoEndTime) - Date.parse(new Date()),
              seconds = Math.floor((delta / 1000) % 60),
              minutes = Math.floor((delta / (1000 * 60) % 60)),
              hours = Math.floor((delta / (1000 * 60 * 60)) % 24),
              days = Math.floor((delta / (1000 * 60 * 60 * 24)));

        return {
            'total': delta,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = () => {
        const timer = document.querySelector(timerSelector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              // обновлять таймер будем каждую секунду
              timeInterval = setInterval(updateClock, 1000);

        // обновляем таймер сразу после загрузки страницы
        updateClock();

        function updateClock() {
            const delta = getTimeRemaining();

            if (delta.total <= 0) { // акция закончилась
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
                return;
            }

            days.textContent = addZero(delta.days);
            hours.textContent = addZero(delta.hours);
            minutes.textContent = addZero(delta.minutes);
            seconds.textContent = addZero(delta.seconds);
        }
    };

    // запускаем таймер отсчета времени до окончания акции
    setClock();
};

export default timer;

/*
const timer = (id, deadline) => {
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t/1000) % 60),
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/(1000 * 60 * 60)) % 24),
              days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;
*/
