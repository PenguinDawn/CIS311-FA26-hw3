

const toasty = document.getElementById("alert");
const submitButton = document.getElementById("submitButton");

let hideTimer;

submitButton.addEventListener("click", () => {
    showToast(4000);
    
} );


function showToast(duration = 4000) {
    toasty.showPopover();
    restartTimer(duration);
}

function restartTimer(duration) {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
        toasty.hidePopover();
    }, duration);
}

toasty.addEventListener('pointerenter', () => {clearTimeout(hideTimer)});
toasty.addEventListener('pointerleave', () => {restartTimer(4000)});