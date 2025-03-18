document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.section').forEach((section, index) => {
      section.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });
  });
  