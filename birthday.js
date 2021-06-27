const TARGET_DATE = new Date(2021, 7, 5);
let COUNT_DOWN = new Date(TARGET_DATE - new Date());
(function ($) {
    $(function () {
        if (COUNT_DOWN > 0 && window.location.hash !== '#test') {
            updateTimer();
            $('#timer').show();
            $('#card').hide();
            setInterval(updateTimer, 500);
        }
        else {
            $('#timer').hide();
            $('#card').show();
        }
    });
})(window.jQuery || console.error('jQuery broken'));

function updateTimer() {
    let newDiff = TARGET_DATE - new Date();
    COUNT_DOWN = newDiff > 0 ? new Date(newDiff) : new Date(0);
    $('#timer-days').text(`${COUNT_DOWN.getDate()} DAYS`);
    let h = COUNT_DOWN.getHours().toString().padStart(2, '0');
    let m = COUNT_DOWN.getMinutes().toString().padStart(2, '0');
    let s = COUNT_DOWN.getSeconds().toString().padStart(2, '0');
    $('#timer-countdown').text(`${h}:${m}:${s}`)
}