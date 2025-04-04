document.addEventListener('DOMContentLoaded', function() {
    // ===== MENU HAMBURGUER =====
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        if (mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Fechar menu ao clicar em um item
    const menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== SCROLL SUAVE PARA LINKS INTERNOS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Fecha o menu mobile se estiver aberto
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // Scroll suave até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== SLIDESHOW =====
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    function showSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        
        slides[slideIndex-1].classList.add('active');
        dots[slideIndex-1].classList.add('active');
        
        setTimeout(showSlides, 4000);
    }
    
    showSlides();
    
    function plusSlides(n) {
        slideIndex += n - 1;
        if (slideIndex > slides.length) slideIndex = 1;
        if (slideIndex < 1) slideIndex = slides.length;
        showSlides();
    }
    
    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }
    
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;

    // ===== ANIMAÇÃO DAS IMAGENS DOS PRODUTOS =====
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        const img = card.querySelector('.product-image');
        
        if (img) {
            // Animação quando a página carrega (com delay progressivo)
            setTimeout(() => {
                img.classList.add('rotate-scale-down-diag-1');
                
                img.addEventListener('animationend', function() {
                    img.classList.remove('rotate-scale-down-diag-1');
                });
            }, index * 300);
            
            // Animação ao passar o mouse
            card.addEventListener('mouseenter', function() {
                img.classList.add('rotate-scale-down-diag-1');
                
                img.addEventListener('animationend', function() {
                    img.classList.remove('rotate-scale-down-diag-1');
                });
            });
        }
    });

    // ===== FAQ ACCORDION =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Abre/fecha o item clicado
            item.classList.toggle('active');
            
            // Fecha se estiver aberto e for clicado novamente
            if (!item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
    });
    // Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\nEntraremos em contato pelo e-mail: ${email}`);
    
    // Limpa o formulário
    this.reset();
});

    // ===== ANIMAÇÃO DOS MODELOS 3D =====
    const modelViewers = document.querySelectorAll('model-viewer');
    
    modelViewers.forEach((viewer, index) => {
        // Animação ao carregar
        setTimeout(() => {
            viewer.setAttribute('auto-rotate', 'true');
        }, index * 500);
        
        // Interação ao passar o mouse
        viewer.parentElement.addEventListener('mouseenter', () => {
            viewer.setAttribute('auto-rotate', 'false');
            viewer.setAttribute('camera-orbit', '45deg 55deg 2m');
        });
        
        viewer.parentElement.addEventListener('mouseleave', () => {
            viewer.setAttribute('auto-rotate', 'true');
        });
    });
});