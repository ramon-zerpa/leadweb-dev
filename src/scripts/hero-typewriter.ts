/** One timer per headline; the accessible H1 stays complete and unchanged. */
document.querySelectorAll<HTMLElement>("[data-hero-typewriter]").forEach((line) => {
  const hero = line.closest<HTMLElement>(".hero");
  const text = line.querySelector<HTMLElement>("[data-typed-text]");
  const phrases: string[] = JSON.parse(line.dataset.phrases ?? "[]");
  if (!hero || !text || !phrases.length) return;

  const words = phrases.map((phrase) => Array.from(phrase));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let visible = false;
  let started = false;
  let word = 0;
  let length = 0;
  let phase: "typing" | "holding" | "deleting" | "between" = "typing";
  let timer: number | undefined;
  let due = 0;
  let remaining = 120;

  const stop = () => {
    if (timer === undefined) return;
    remaining = Math.max(0, due - performance.now());
    window.clearTimeout(timer);
    timer = undefined;
  };

  const canRun = () => visible && !document.hidden && !reduced.matches && !hero.hasAttribute("data-motion-paused");
  const schedule = (delay: number) => {
    remaining = delay;
    if (!canRun() || timer !== undefined) return;
    due = performance.now() + delay;
    timer = window.setTimeout(tick, delay);
  };

  function tick() {
    timer = undefined;
    if (!canRun()) return;
    let delay = 90;
    if (phase === "typing") {
      length++;
      if (length === words[word]!.length) { phase = "holding"; delay = 1800; }
    } else if (phase === "holding") {
      phase = "deleting";
      length--;
      delay = 45;
    } else if (phase === "deleting") {
      length--;
      delay = 45;
      if (length === 0) { phase = "between"; delay = 300; }
    } else {
      word = (word + 1) % words.length;
      length = 1;
      phase = "typing";
    }
    text!.textContent = words[word]!.slice(0, length).join("");
    line.dataset.typingPhase = phase;
    schedule(delay);
  }

  const reset = () => {
    stop();
    started = false;
    word = length = 0;
    phase = "typing";
    remaining = 120;
  };

  const sync = () => {
    if (reduced.matches) {
      reset();
      text.textContent = phrases[0]!;
      line.dataset.typingState = "reduced";
      return;
    }
    if (!canRun()) {
      stop();
      line.dataset.typingState = "paused";
      return;
    }
    if (!started) {
      started = true;
      text.textContent = "";
      line.dataset.typingPhase = "typing";
    }
    line.dataset.typingState = "running";
    schedule(remaining);
  };

  new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting;
    sync();
  }).observe(line);
  new MutationObserver(sync).observe(hero, { attributes: true, attributeFilter: ["data-motion-paused"] });
  document.addEventListener("visibilitychange", sync);
  reduced.addEventListener("change", sync);
  sync();
});
