const track = document.getElementById('track');
const prevBtn = document.querySelector('.arrow.left');
const nextBtn = document.querySelector('.arrow.right');
let slides = Array.from(track.children);

// Clones toevoegen
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

slides = Array.from(track.children); // inclusief clones
let currentIndex = 1;
let transitioning = false;

function getSlideWidth() {
  return slides[0].offsetWidth;
}

function updatePosition(animate = true) {
  const slideWidth = getSlideWidth();
  const containerWidth = document.querySelector('.carrousel-container').offsetWidth;
  const offset = slideWidth * currentIndex - (containerWidth - slideWidth) / 2;

  track.style.transition = animate ? 'transform 0.5s ease' : 'none';
  track.style.transform = `translateX(-${offset}px)`;
}

// Initiele positie
updatePosition(false);

// Rechterpijl
nextBtn.addEventListener('click', () => {
  if (transitioning) return;
  transitioning = true;
  currentIndex++;
  updatePosition(true);
});

// Linkerpijl
prevBtn.addEventListener('click', () => {
  if (transitioning) return;
  transitioning = true;
  currentIndex--;
  updatePosition(true);
});

track.addEventListener('transitionend', () => {
  if (currentIndex === 0) {
    currentIndex = slides.length - 2;
    // Delay nodig om transform zonder animatie te laten uitvoeren
    requestAnimationFrame(() => updatePosition(false));
  } else if (currentIndex === slides.length - 1) {
    currentIndex = 1;
    requestAnimationFrame(() => updatePosition(false));
  }
  transitioning = false;
});

const reviews = document.querySelectorAll('.review');
const leftArrow = document.querySelector('.arrow1.left');
const rightArrow = document.querySelector('.arrow1.right');
const dots = document.querySelectorAll('.dot');

let currentIndex1 = 0;
let lastIndex = 0;

function showReview(index) {
  reviews.forEach((review, i) => {
    // Verwijder alle actieve en animatieklassen
    review.classList.remove('active', 'slide-in-left', 'slide-in-right');
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === index);
  });

  // Bepaal animatierichting
  const direction = index > lastIndex ? 'slide-in-right' : 'slide-in-left';

  // Voeg active en animatieklasse toe
  reviews[index].classList.add('active', direction);

  lastIndex = index;
}

// Eventlisteners pijlen
leftArrow.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 - 1 + reviews.length) % reviews.length;
  showReview(currentIndex1);
});

rightArrow.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 + 1) % reviews.length;
  showReview(currentIndex1);
});

// Eventlistener bolletjes
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    // Alleen animatie bepalen op basis van vorige index
    showReview(i);
    currentIndex1 = i;
  });
});

showReview(currentIndex1);





