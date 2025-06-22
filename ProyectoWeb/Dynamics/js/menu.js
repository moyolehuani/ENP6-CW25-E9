const Op = document.querySelectorAll(".animacion_icono");
const indicator = document.querySelector(".indicator");
const labels = document.querySelectorAll(".icono_label");

function moverIndicator(index) {
    const label = labels[index];
    indicator.style.top = (label.offsetTop + label.offsetHeight / 2 - indicator.offsetHeight / 2) + "px";
    indicator.style.left = (label.offsetLeft + label.offsetWidth / 2 - indicator.offsetWidth / 2) + "px";
}
Op.forEach((oP, index) => {
    oP.addEventListener('change', () => {
        moverIndicator(index);
    });
});
