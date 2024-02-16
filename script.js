const button = document.getElementById('ok');
const button2 = document.getElementById('Download');

function onclickbutton() {
    window.open('./good', width=200, height=200);
}
function onclickbuttonH() {
    window.open('./download');
}

button.addEventListener('click',onclickbutton);
button2.addEventListener('click',onclickbuttonH);
