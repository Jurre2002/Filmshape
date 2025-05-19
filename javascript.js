const track = document.getElementById('track');
const prevBtn = document.querySelector('.arrow.left');
const nextBtn = document.querySelector('.arrow.right');
let slides = Array.from(track.children);

// Clones voor oneindige lus
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

slides = Array.from(track.children); // opnieuw selecteren inclusief clones
let currentIndex = 1;
let transitioning = false;

function getSlideWidth() {
    const slide = slides[0];
    const style = window.getComputedStyle(slide);
    const width = slide.offsetWidth;
    return width; // padding zit al in offsetWidth omdat box-sizing: border-box is
  }
function updatePosition() {
  track.style.transition = 'transform 0.5s ease';
  // Omdat we willen centreren, bereken offset:
  // We verplaatsen track zodanig dat currentIndex slide in het midden van viewport staat.
  // De offset = slideWidth * currentIndex - (viewport width / 2 - slideWidth / 2)
  const slideWidth = getSlideWidth();
  const viewportWidth = window.innerWidth;
  const offset = slideWidth * currentIndex - (viewportWidth / 2 - slideWidth / 2);
  track.style.transform = `translateX(-${offset}px)`;
}

// Initiele positie
updatePosition();

nextBtn.addEventListener('click', () => {
  if (transitioning) return;
  transitioning = true;
  currentIndex++;
  updatePosition();
});

prevBtn.addEventListener('click', () => {
  if (transitioning) return;
  transitioning = true;
  currentIndex--;
  updatePosition();
});

track.addEventListener('transitionend', () => {
    transitioning = false;
  
    if (currentIndex === 0) {
      track.style.transition = 'none';
      currentIndex = slides.length - 2;
      updatePosition();
    } else if (currentIndex === slides.length - 1) {
      track.style.transition = 'none';
      currentIndex = 1;
      updatePosition();
    }
  });

window.addEventListener('resize', () => {
  track.style.transition = 'none';
  updatePosition();
});
