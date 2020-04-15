(function() {
  const selectHeader = document.querySelector("header.header");
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
      selectHeader.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !selectHeader.classList.contains(scrollDown)) {
      // down
      selectHeader.classList.remove(scrollUp);
      selectHeader.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && selectHeader.classList.contains(scrollDown)) {
      // up
      selectHeader.classList.remove(scrollDown);
      selectHeader.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
})();