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
      targetSpeed = 0.2; // trager bij hover
    });
    item.addEventListener('mouseleave', () => {
      targetSpeed = 0.8; // terug naar normaal
    });
  });

  animate();

