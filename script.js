// Função para alternar a visibilidade do menu (abrir/fechar)
function toggleMenu() {
    // Adiciona ou remove a classe 'active' no elemento <ul> dentro de <nav>, ativando/desativando o menu
    document.querySelector('nav ul').classList.toggle('active');
}

// Função para lidar com o envio do formulário
function onSubmitContactForm(e) {
    // Impede o comportamento padrão de envio do formulário (recarregar a página)
    e.preventDefault();

    // Cria um objeto FormData que coleta os dados do formulário
    // 'e.target' é o formulário que disparou o evento (o próprio formulário HTML)
    const formData = new FormData(e.target);

    // Array para armazenar os campos que estão com erro de validação
    const fieldErrors = [];

    // Itera sobre os dados do formulário (pares chave-valor)
    Array.from(formData.entries()).forEach(([key, value]) => {
        // Verifica se o campo está vazio (sem conteúdo ou apenas com espaços)
        if (!value.trim().length) {
            // Se o campo estiver vazio, adiciona o nome do campo ao array de erros
            fieldErrors.push(key);
        }
    });

    // Verifica se há campos obrigatórios não preenchidos
    if (!fieldErrors.length) {
        // Se não houver erros, seleciona o contêiner onde os dados salvos serão exibidos
        const savedDataContainer = document.getElementById('savedDataContainer');

        // Exibe os dados salvos no contêiner em formato HTML
        savedDataContainer.innerHTML = `
            <div class="saved-data">
                <h3>Dados Salvos:</h3>
                <p><strong>Nome:</strong> ${formData.get('Nome')}</p>
                <p><strong>Email:</strong> ${formData.get('E-mail')}</p>
                <p><strong>Telefone:</strong> ${formData.get('Telefone')}</p>
                <p><strong>Mensagem:</strong> ${formData.get('Mensagem')}</p>
            </div>
        `;

        // Exibe uma mensagem informando que o envio foi bem-sucedido
        alert('Mensagem enviada com sucesso!');

        // Limpa os campos do formulário após o envio
        e.target.reset();
    } else {
        // Se houver erros, exibe mensagens de erro sobre os campos obrigatórios não preenchidos
        if (fieldErrors.length > 1) {
            // Quando mais de um campo estiver vazio, exibe a lista de campos com erro
            alert(`Os campos ${fieldErrors.slice(0, -1).join(', ')} e ${fieldErrors.slice(-1).join()} são obrigatórios.`);
        } else {
            // Quando apenas um campo estiver vazio, exibe o nome do campo
            alert(`O campo ${fieldErrors[0]} é obrigatório.`);
        }
    }
}



