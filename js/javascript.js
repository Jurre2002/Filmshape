  const swiper = new Swiper('.videoSwiper', {
    loop: true,
    loopedSlides: 7,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
  });

  const swiperEl = document.querySelector('.videoSwiper');
  swiperEl.addEventListener('mouseenter', () => {
    swiper.params.speed = 8000;
    swiper.autoplay.stop();
  });
  swiperEl.addEventListener('mouseleave', () => {
    swiper.params.speed = 3000;
    swiper.autoplay.start();
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // voor kruisje
    navLinks.classList.toggle('active'); // voor menu tonen
  });

    const reviews = document.querySelectorAll(".review");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".arrow1.left");
  const nextButton = document.querySelector(".arrow1.right");

  let currentIndex = 0;

  function showReview(index, direction = "right") {
    // Reset alle reviews
    reviews.forEach((review, i) => {
      review.classList.remove("active", "slide-in-left", "slide-in-right");
      review.style.display = "none";
      dots[i].classList.remove("active-dot");
    });

    // Voeg actieve class toe aan de juiste review en dot
    const activeReview = reviews[index];
    activeReview.classList.add("active");
    activeReview.style.display = "block";

    if (direction === "right") {
      activeReview.classList.add("slide-in-right");
    } else {
      activeReview.classList.add("slide-in-left");
    }

    dots[index].classList.add("active-dot");
  }

  function nextReview() {
    const newIndex = (currentIndex + 1) % reviews.length;
    showReview(newIndex, "right");
    currentIndex = newIndex;
  }

  function prevReview() {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(newIndex, "left");
    currentIndex = newIndex;
  }

  // Event listeners
  nextButton.addEventListener("click", nextReview);
  prevButton.addEventListener("click", prevReview);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const direction = index > currentIndex ? "right" : "left";
      showReview(index, direction);
      currentIndex = index;
    });
  });

  // Initial review tonen
  showReview(currentIndex);