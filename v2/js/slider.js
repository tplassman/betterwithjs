(function () {
  // What
  const slider = document.getElementById('slider');
  const buttons = slider.querySelectorAll('button');
  const prev = buttons[0];
  const next = buttons[1];
  const list = slider.querySelector('ul');
  const slides = list.querySelectorAll('li');

  let activeSlide = 0;

  // How
  function setActiveSlide() {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === activeSlide);
    });

    // Update button states
    prev.disabled = activeSlide === 0;
    next.disabled = activeSlide === slides.length - 1;
  }
  function handlePrev() {
    // Check error cases
    if (activeSlide === 0) {
      return;
    }

    // Update slides state
    activeSlide--;

    setActiveSlide();
  }
  function handleNext() {
    // Check error cases
    if (activeSlide === slides.length - 1) {
      return;
    }

    // Update slides state
    activeSlide++;

    setActiveSlide();
  }

  // When
  prev.addEventListener('click', handlePrev);
  next.addEventListener('click', handleNext);

  // Initialize
  setActiveSlide();
})();
