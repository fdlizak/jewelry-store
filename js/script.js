// Product Data
const products = [
    {
        id: 1,
        name: 'Kalung Emas Bunga',
        category: 'Kalung',
        description: 'Kalung emas dengan desain bunga yang elegan dan detail yang indah. Cocok untuk acara formal maupun casual.',
        weight: '5.2 gram',
        kadar: '24 Karat',
        price: 'Rp 3.500.000',
        emoji: '💎',
        code: 'KLG-BNG-001'
    },
    {
        id: 2,
        name: 'Gelang Emas Hati',
        category: 'Gelang',
        description: 'Gelang emas dengan motif hati yang romantis. Sempurna sebagai hadiah untuk orang tersayang.',
        weight: '6.8 gram',
        kadar: '24 Karat',
        price: 'Rp 4.200.000',
        emoji: '❤️',
        code: 'GLG-HTI-002'
    },
    {
        id: 3,
        name: 'Cincin Emas Batu Zamrud',
        category: 'Cincin',
        description: 'Cincin emas dengan batu zamrud asli. Desain klasik yang timeless dan berkelas tinggi.',
        weight: '4.5 gram',
        kadar: '24 Karat',
        price: 'Rp 5.800.000',
        emoji: '💍',
        code: 'CNC-ZMD-003'
    },
    {
        id: 4,
        name: 'Anting Emas Permata',
        category: 'Anting',
        description: 'Anting emas dengan desain permata yang bersinar. Sempurna untuk mempercantik penampilan Anda.',
        weight: '2.3 gram',
        kadar: '24 Karat',
        price: 'Rp 2.100.000',
        emoji: '✨',
        code: 'ANT-PRM-004'
    },
    {
        id: 5,
        name: 'Set Perhiasan Emas Lengkap',
        category: 'Set',
        description: 'Set lengkap perhiasan emas terdiri dari kalung, gelang, dan anting. Paket hemat untuk koleksi lengkap.',
        weight: '18 gram',
        kadar: '24 Karat',
        price: 'Rp 12.500.000',
        emoji: '👑',
        code: 'SET-LNG-005'
    },
    {
        id: 6,
        name: 'Kalung Emas Salib',
        category: 'Kalung',
        description: 'Kalung emas dengan liontin berbentuk salib. Cocok untuk yang menginginkan aksesori spiritual dan elegant.',
        weight: '3.8 gram',
        kadar: '24 Karat',
        price: 'Rp 2.900.000',
        emoji: '✝️',
        code: 'KLG-SLB-006'
    },
    {
        id: 7,
        name: 'Gelang Emas Ular',
        category: 'Gelang',
        description: 'Gelang emas dengan pola ular yang unik dan modern. Desain bold untuk tampil percaya diri.',
        weight: '7.2 gram',
        kadar: '24 Karat',
        price: 'Rp 4.900.000',
        emoji: '🐍',
        code: 'GLG-ULR-007'
    },
    {
        id: 8,
        name: 'Cincin Emas Batu Akik',
        category: 'Cincin',
        description: 'Cincin emas dengan batu akik merah asli. Dipercaya membawa keberuntungan dan energi positif.',
        weight: '5.1 gram',
        kadar: '24 Karat',
        price: 'Rp 3.800.000',
        emoji: '🔴',
        code: 'CNC-AKK-008'
    }
];

// Load Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span>⚖️ ${product.weight}</span>
                    <span>✨ ${product.kadar}</span>
                </div>
                <div class="product-price">${product.price}</div>
                <button class="product-button" onclick="openModal(${product.id})">Lihat Detail</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Open Modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').innerHTML = `<div style="font-size: 150px;">${product.emoji}</div>`;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalWeight').textContent = product.weight;
    document.getElementById('modalKadar').textContent = product.kadar;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalCode').textContent = product.code;

    document.getElementById('productModal').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Clear QR code
    document.getElementById('qrContainer').style.display = 'none';
    document.getElementById('qrCode').innerHTML = '';
}

// Close Modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Generate QR Code
document.getElementById('qrButton')?.addEventListener('click', function() {
    const code = document.getElementById('modalCode').textContent;
    const qrContainer = document.getElementById('qrContainer');
    const qrCode = document.getElementById('qrCode');

    qrCode.innerHTML = ''; // Clear previous QR code

    if (qrContainer.style.display === 'none') {
        // Generate new QR code
        new QRCode(qrCode, {
            text: code,
            width: 250,
            height: 250,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
        qrContainer.style.display = 'block';
    } else {
        qrContainer.style.display = 'none';
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Close button in modal
document.getElementById('closeModal').addEventListener('click', closeModal);

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Close menu if hamburger is visible
        if (hamburger.style.display !== 'none') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const inputs = this.querySelectorAll('input, textarea');
        let formData = {};
        inputs.forEach(input => {
            formData[input.name] = input.value;
        });

        // Show success message
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
        
        // Reset form
        this.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
});