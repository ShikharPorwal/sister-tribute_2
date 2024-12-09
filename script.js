// Typing animation
const text = "Words can't express how grateful I am to have you as my sister. You're not just my sister, you're my best friend, my support system, and the most precious gift from Allah. Your kindness, your strength, and your beautiful heart make you special. Through all the ups and downs, fights and makeups, you've been my constant. I may not say it often, but I love you more than you can imagine. You make me proud every single day. Thank you for being the amazing sister you are, SOMI Chacha! 💖";
let index = 0;
const typingText = document.querySelector('.typing-text');

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing animation when page loads
window.onload = typeWriter;

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animation = 'float linear infinite';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 300);

// Add hover effect to moment cards
const cards = document.querySelectorAll('.moment-card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#fff5f8';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'white';
    });
});