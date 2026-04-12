window.addEventListener("DOMContentLoaded", () => {

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loader = document.getElementById("loader");
  const form = document.getElementById("loginForm");
  const googleBtn = document.getElementById("googleBtn");

  username?.focus();

  function showLoader() {
    if (loader) loader.style.display = "flex";
  }

  function hideLoader() {
    if (loader) loader.style.display = "none";
  }

  // LOGIN 
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!username.value || !password.value) {
      alert("Preencha os campos");
      return;
    }

    showLoader();

    setTimeout(() => {
      hideLoader();

      alert("Login simulado com sucesso!");

      // só navegação visual
      window.location.href = "home.html";

    }, 800);
  });

  //  GOOGLE 
  googleBtn?.addEventListener("click", () => {

    showLoader();

    setTimeout(() => {
      hideLoader();

      alert("Login com Google (simulado)");

      window.location.href = "home.html";

    }, 800);
  });

});
