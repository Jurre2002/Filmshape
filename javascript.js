  const carrousel = document.querySelector('.imageCarrousel1');
  const items = document.querySelectorAll('.imageCarrouselItem1');

  let position = 0;
  let speed = 0.5; // normale snelheid
  let targetSpeed = 0.8;

  // Smooth overgang naar nieuwe snelheid
  function updateSpeed() {
    const easing = 0.05;
    speed += (targetSpeed - speed) * easing;
  }

  function animate() {
    updateSpeed();
    position -= speed;
    // Reset als je bij de helft bent (zorgt voor loop-effect, dit moet je handmatig tunen bij duplicaten)
    if (position <= -carrousel.scrollWidth / 2) {
      position = 0;
    }
    carrousel.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      targetSpeed = 0.1; // trager bij hover
    });
    item.addEventListener('mouseleave', () => {
      targetSpeed = 0.7; // terug naar normaal
    });
  });

  animate();

  const reviews = document.querySelectorAll('.review');
  const dots = document.querySelectorAll('.dot');
  const leftArrow = document.querySelector('.arrow1.left');
  const rightArrow = document.querySelector('.arrow1.right');

  let currentIndex = 0;
  let direction = 'right'; // 'left' or 'right'

  function showReview(index) {
    reviews.forEach((review, i) => {
      review.classList.remove('active', 'slide-in-left', 'slide-in-right');
      if (i === index) {
        review.classList.add('active');
        review.classList.add(direction === 'right' ? 'slide-in-right' : 'slide-in-left');
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active-dot', i === index);
    });
  }

  function nextReview() {
    direction = 'right';
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }

  function prevReview() {
    direction = 'left';
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  }

  rightArrow.addEventListener('click', nextReview);
  leftArrow.addEventListener('click', prevReview);

  // Startpositie tonen
  showReview(currentIndex);

  // Optioneel: klikbare bolletjes
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      direction = i > currentIndex ? 'right' : 'left';
      currentIndex = i;
      showReview(currentIndex);
    });
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // voor kruisje
    navLinks.classList.toggle('active'); // voor menu tonen
  });