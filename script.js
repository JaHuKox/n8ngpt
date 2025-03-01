document.addEventListener("DOMContentLoaded", function() {
    const chatToggle = document.querySelector(".chat-widget-toggle");
    const chatWidget = document.querySelector(".chat-widget");
    const chatClose = document.querySelector(".chat-close");
    const chatMinimize = document.querySelector(".chat-minimize");

    chatToggle.addEventListener("click", function() {
        chatWidget.style.display = "block";
        chatToggle.style.display = "none";
    });

    chatClose.addEventListener("click", function() {
        chatWidget.style.display = "none";
        chatToggle.style.display = "block";
    });

    chatMinimize.addEventListener("click", function() {
        chatWidget.style.height = chatWidget.style.height === "50px" ? "auto" : "50px";
    });
});