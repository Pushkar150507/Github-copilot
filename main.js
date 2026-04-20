document.addEventListener('DOMContentLoaded', () => {

    // --- Preloader Logic ---
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 700);
            }, 300);
        }
    });

    // --- Scroll Spy Logic ---
    const sections = document.querySelectorAll('main > div[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Fallback to top section if at very top
        if(window.scrollY < 100 && sections.length > 0) {
            current = sections[0].getAttribute('id');
        }

        navLinks.forEach(link => {
            link.classList.remove('text-primary', 'border-b', 'border-primary', 'pb-1');
            link.classList.add('text-on-surface-variant');

            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-primary', 'border-b', 'border-primary', 'pb-1');
                link.classList.remove('text-on-surface-variant');
            }
        });
    };

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);

    // --- Cursor Background Interactive Glow ---
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow && window.innerWidth >= 768) {
        let isTicking = false;
        window.addEventListener('mousemove', (e) => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    cursorGlow.style.setProperty('--x', `${e.clientX}px`);
                    cursorGlow.style.setProperty('--y', `${e.clientY}px`);
                    isTicking = false;
                });
                isTicking = true;
            }
        });
    }

    // --- WhatsApp Contact Hook ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;

            // Build the Email parameters
            const subject = encodeURIComponent(`New Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

            // Initialize Mail Client
            window.location.href = `mailto:raipushkar83@gmail.com?subject=${subject}&body=${body}`;
            
            // Optional: reset form after sending
            contactForm.reset();
        });
    }

});
