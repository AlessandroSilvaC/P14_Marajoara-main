function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }
    function toggleDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    function logout() {
                // Redirecione para a página de login ou realize outra ação
        window.location.href = '../index.html';
    }

    // Fecha o dropdown ao clicar fora dele
    document.addEventListener('click', function (event) {
        const dropdown = document.getElementById('user-dropdown');
        const userIcon = document.querySelector('.img_nav_login');
        if (!dropdown.contains(event.target) && event.target !== userIcon) {
            dropdown.style.display = 'none';
        }
    }); 
let porteiros = [
    { nome: "João Silva", email: "joao@marajoara.com" },
    { nome: "Maria Souza", email: "maria@marajoara.com" }
];

let moradores = [
    { nome: "Carlos Andrade", email: "carlos@marajoara.com", telefone: "11999999999" },
    { nome: "Ana Lima", email: "ana@marajoara.com", telefone: "11988888888" }
];

let porteiroEditIndex = null;
let moradorEditIndex = null;
let alterarSenhaTipo = null; // 'porteiro' ou 'morador'
let alterarSenhaIndex = null;

// Renderiza tabela de porteiros
function renderPorteiros() {
    const tbody = document.getElementById('porteiros-tbody');
    tbody.innerHTML = '';
    porteiros.forEach((porteiro, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${porteiro.nome}</td>
            <td>${porteiro.email}</td>
            <td>
                <button onclick="editPorteiro(${idx})">Editar</button>
                <button onclick="deletePorteiro(${idx})">Excluir</button>
                <button onclick="showAlterarSenha('porteiro',${idx})">Alterar Senha</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Editar porteiro
function editPorteiro(idx) {
    porteiroEditIndex = idx;
    const porteiro = porteiros[idx];
    document.getElementById('porteiro-modal').style.display = 'block';
    document.getElementById('modal-title').innerText = 'Editar Porteiro';
    document.getElementById('porteiro-nome').value = porteiro.nome;
    document.getElementById('porteiro-email').value = porteiro.email;
}

// Excluir porteiro
function deletePorteiro(idx) {
    if (confirm('Deseja excluir este porteiro?')) {
        porteiros.splice(idx, 1);
        renderPorteiros();
    }
}

// Abrir modal para adicionar porteiro
function openAddModal() {
    porteiroEditIndex = null;
    document.getElementById('porteiro-modal').style.display = 'block';
    document.getElementById('modal-title').innerText = 'Adicionar Porteiro';
    document.getElementById('porteiro-form').reset();
}

// Fechar modal de porteiro
function closeModal() {
    document.getElementById('porteiro-modal').style.display = 'none';
}

// Salvar porteiro (adicionar ou editar)
document.getElementById('porteiro-form').onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('porteiro-nome').value;
    const email = document.getElementById('porteiro-email').value;
    if (porteiroEditIndex === null) {
        porteiros.push({ nome, email });
    } else {
        porteiros[porteiroEditIndex] = { nome, email };
    }
    closeModal();
    renderPorteiros();
};

// Renderiza tabela de moradores
function renderMoradores() {
    const tbody = document.getElementById('moradores-tbody');
    tbody.innerHTML = '';
    moradores.forEach((morador, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${morador.nome}</td>
            <td>${morador.email}</td>
            <td>${morador.telefone}</td>
            <td>
                <button onclick="editMorador(${idx})">Editar</button>
                <button onclick="deleteMorador(${idx})">Excluir</button>
                <button onclick="showAlterarSenha('morador',${idx})">Alterar Senha</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Editar morador
function editMorador(idx) {
    moradorEditIndex = idx;
    const morador = moradores[idx];
    document.getElementById('morador-modal').style.display = 'block';
    document.getElementById('morador-modal-title').innerText = 'Editar Morador';
    document.getElementById('morador-nome').value = morador.nome;
    document.getElementById('morador-email').value = morador.email;
    document.getElementById('morador-telefone').value = morador.telefone;
}

// Excluir morador
function deleteMorador(idx) {
    if (confirm('Deseja excluir este morador?')) {
        moradores.splice(idx, 1);
        renderMoradores();
    }
}

// Abrir modal para adicionar morador
function openAddMoradorModal() {
    moradorEditIndex = null;
    document.getElementById('morador-modal').style.display = 'block';
    document.getElementById('morador-modal-title').innerText = 'Adicionar Morador';
    document.getElementById('morador-form').reset();
    document.getElementById('alterar-senha-btn').style.display = 'none';
}

// Fechar modal de morador
function closeMoradorModal() {
    document.getElementById('morador-modal').style.display = 'none';
}

// Salvar morador (adicionar ou editar)
document.getElementById('morador-form').onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('morador-nome').value;
    const email = document.getElementById('morador-email').value;
    const telefone = document.getElementById('morador-telefone').value;
    if (moradorEditIndex === null) {
        moradores.push({ nome, email, telefone });
    } else {
        moradores[moradorEditIndex] = { nome, email, telefone };
    }
    closeMoradorModal();
    renderMoradores();
};

// Função única para mostrar modal de alterar senha
function showAlterarSenha(tipo, idx) {
    alterarSenhaTipo = tipo;
    alterarSenhaIndex = idx;
    document.getElementById('alterar-senha-modal').style.display = 'block';
}

// Fechar modal de alterar senha
function closeAlterarSenhaModal() {
    document.getElementById('alterar-senha-modal').style.display = 'none';
}

// Salvar nova senha (apenas exemplo)
document.getElementById('alterar-senha-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Senha alterada com sucesso!');
    closeAlterarSenhaModal();
};

// Inicializa as tabelas ao carregar a página
window.onload = function() {
    if (document.getElementById('porteiros-tbody')) {
        renderPorteiros();
    }
    if (document.getElementById('moradores-tbody')) {
        renderMoradores();
    }
};
