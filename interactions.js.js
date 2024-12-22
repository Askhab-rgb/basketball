const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");

function showPopup() {
    popupOverlay.style.display = "block"; // Показываем всплывающее окно
}

function hidePopup() {
    popupOverlay.style.display = "none"; // Скрываем всплывающее окно
}

popupOverlay.addEventListener("click", hidePopup); // Закрытие при клике на оверлей
popup.addEventListener("click", (event) => event.stopPropagation()); // Предотвращение закрытия при клике внутри окна
