const TARGET_DATE = new Date('July 5, 2021');
(function ($) { $(runApp); })(window.jQuery || console.error('jQuery broken'));

function runApp() {
    let countDownUntil = window.location.hash === '#test' ? secondsFromNow(10) : TARGET_DATE;
    let countDownTimeSpan = window.countdown(countDownUntil);
    if (countDownTimeSpan.value < 0) {
        updateTimeDisplay(countDownTimeSpan);
        let timer = setInterval(function () {
            countDownTimeSpan = window.countdown(countDownUntil);
            if (countDownTimeSpan.value < 0)
                updateTimeDisplay(countDownTimeSpan);
            else {
                timer = clearInterval(timer);
                showCard();
            }
        }, 500);
    }
    else {
        showCard();
    }
}

function secondsFromNow(seconds) {
    var date = new Date();
    date.setSeconds(date.getSeconds() + 10);
    return date;
}

function updateTimeDisplay(countDownTimeSpan) {
    $('#card').hide();
    $('#timer-days').text(`${countDownTimeSpan.days.toString()} DAYS`);
    let h = countDownTimeSpan.hours.toString().padStart(2, '0');
    let m = countDownTimeSpan.minutes.toString().padStart(2, '0');
    let s = countDownTimeSpan.seconds.toString().padStart(2, '0');
    $('#timer-countdown').text(`${h}:${m}:${s}`)
    $('#timer').show();
}

function showCard() {
    $('#timer').hide();
    $('#card').show();
    randomConfetti();
    setInterval(randomSparkles, 2010);
    setInterval(randomConfetti, 1530);
}

function randomConfetti() {
    randomizeEmitter();
    party.confetti(document.getElementById('emitter'));
}

function randomSparkles() {
    randomizeEmitter();
    party.sparkles(document.getElementById('emitter'));
}

function randomizeEmitter() {
    let x = Math.random() * $(document).width();
    let y = Math.random() * $(document).height();
    $('#emitter').css({ top: y, left: x });
}