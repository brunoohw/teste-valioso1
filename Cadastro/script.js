const formCadastro = document.getElementById('formCadastro');
const usuarioName = document.getElementById('txtUsuario');
const usuarioEmail = document.getElementById('txtEmail');
const usuarioSenha = document.getElementById('password');
const modal = document.getElementById('modal');
const mHeader = document.getElementById('mHeader');
const mBody = document.getElementById('mBody');
const fecharBtn = document.getElementById('fecharBtn');
const ms = document.getElementById('modalShadow');

formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault();  // Previne o recarregamento da página

    // Verificar se todos os campos estão preenchidos
    if (!usuarioName.value.trim()) {
        ativarModal("Erro!", "Por favor, preencha o campo de usuário!", "erro");
        return;
    }
    if (!usuarioEmail.value.trim()) {
        ativarModal("Erro!", "Por favor, preencha o campo de email!", "erro");
        return;
    }
    if (!usuarioSenha.value.trim()) {
        ativarModal("Erro!", "Por favor, preencha o campo de senha!", "erro");
        return;
    }

    const novoUsuario = {
        usuario: usuarioName.value,
        email: usuarioEmail.value,
        senha: usuarioSenha.value
    };

    // Verificar se já existe algum usuário no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se o email já está cadastrado
    const usuarioExistente = usuarios.find(user => user.email === novoUsuario.email);

    if (usuarioExistente) {
        // Exibir modal de erro se o email já estiver cadastrado
        ativarModal("Erro!", "Este email já está cadastrado!", "erro");
    } else {
        // Adicionar o novo usuário à lista de usuários
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Exibir modal de sucesso
        ativarModal("Sucesso!", "Cadastro realizado com sucesso!", "normal");

        // Limpar o formulário após o cadastro
        formCadastro.reset();

        // Redirecionar para a página de login após fechar o modal
        fecharBtn.addEventListener('click', () => {
            window.location.href = "../Login/login.html";
        });
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

document.getElementById('toggleSenha').addEventListener('click', function () {
    const senhaInput = document.getElementById('password');
    const tipoAtual = senhaInput.type;

    if (tipoAtual === 'password') {
        senhaInput.type = 'text';
        this.setAttribute('aria-label', 'Ocultar Senha');
        this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de "ocultar"
    } else {
        senhaInput.type = 'password';
        this.setAttribute('aria-label', 'Mostrar Senha');
        this.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de "mostrar"
    }
});

// ScrollReveal para animação
ScrollReveal().reveal('.input-box', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('.input-submit', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('.sing-up-link', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('.forgot', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('.sign-up-link', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});
