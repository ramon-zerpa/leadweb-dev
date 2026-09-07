const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function getHashTarget(link: HTMLAnchorElement) {
  const href = link.getAttribute("href");
  if (!href?.startsWith("#") || href.length === 1) return;

  return document.getElementById(decodeURIComponent(href.slice(1)));
}

export function scrollToHashTarget(target: HTMLElement) {
  const hadTabindex = target.hasAttribute("tabindex");
  if (!hadTabindex) {
    target.tabIndex = -1;
    target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
  }

  target.scrollIntoView({
    behavior: reducedMotion.matches ? "auto" : "smooth",
    block: "start",
  });
  target.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    !(event.target instanceof Element)
  ) return;

  const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link || (link.target && link.target !== "_self")) return;

  const target = getHashTarget(link);
  if (!target) return;

  event.preventDefault();
  scrollToHashTarget(target);
});
