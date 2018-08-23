(function () {
  // What
  const cont = document.getElementById('scroll-container');
  const list = cont.querySelector('ul');
  const items = list.querySelectorAll('li');

  // How
  function fetchMore() {
    items.forEach(item => {
      list.appendChild(item.cloneNode(true));
    });

    cont.classList.remove('is-loading');
  }
  function handleScroll(e) {
    if (cont.scrollTop + cont.offsetHeight >= cont.scrollHeight) {
      cont.classList.add('is-loading');

      setTimeout(fetchMore, 2000);
    }
  }

  // When
  cont.addEventListener('scroll', handleScroll);
})();
