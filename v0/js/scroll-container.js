(function () {
  // What
  const cont = document.getElementById('scroll-container');
  const loader = cont.querySelector('em');
  const list = cont.querySelector('ul');
  const items = list.querySelectorAll('li');

  // How
  function fetchMore() {
    items.forEach(item => {
      list.appendChild(item.cloneNode(true));
    });

    loader.style.display = 'none';
  }
  function handleScroll(e) {
    if (cont.scrollTop + cont.offsetHeight >= cont.scrollHeight) {
      loader.style.display = 'block';

      setTimeout(fetchMore, 2000);
    }
  }

  // When
  cont.addEventListener('scroll', handleScroll);
})();
