/** Share the hero's pause and visibility handling with border lights and brand cursors. */
const decorations = [...document.querySelectorAll<HTMLElement>("[data-neon-border], [data-brand-cursor]")];
const visible = new Set<Element>();
const hero = document.querySelector<HTMLElement>('[data-ui-id="home.hero"]');
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

const sync = () => {
  const enabled = !!hero && !document.hidden && !reduced.matches && !hero.hasAttribute("data-motion-paused");
  decorations.forEach((decoration) => {
    decoration.dataset.orbitRunning = String(enabled && visible.has(decoration));
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
  sync();
});
decorations.forEach((decoration) => observer.observe(decoration));
if (hero) new MutationObserver(sync).observe(hero, { attributes: true, attributeFilter: ["data-motion-paused"] });
document.addEventListener("visibilitychange", sync);
reduced.addEventListener("change", sync);
sync();
