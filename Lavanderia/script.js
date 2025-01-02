function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "flex"; // Torna o modal visível
}

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none"; // Esconde o modal
}

    // Fecha o modal ao clicar fora do conteúdo
    window.onclick = function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
        }
    });
};

function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-hidden'); // Seleciona os elementos com a classe inicial
    const windowHeight = window.innerHeight; // Altura visível da janela

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top; // Posição do elemento em relação ao topo da janela
        const elementBottom = element.getBoundingClientRect().bottom; // Posição do elemento em relação ao fundo da janela

        if (elementTop < windowHeight && elementBottom > 0) {
            element.classList.add('scroll-visible'); // Mostra o elemento
        } else {
            element.classList.remove('scroll-visible'); // Oculta novamente se sair da janela
        }
    });
}

// Ativar a função ao carregar e rolar a página
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);