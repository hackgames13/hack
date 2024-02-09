const button = document.getElementById('ok');

function onclickbutton() {
    document.close();
    window.open('./good', width=200, height=200);
}

button.addEventListener('click',onclickbutton);