const username = document.getElementById("username");
const password = document.getElementById("password");
const remember = document.getElementById("remember");
const loader = document.getElementById("loader");
const form = document.getElementById("loginForm");

/* FOCO INICIAL */
username.focus();

/* CARREGAR USUÁRIO SALVO */
window.onload = () => {
  const saved = localStorage.getItem("user");
  if (saved) {
    username.value = saved;
    remember.checked = true;
  }
};

/* SUBMIT DO FORM */
form.addEventListener("submit", login);

/* MOSTRAR / OCULTAR SENHA */
function togglePass() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

/* LOGIN */
function login(e) {
  e.preventDefault();

  let valid = true;
  const correctPassword = "123"; // simulação

  /* VALIDAÇÃO */
  if (!username.value) {
    username.classList.add("shake");
    valid = false;
  }

  if (password.value !== correctPassword) {
    password.classList.add("shake");
    valid = false;
  }

  /* REMOVE ANIMAÇÃO */
  setTimeout(() => {
    username.classList.remove("shake");
    password.classList.remove("shake");
  }, 300);

  /* SUCESSO */
  if (valid) {
    if (remember.checked) {
      localStorage.setItem("user", username.value);
    } else {
      localStorage.removeItem("user");
    }

    showLoader(() => {
      alert("Login realizado com sucesso!");
    });
  }
}

/* LIMPAR ERRO AO DIGITAR */
username.addEventListener("input", () => {
  username.classList.remove("shake");
});

password.addEventListener("input", () => {
  password.classList.remove("shake");
});

/* LOGIN SOCIAL (simulação) */
function socialLogin(provider) {
  showLoader(() => {
    alert("Login com " + provider);
  });
}

/* LOADER */
function showLoader(callback) {
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    callback();
  }, 1200);
}
