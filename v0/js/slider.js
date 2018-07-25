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
  function handlePrev() {
    // Check error cases
    if (activeSlide === 0) {
      return;
    }

    // Update slides state
    slides[activeSlide].style.display = 'none';
    activeSlide--;
    slides[activeSlide].style.display = 'block';

    // Update button states
    prev.disabled = activeSlide === 0;
    next.disabled = false;
  }
  function handleNext() {
    // Check error cases
    if (activeSlide === slides.length - 1) {
      return;
    }

    // Update slides state
    slides[activeSlide].style.display = 'none';
    activeSlide++;
    slides[activeSlide].style.display = 'block';

    // Update button states
    prev.disabled = false;
    next.disabled = activeSlide === slides.length - 1;
  }

  // When
  prev.addEventListener('click', handlePrev);
  next.addEventListener('click', handleNext);

  // Initialize
  slides[activeSlide].style.display = 'block';
})();
