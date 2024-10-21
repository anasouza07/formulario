document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${email}</td>`;

    // Adiciona a nova linha ao corpo da tabela
    document.querySelector('#tabelaUsuarios tbody').appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
});
