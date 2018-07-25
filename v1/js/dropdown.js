(function () {
  // What
  const dropdown = document.getElementById('dropdown');
  const button = dropdown.querySelector('button');

  // How
  function handleClick() {
    dropdown.classList.toggle('is-active');
  }

  // When
  button.addEventListener('click', handleClick);
})();
