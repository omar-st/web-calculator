function toScreen(val) {
    screen = document.getElementById("display");
    screen.value += val;
}

function clearScreen() {
    screen = document.getElementById("display");
    screen.value = "";
}