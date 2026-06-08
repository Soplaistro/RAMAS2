function cambiarTexto() {
    document.getElementById("parrafo-edwin").innerHTML =
        "¡Gracias por visitar esta página!";
}
let isDarkMode = false;

const button = document.getElementById('toggle-button-jona');

button.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    document.body.classList.toggle('dark-mode', isDarkMode);

    button.textContent = isDarkMode
        ? 'Cambiar a claro'
        : 'Cambiar a oscuro';
});
