window.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");

  function showLoader() {
    loader.style.display = "flex";
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  window.showForm = (type) => {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("registerForm").classList.remove("active");

    if (type === "login") {
      document.getElementById("loginForm").classList.add("active");
    } else {
      document.getElementById("registerForm").classList.add("active");
    }
  };

  window.togglePassword = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
  };

  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (pass !== confirm) {
      alert("Senhas não coincidem");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, pass }));

    showLoader();

    setTimeout(() => {
      hideLoader();
      alert("Cadastro realizado");
      showForm("login");
    }, 800);
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email || user.pass !== pass) {
      alert("Login inválido");
      return;
    }

    showLoader();

    setTimeout(() => {
      hideLoader();
      alert("Login OK");
      window.location.href = "home.html";
    }, 800);
  });

});
