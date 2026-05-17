// Wait until page is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // ==================================
    // 1. LIGHTBOX — Click photo → open big
    // ==================================
    const photoImages = document.querySelectorAll('.photo-grid img, .single-photo img');
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-btn">&times;</span>
            <img src="" alt="Enlarged photo" class="lightbox-img">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close-btn');

    // Open lightbox on click
    photoImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scroll
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });


    // ==================================
    // 2. NAVBAR SCROLL EFFECT
    // ==================================
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = '#ffffff';
            nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
        } else {
            nav.style.background = 'rgba(255,255,255,0.97)';
            nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
        }
    });


    // ==================================
    // 3. SMOOTH SCROLL FOR NAV LINKS
    // ==================================
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

});
