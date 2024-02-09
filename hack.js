let liopen = 1;
function set() {
    window.open('./good', width=liopen, height=liopen);
    liopen += 1;
}
setInterval(set,1);