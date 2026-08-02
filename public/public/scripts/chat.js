document.addEventListener("DOMContentLoaded", () => {
  const modeButtons = document.querySelectorAll(".mode-button");
  const activeModeTitle = document.getElementById("activeModeTitle");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");
  const messages = document.getElementById("messages");
  const newChatButton = document.getElementById("newChatButton");

  const modeNames = {
    normal: "💬 Normal Sohbet",
    teacher: "👩‍🏫 Öğretmen",
    research: "🔬 Araştırma",
    cooking: "🍝 Yemek",
    funny: "😂 Komik",
    game: "🎮 Oyun",
    repair: "🧰 Tamirat",
    safety: "🛡️ Güvenlik"
  };

  let activeMode = "normal";

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modeButtons.forEach((item) => item.classList.remove("active"));

      button.classList.add("active");
      activeMode = button.dataset.mode;
      activeModeTitle.textContent = modeNames[activeMode];
    });
  });

  function addMessage(text, sender) {
    const message = document.createElement("div");
    message.className =
      sender === "user"
        ? "message user-message"
        : "message mimi-message";

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = sender === "user" ? "👤" : "✦";

    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    bubble.textContent = text;

    message.appendChild(avatar);
    message.appendChild(bubble);
    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage() {
    const text = messageInput.value.trim();

    if (!text) {
      return;
    }

    addMessage(text, "user");
    messageInput.value = "";

    setTimeout(() => {
      addMessage(
        `${modeNames[activeMode]} aktif 💜 Mesajını aldım. Gerçek yapay zekâ beynini bağladığımızda sana burada gerçek cevap vereceğim.`,
        "mimi"
      );
    }, 500);
  }

  sendButton.addEventListener("click", sendMessage);

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  newChatButton.addEventListener("click", () => {
    messages.innerHTML = "";

    addMessage(
      "Yeni sohbet başladı 💜 Bugün sana nasıl yardımcı olabilirim?",
      "mimi"
    );
  });
});