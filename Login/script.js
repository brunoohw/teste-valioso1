const formLogin = document.getElementById("formLogin");
const modal = document.getElementById('modal');
const mHeader = document.getElementById('mHeader');
const mBody = document.getElementById('mBody');
const fecharBtn = document.getElementById('fecharBtn');
const ms = document.getElementById('modalShadow');

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();  // Previne o comportamento padrão do form
  
  const userEmail = document.getElementById("txtEmail").value;
  const userSenha = document.getElementById("password").value;

  // Recuperar os usuários do localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Verificar se o email e a senha correspondem a um usuário cadastrado
  const usuarioEncontrado = usuarios.find(user => user.email === userEmail && user.senha === userSenha);

  if (usuarioEncontrado) {
    // Login bem-sucedido
    localStorage.setItem('login', usuarioEncontrado.email);  // Armazena o email do usuário logado
    // Aleta personalizado
    ativarModal("Sucesso", "Cadastro realizado com sucesso!", "normal");
    console.log(localStorage.getItem('login'))
    console.log(localStorage.getItem('TotalPontos'))
    // Redirecionar para a página de resultado ou dashboard
    fecharBtn.addEventListener('click', () => {
      window.location.href = "../ResultadoQuestionário/resultquest.html";
    })
  } else {
    // Login falhou
    ativalModel("Erro", "Email ou Senha incorretos!", "erro");
  }
});

function ativarModal(titulo, desc, tipo) {
  switch (tipo) {
      case 'erro':
          modal.style.animation = "modalIn .5s";
          ms.style.animation = "msIn .5s";

          mHeader.style.backgroundColor = "rgb(255, 92, 92)"; // Vermelho
          fecharBtn.style.backgroundColor = "rgb(255, 92, 92)";

          mHeader.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>
              <p>${titulo}</p>`;
          mBody.innerHTML = `<p>${desc}</p>`;

          modal.style.display = "flex";
          ms.style.display = "block";
          break;
      case 'normal':
          modal.style.animation = "modalIn .5s";
          ms.style.animation = "msIn .5s";

          mHeader.style.backgroundColor = "rgb(20, 33, 61)"; // Azul
          fecharBtn.style.backgroundColor = "rgb(252, 154, 17)";

          mHeader.innerHTML = `<i class="fa-solid fa-info-circle"></i>
              <p>${titulo}</p>`;
          mBody.innerHTML = `<p>${desc}</p>`;

          modal.style.display = "flex";
          ms.style.display = "block";
          break;
      default:
          break;
  }
}

function fecharModal() {
  modal.style.animation = "modalOut .5s";
  ms.style.animation = "msOut .5s";

  setTimeout(() => {
      modal.style.display = "none";
      ms.style.display = "none";
  }, 499);
}

fecharBtn.addEventListener('click', fecharModal);

document.getElementById("toggleSenha").addEventListener("click", function () {
  const senhaInput = document.getElementById("password");
  const tipoAtual = senhaInput.type;

  if (tipoAtual === "password") {
    senhaInput.type = "text";
    this.setAttribute("aria-label", "Ocultar Senha");
    this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de "ocultar"
  } else {
    senhaInput.type = "password";
    this.setAttribute("aria-label", "Mostrar Senha");
    this.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de "mostrar"
  }
});

ScrollReveal().reveal(".input-box", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".input-submit", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".sing-up-link", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".forgot", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});

ScrollReveal().reveal(".sign-up-link", {
  origin: "left",
  duration: 1500,
  distance: "15%",
});
