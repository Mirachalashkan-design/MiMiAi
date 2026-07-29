document.addEventListener("DOMContentLoaded", () => {

  console.log("MiMiAi hazır 💜");

  const startChatButton = document.getElementById("startChatButton");
  const exploreModesButton = document.getElementById("exploreModesButton");
  const themeButton = document.getElementById("themeButton");
  const languageButton = document.getElementById("languageButton");

  startChatButton?.addEventListener("click", () => {
    alert("Yakında gerçek MiMiAi sohbet ekranı açılacak. 💜");
  });

  exploreModesButton?.addEventListener("click", () => {
    document
      .getElementById("modes")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  });

  themeButton?.addEventListener("click", () => {
    alert("Tema merkezi yakında geliyor 🎨");
  });

  languageButton?.addEventListener("click", () => {
    alert("Çoklu dil sistemi yakında geliyor 🌍");
  });

});