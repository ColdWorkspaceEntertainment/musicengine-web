document.addEventListener('DOMContentLoaded', () => {
    // Navigasyon Mantığı
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = document.querySelectorAll('.container section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            navLinks.forEach(nav => nav.classList.remove('active-link'));
            link.classList.add('active-link');

            sections.forEach(s => {
                s.classList.remove('active');
                setTimeout(() => s.style.display = 'none', 300);
            });

            setTimeout(() => {
                const targetSection = document.getElementById(targetId);
                targetSection.style.display = 'block';
                setTimeout(() => targetSection.classList.add('active'), 10);
            }, 300);
        });
    });

    // SSS Akordeon Mantığı (Daha akıcı)
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const isOpen = answer.style.maxHeight;
            
            // Kapat/Aç
            if (isOpen) {
                answer.style.maxHeight = null;
                q.querySelector('span').textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                q.querySelector('span').textContent = '-';
            }
        });
    });
});
