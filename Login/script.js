const username = document.getElementById("username");
const password = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");
const remember = document.getElementById("remember");
const loader = document.getElementById("loader");

username.focus();

window.onload = () => {
  const saved = localStorage.getItem("user");
  if (saved) {
    username.value = saved;
    remember.checked = true;
  }
};

function togglePass() {
  const eye = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";
    eye.innerHTML = `<path d="M1 1l22 22"/>`;
  } else {
    password.type = "password";
    eye.innerHTML = `<circle cx="12" cy="12" r="3"/>`;
  }
}

function login(e) {
  e.preventDefault();

  let valid = true;

  userError.style.display = "none";
  passError.style.display = "none";

  if (username.value === "") {
    userError.style.display = "block";
    username.classList.add("shake");
    valid = false;
  }

  if (password.value !== "123") {
    passError.style.display = "block";
    password.classList.add("shake");
    valid = false;
  }

  setTimeout(() => {
    username.classList.remove("shake");
    password.classList.remove("shake");
  }, 300);

  if (valid) {
    if (remember.checked) {
      localStorage.setItem("user", username.value);
    }

    showLoader(() => {
      alert("Login realizado com sucesso!");
    });
  }
}

function socialLogin(provider) {
  showLoader(() => {
    alert("Login com " + provider);
  });
}

function showLoader(callback) {
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    callback();
  }, 1200);
}