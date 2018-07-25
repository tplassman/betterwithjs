(function () {
  // What
  const dropdown = document.getElementById('dropdown');
  const button = dropdown.querySelector('button');
  const nav = dropdown.querySelector('nav');

  let isActive = false;

  // How
  function handleClick() {
    if (isActive) {
      isActive = false;

      nav.style.display = 'none';
    } else {
      isActive = true;

      nav.style.display = 'block';
    }
  }

  // When
  button.addEventListener('click', handleClick);
})();
