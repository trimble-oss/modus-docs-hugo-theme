/*
 * Scroll to top widget
 * Copyright (C) 2022 Trimble Inc.
 * Licensed under MIT
 */

const ScrollToTop = (() => {
  const target = document.querySelector('footer');
  const scrollToTopBtn = document.querySelector('.btn-to-top');
  const rootElement = document.documentElement;

  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollToTopBtn.classList.add('btn-to-top-show');
      } else {
        scrollToTopBtn.classList.remove('btn-to-top-show');
      }
    });
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);

  const observer = new IntersectionObserver(callback);
  observer.observe(target);
})();
