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

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});

// Animatii la scroll cu Intersection Observer
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


// Fundal stele
const starsContainer = document.getElementById('stars');

// Tipurile de stele (înlocuiește cu path-urile reale)
const starTypes = [
    { src: 'images/star5.png', size: 5 },
    { src: 'images/star3.png', size: 3 },
    { src: 'images/star4.png', size: 4 }
];

// Numărul de stele
const numStars = 100; // poți ajusta

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    const type = starTypes[Math.floor(Math.random() * starTypes.length)];

    star.classList.add('star');
    star.style.width = type.size *2 + 'px';
    star.style.height = type.size*2 + 'px';
    star.style.backgroundImage = `url(${type.src})`;

    // Poziție aleatorie
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';

    // Optional: viteză ușoară de mișcare pentru efect parallax
    star.style.transition = `transform ${1 + Math.random() * 2}s linear`;

    starsContainer.appendChild(star);
}

function openGame() {
    // Replace this with your actual hosted URL
    const gameUrl = 'https://stelianvranceanu.github.io/coinflip.html'; 
    
    // Opens a window sized for the game
    window.open(gameUrl, 'CoinFlipGame', 'width=500,height=800,menubar=no,toolbar=no,location=no,status=no');
}