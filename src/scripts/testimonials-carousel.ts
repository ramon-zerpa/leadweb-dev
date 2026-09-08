const testimonialCarousels = document.querySelectorAll<HTMLElement>("[data-testimonials-carousel]");

testimonialCarousels.forEach((carousel) => {
  if (carousel.dataset.carouselReady === "true") return;

  const viewport = carousel.querySelector<HTMLElement>("[data-testimonials-viewport]");
  const track = carousel.querySelector<HTMLElement>("[data-testimonials-track]");
  const cards = Array.from(carousel.querySelectorAll<HTMLElement>("[data-testimonial-card]"));
  const pageButtons = Array.from(carousel.querySelectorAll<HTMLButtonElement>("[data-testimonials-page]"));
  const previous = carousel.querySelector<HTMLButtonElement>("[data-testimonials-previous]");
  const next = carousel.querySelector<HTMLButtonElement>("[data-testimonials-next]");
  const status = carousel.querySelector<HTMLElement>("[data-testimonials-status]");

  if (!viewport || !track || !cards.length || !previous || !next || !status) return;

  const pageLabel = carousel.dataset.pageLabel ?? "Show testimonial group";
  const statusLabel = carousel.dataset.statusLabel ?? "Testimonial group";
  let currentPage = 0;
  let touchStartX: number | null = null;

  const getPerView = () => {
    if (window.matchMedia("(min-width: 64rem)").matches) return 3;
    if (window.matchMedia("(min-width: 48rem)").matches) return 2;
    return 1;
  };

  const update = (announce = false) => {
    const perView = getPerView();
    const pageCount = Math.ceil(cards.length / perView);
    currentPage = Math.min(currentPage, pageCount - 1);
    const firstVisibleIndex = currentPage * perView;
    const lastVisibleIndex = Math.min(firstVisibleIndex + perView, cards.length);
    const offset = cards[firstVisibleIndex]?.offsetLeft ?? 0;

    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    previous.disabled = currentPage === 0;
    next.disabled = currentPage === pageCount - 1;

    cards.forEach((card, index) => {
      const isVisible = index >= firstVisibleIndex && index < lastVisibleIndex;
      card.setAttribute("aria-hidden", String(!isVisible));
      card.inert = !isVisible;
    });

    pageButtons.forEach((button, index) => {
      const isAvailable = index < pageCount;
      button.hidden = !isAvailable;
      button.setAttribute("aria-label", `${pageLabel} ${index + 1} / ${pageCount}`);
      if (isAvailable && index === currentPage) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    if (announce) status.textContent = `${statusLabel} ${currentPage + 1} / ${pageCount}`;
  };

  const goToPage = (page: number) => {
    const pageCount = Math.ceil(cards.length / getPerView());
    currentPage = Math.max(0, Math.min(page, pageCount - 1));
    update(true);
  };

  previous.addEventListener("click", () => goToPage(currentPage - 1));
  next.addEventListener("click", () => goToPage(currentPage + 1));
  pageButtons.forEach((button, index) => button.addEventListener("click", () => goToPage(index)));

  viewport.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? null;
    },
    { passive: true },
  );

  viewport.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
      const distance = touchEndX - touchStartX;
      touchStartX = null;

      if (Math.abs(distance) < 50) return;
      goToPage(currentPage + (distance < 0 ? 1 : -1));
    },
    { passive: true },
  );

  const resizeObserver = new ResizeObserver(() => update());
  resizeObserver.observe(viewport);
  carousel.dataset.carouselReady = "true";
  update();
});
