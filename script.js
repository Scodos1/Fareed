// ================================
// Project Data
// ================================
const projectData = {
    fashion: {
        title: 'Fashion Display Website',
        category: 'Web Application',
        description: 'A beautifully designed product listing and filtering website that allows users to browse through fashion items with ease. Features include dynamic filtering by category, price, and size, along with a responsive grid layout that adapts to all screen sizes.',
        features: [
            'Dynamic product filtering',
            'Responsive grid layout',
            'Smooth animations and transitions',
            'Clean, modern UI design'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        placeholder: 'Fashion',
        liveUrl: 'https://scodos1.github.io/stylesbytiwa/',
        githubUrl: 'https://github.com/Scodos1/fashion-display'
    },
    portfolio: {
        title: 'Portfolio Website',
        category: 'Web Application',
        description: 'My personal portfolio website showcasing my skills, projects, and experience. Built with a focus on smooth animations, modern design, and optimal user experience across all devices. Features a dark theme with accent colors for visual appeal.',
        features: [
            'Smooth scroll animations',
            'Responsive navigation',
            'Dark theme design',
            'Contact form integration'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        placeholder: 'Portfolio',
        liveUrl: 'https://scodos1.github.io/portfolio',
        githubUrl: 'https://github.com/Scodos1/portfolio'
    },
    interndb: {
        title: 'Intern Database',
        category: 'Management Tool',
        description: 'A comprehensive database management system for tracking and managing intern information. Allows for adding, editing, searching, and deleting intern records with a clean and intuitive interface. Data persistence using local storage.',
        features: [
            'CRUD operations for intern records',
            'Search and filter functionality',
            'Local storage data persistence',
            'Responsive table design'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
        placeholder: 'InternDB',
        liveUrl: 'https://scodos1.github.io/intern-database',
        githubUrl: 'https://github.com/Scodos1/intern-database'
    },
    cgpa: {
        title: 'CGPA Calculator',
        category: 'Educational Tool',
        description: 'A student-focused web application designed to calculate Cumulative Grade Point Average (CGPA). Features an intuitive interface for inputting course grades and credit units, with real-time calculation and result display.',
        features: [
            'Add multiple courses with grades and credits',
            'Real-time CGPA calculation',
            'Clear and intuitive interface',
            'Mobile-responsive design'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        placeholder: 'CGPA',
        liveUrl: 'https://scodos1.github.io/cgpa-calculator',
        githubUrl: 'https://github.com/Scodos1/cgpa-calculator'
    }
};

// ================================
// Modal Functions
// ================================
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];

    if (!modal || !project) return;

    // Populate modal content
    document.getElementById('modalImage').innerHTML = `<span>${project.placeholder}</span>`;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    // Populate features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');

    // Populate tech tags
    const techTags = document.getElementById('modalTech');
    techTags.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    // Update modal actions with project links
    const modalActions = document.querySelector('.modal-actions');
    modalActions.innerHTML = `
        <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
        </a>
        <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.31 3.31 0 0 0 9 18.7V22"/>
            </svg>
            View Code
        </a>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ================================
// Animated Background
// ================================
function initBackgroundSlider() {
    const slides = document.querySelectorAll('.bg-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}

initBackgroundSlider();

// ================================
// Navigation
// ================================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu?.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu?.contains(e.target) && !navToggle?.contains(e.target)) {
        navToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ================================
// Scroll Animations
// ================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate skill bars when visible
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const progress = skillProgress.dataset.progress;
                skillProgress.style.width = `${progress}%`;
            }

            const progressFill = entry.target.querySelector('.progress-fill');
            if (progressFill) {
                const progress = progressFill.dataset.progress;
                progressFill.style.width = `${progress}%`;
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ================================
// Skill Progress Animation
// ================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress, .progress-fill');

    skillBars.forEach(bar => {
        const progress = bar.dataset.progress;
        if (progress) {
            bar.style.width = `${progress}%`;
        }
    });
}

// Animate on page load for visible elements
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateSkillBars, 500);
});

// ================================
// Projects Filter
// ================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-page-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'grid';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ================================
// Contact Form
// ================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const resetFormBtn = document.getElementById('resetForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        contactForm.classList.add('hidden');
        formSuccess?.classList.add('show');

        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

resetFormBtn?.addEventListener('click', () => {
    formSuccess?.classList.remove('show');
    contactForm?.classList.remove('hidden');
});

// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// Parallax Effect for Code Background
// ================================
const codeBackground = document.querySelector('.code-background');

window.addEventListener('scroll', () => {
    if (!codeBackground) return;
    const scrolled = window.pageYOffset;
    codeBackground.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// ================================
// Page Load Animation
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');

    // Trigger initial animations
    const heroElements = document.querySelectorAll('.hero .animate-on-scroll');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 150);
    });
});

// ================================
// Active Navigation Link
// ================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'Index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'Index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// ================================
// Scroll Progress Indicator
// ================================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            z-index: 9999;
            background: transparent;
        }
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #818cf8);
            width: 0;
            transition: width 0.1s ease-out;
        }
    `;

    document.head.appendChild(style);
    document.body.insertBefore(progressBar, document.body.firstChild);

    const scrollBar = progressBar.querySelector('.scroll-progress-bar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollBar.style.width = `${scrollPercent}%`;
    });
}

createScrollProgress();

// ================================
// Console Easter Egg
// ================================
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px;');
console.log('%cFeel free to reach out at alagbefareed@gmail.com', 'font-size: 12px; color: #6366f1;');