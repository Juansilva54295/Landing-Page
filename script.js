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
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
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
});