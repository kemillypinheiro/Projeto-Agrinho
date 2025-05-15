// Função para rolagem suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Funções para o modal
function showCommitmentForm() {
    const modal = document.getElementById('commitment-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('commitment-modal');
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('commitment-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Manipular envio do formulário
document.getElementById('commitment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const commitments = Array.from(checkboxes).map(cb => cb.nextElementSibling.textContent);
    
    if (name && commitments.length > 0) {
        alert(`Obrigado, ${name}! Seu compromisso com: ${commitments.join(', ')} foi registrado. Juntos podemos fazer a diferença!`);
        closeModal();
        this.reset();
    } else {
        alert('Por favor, preencha seu nome e selecione pelo menos um compromisso.');
    }
});

// Efeito de carregamento
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const impactItems = document.querySelectorAll('.impact-item');
    
    // Animação para cards
    const animateOnScroll = function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };
    
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    impactItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
});