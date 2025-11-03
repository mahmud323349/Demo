// Animated for words or Sentence
const words = ["Fullstack Web Developer", "Specially Frontend Developer", "Wordpress Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingTextElement = document.querySelector('.typing-text');
const typingSpeed = 150;     // Speed Typing (Mili Seccond)
const deletingSpeed = 80;    // Speed of Mosa
const delayBeforeNext = 1500; // Before wait for next Sentence (Mili Sentence)

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove the words
        typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // typing the words
        typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // next speed control
    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        // finish typing speed of mosa
        speed = delayBeforeNext; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // finished mosa go the after sentence
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        speed = typingSpeed;
    }

    setTimeout(type, speed);
}

// start the function (after loading page)
document.addEventListener('DOMContentLoaded', type);
