document.querySelectorAll("pre").forEach((pre) => {
    pre.style.cursor = "pointer";
    pre.style.position = "relative"; // Нужно для позиционирования уведомления
    pre.title = "Кликните, чтобы скопировать";

    const notification = document.createElement("div");
    notification.className = "copied-notification";
    notification.textContent = "Скопировано!";
    pre.appendChild(notification);

    pre.addEventListener("click", () => {
        const text = pre.innerText;
        navigator.clipboard.writeText(text).then(() => {
            notification.classList.add("show");

            // Скрываем через 2 секунды
            setTimeout(() => {
                notification.classList.remove("show");
            }, 2000);
        }).catch(err => {
            console.error("Не удалось скопировать текст: ", err);
        });
    });
});