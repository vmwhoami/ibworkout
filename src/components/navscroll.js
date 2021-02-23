export default function scrollfade() {
  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return (...args) => {
      const contest = this;
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(contest, args);
        }
      };
      const callnow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callnow) func.apply(contest, args);
    };
  }

  const navbarFade = () => {
    const nav = document.querySelector('.nav');
    const scroll = window.pageYOffset;
    if (scroll > 20) {
      nav.classList.add('faded');
    } else {
      nav.classList.remove('faded');
    }
  };

  window.addEventListener('scroll', debounce(navbarFade));
}
