document.addEventListener("DOMContentLoaded", () => {

  const switchButton =
    document.getElementById("switchAuthModeButton");

  const submitButton =
    document.getElementById("submitAuthButton");

  const authTitle =
    document.getElementById("authTitle");

  const authDescription =
    document.getElementById("authDescription");

  const switchQuestion =
    document.getElementById("switchQuestion");

  const nameField =
    document.getElementById("nameField");

  const birthdayField =
    document.getElementById("birthdayField");

  const countryField =
    document.getElementById("countryField");

  const languageField =
    document.getElementById("languageField");

  const passwordInput =
    document.getElementById("passwordInput");

  const showPasswordButton =
    document.getElementById("showPasswordButton");

  let registerMode = false;

  switchButton.addEventListener("click", () => {

    registerMode = !registerMode;

    if (registerMode) {

      authTitle.textContent = "Kayıt Ol";

      authDescription.textContent =
        "MiMiAi hesabını oluştur ve kendine özel yapay zekâ deneyimini başlat.";

      submitButton.textContent =
        "Hesap Oluştur ✨";

      switchQuestion.textContent =
        "Zaten hesabın var mı?";

      switchButton.textContent =
        "Giriş Yap";

      nameField.classList.remove("hidden");
      birthdayField.classList.remove("hidden");
      countryField.classList.remove("hidden");
      languageField.classList.remove("hidden");

    } else {

      authTitle.textContent = "Giriş Yap";

      authDescription.textContent =
        "Hesabına giriş yap ve kaldığın yerden devam et.";

      submitButton.textContent =
        "Giriş Yap ✨";

      switchQuestion.textContent =
        "Henüz hesabın yok mu?";

      switchButton.textContent =
        "Kayıt Ol";

      nameField.classList.add("hidden");
      birthdayField.classList.add("hidden");
      countryField.classList.add("hidden");
      languageField.classList.add("hidden");
    }

  });

  showPasswordButton.addEventListener("click", () => {

    if (passwordInput.type === "password") {

      passwordInput.type = "text";
      showPasswordButton.textContent = "🙈";

    } else {

      passwordInput.type = "password";
      showPasswordButton.textContent = "👁️";

    }

  });

});