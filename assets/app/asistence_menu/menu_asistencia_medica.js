document.addEventListener("DOMContentLoaded", function () {
    let accesos = document.querySelectorAll(".acceso");

    accesos.forEach((acceso) => {
        acceso.addEventListener("touchstart", () => {
            acceso.classList.add("clicked");
        });

        acceso.addEventListener("touchend", () => {
            acceso.classList.remove("clicked");
        });
    });
});

