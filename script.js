// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

// Scroll animations using Intersection Observer
const faders = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// Stars Background Generator
const starsContainer = document.getElementById('stars');

// Star types (make sure these paths match your actual images)
const starTypes = [
    { src: 'images/star5.png', size: 5 },
    { src: 'images/star3.png', size: 3 },
    { src: 'images/star4.png', size: 4 }
];

// Number of stars
const numStars = 100; 

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    const type = starTypes[Math.floor(Math.random() * starTypes.length)];

    star.classList.add('star');
    star.style.width = (type.size * 2) + 'px';
    star.style.height = (type.size * 2) + 'px';
    star.style.backgroundImage = `url(${type.src})`;

    // Random positioning
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';

    // Optional: slight movement speed for a parallax effect
    star.style.transition = `transform ${1 + Math.random() * 2}s linear`;

    starsContainer.appendChild(star);
}

// Game Launcher
function openGame() {
    const gameUrl = 'https://pvpcoinflip.com/'; 
    
    // Opens a window sized for the game
    window.open(gameUrl, 'CoinFlipGame', 'width=500,height=800,menubar=no,toolbar=no,location=no,status=no');
}