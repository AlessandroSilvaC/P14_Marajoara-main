document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = "./Pages/Morador/pagina_eventos.html";
});
function showRecoveryForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('recovery-container').style.display = 'block';
}

function hideRecoveryForm() {
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('recovery-container').style.display = 'none';
}
function showRegisterForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function hideRegisterForm() {
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('register-container').style.display = 'none';
}

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const verificationCode = document.getElementById("verificationCode").value;
    const receiveByEmail = document.getElementById("receiveByEmail").checked;
    const receiveByPhone = document.getElementById("receiveByPhone").checked;

    if (!receiveByEmail && !receiveByPhone) {
        alert("Por favor, selecione uma opção para receber o código.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    // Aqui você pode adicionar a lógica para enviar os dados ao servidor
    window.location.href = "../Pages/Morador/pagina_eventos.html"; // Redireciona para a página inicial
});

function logout() {
    // Redireciona para a página de login
    window.location.href = "../index.html";
}

function redirectToEvents(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    window.location.href = "./Pages/Morador/pagina_eventos.html"; // Redireciona para a página de eventos
}