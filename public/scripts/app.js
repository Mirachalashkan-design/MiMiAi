document.addEventListener("DOMContentLoaded", () => {
  const startChatButton = document.getElementById("startChatButton");
  const exploreModesButton = document.getElementById("exploreModesButton");
  const themeButton = document.getElementById("themeButton");
  const languageButton = document.getElementById("languageButton");
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");

  startChatButton?.addEventListener("click", () => {
    window.location.href = "chat.html";
  });

  exploreModesButton?.addEventListener("click", () => {
    document.getElementById("modes")?.scrollIntoView({
      behavior: "smooth"
    });
  });

  loginButton?.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  registerButton?.addEventListener("click", () => {
    window.location.href = "login.html?mode=register";
  });

  themeButton?.addEventListener("click", () => {
    alert("Tema merkezi yakında geliyor 🎨");
  });

  languageButton?.addEventListener("click", () => {
    alert("Dil seçimi yakında geliyor 🌍");
  });
});