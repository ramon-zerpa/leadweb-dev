/** Progressive motion: static HTML first, then a finite entrance and pausable ambience. */
document.querySelectorAll<HTMLElement>("[data-hero-scene]").forEach((scene) => {
  const hero = scene.closest<HTMLElement>(".hero");
  const art = scene.querySelector<HTMLElement>(".scene-art");
  const pause = scene.querySelector<HTMLButtonElement>("[data-scene-pause]");
  const pauseText = pause?.querySelector<HTMLElement>("[data-motion-label]");
  const parallax = scene.querySelector<HTMLElement>("[data-scene-parallax]");
  const light = hero?.querySelector<HTMLElement>("[data-hero-light]");
  if (!hero || !art || !pause || !pauseText || !parallax) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(min-width: 48rem) and (hover: hover) and (pointer: fine)");
  const finite = new Set<Animation>();
  const ambient: Animation[] = [];
  let introduced = reducedMotion.matches;
  let visible = false;
  let userPaused = false;
  let generation = 0;
  let pointerFrame = 0;
  let bounds: DOMRect | undefined;
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, time: 0 };

  const canMove = () => visible && !document.hidden && !userPaused && !reducedMotion.matches;

  const cancelFinite = () => {
    generation++;
    finite.forEach((animation) => animation.cancel());
    finite.clear();
    scene.dataset.phase = "idle";
  };

  const stopAmbient = () => {
    ambient.forEach((animation) => animation.cancel());
    ambient.length = 0;
  };

  const animate = (element: Element | null, frames: Keyframe[], duration: number, delay = 0) => {
    if (!element) return;
    const animation = element.animate(frames, {
      duration, delay, fill: "both", easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    });
    finite.add(animation);
    animation.onfinish = () => {
      animation.cancel();
      finite.delete(animation);
    };
  };

  const startAmbient = () => {
    if (ambient.length || reducedMotion.matches) return;
    const floating = scene.querySelector("[data-scene-float]");
    const halo = hero.querySelector("[data-hero-ambient]");
    if (floating) ambient.push(floating.animate([
      { transform: "translateY(0) rotate(0deg)" },
      { transform: "translateY(-6px) rotate(-0.45deg)" },
      { transform: "translateY(0) rotate(0deg)" },
    ], { duration: 8000, iterations: Infinity, easing: "ease-in-out" }));
    if (halo) ambient.push(halo.animate([
      { transform: "scale(0.96) translate(-1%, 0)", opacity: 0.45 },
      { transform: "scale(1.08) translate(2%, -2%)", opacity: 0.8 },
    ], { duration: 6500, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }));
    if (!canMove()) ambient.forEach((animation) => animation.pause());
  };

  const resetPointer = () => {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
    pointer.x = pointer.y = pointer.targetX = pointer.targetY = pointer.time = 0;
    parallax.style.transform = "";
    if (light) { light.style.transform = ""; light.style.opacity = "0"; }
    bounds = undefined;
  };

  const update = () => {
    const running = canMove();
    [...finite, ...ambient].forEach((animation) => {
      if (animation.playState !== "finished") running ? animation.play() : animation.pause();
    });
    if (!running) resetPointer();
    scene.dataset.motion = reducedMotion.matches ? "reduced" : running ? "running" : "paused";
    pause.hidden = reducedMotion.matches;
    const label = userPaused ? pause.dataset.resumeLabel : pause.dataset.pauseLabel;
    pause.setAttribute("aria-label", label ?? "");
    pauseText.textContent = label ?? "";
    scene.dataset.userPaused = String(userPaused);
    hero.toggleAttribute("data-motion-paused", userPaused);
  };

  const introduce = () => {
    if (introduced || !canMove()) return;
    introduced = true;
    cancelFinite();
    stopAmbient();
    scene.dataset.phase = "entering";
    const thisGeneration = generation;
    const part = (name: string) => scene.querySelector(`[data-scene-part="${name}"]`);
    const reveal = (name: string, delay: number, duration = 650) => animate(part(name), [
      { opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" },
    ], duration, delay);

    // 0–900 ms: draw a legible blueprint and unfold the two supporting layers.
    animate(part("guides"), [{ transform: "scaleY(0.05)", opacity: 0 }, { transform: "scaleY(1)", opacity: 1 }], 950);
    animate(part("foundation"), [
      { opacity: 0, transform: "translate(28%, 18%) rotate(-38deg) scale(0.55)" },
      { opacity: 1, transform: "rotate(-16deg) scale(1.04)", offset: 0.7 },
      { opacity: 1, transform: "rotate(-12deg) scale(1)" },
    ], 1500);
    animate(part("layout"), [
      { opacity: 0, transform: "translate(-10%, 25%) rotate(24deg) scale(0.7)" },
      { opacity: 1, transform: "rotate(-7deg)", offset: 0.75 },
      { opacity: 1, transform: "rotate(-4deg)" },
    ], 1500, 220);
    animate(part("card"), [
      { opacity: 0, transform: "perspective(900px) translate(8%, 12%) rotateY(-38deg) rotateX(14deg) rotate(-9deg) scale(0.78)", backgroundColor: "#0c252a" },
      { opacity: 1, transform: "perspective(900px) rotateY(-20deg) rotate(-9deg) scale(0.94)", backgroundColor: "#0c252a", offset: 0.3 },
      { opacity: 1, transform: "perspective(900px) rotateY(0deg) rotate(8deg) scale(1.015)", backgroundColor: "#172c30", offset: 0.8 },
      { opacity: 1, transform: "perspective(900px) rotateY(0deg) rotate(6deg) scale(1)", backgroundColor: "#172c30" },
    ], 2200, 100);
    animate(part("blueprint"), [{ opacity: 0 }, { opacity: 0.8, offset: 0.15 }, { opacity: 0.8, offset: 0.55 }, { opacity: 0 }], 1700);
    animate(part("structureTitle"), [{ opacity: 0 }, { opacity: 1, offset: 0.2 }, { opacity: 1, offset: 0.65 }, { opacity: 0 }], 1050, 180);
    animate(part("scan"), [
      { opacity: 0, transform: "translateY(0)" },
      { opacity: 0.8, offset: 0.2 },
      { opacity: 0, transform: `translateY(${art.clientHeight * 0.72}px)` },
    ], 1500, 200);

    // 750–2200 ms: each plane arrives separately, then receives its material.
    scene.querySelectorAll("[data-scene-plane]").forEach((plane, index) => {
      animate(plane, [
        { opacity: 0, transform: "perspective(500px) translate(110%, -45%) rotateY(80deg) rotate(-24deg) scale(0.6)" },
        { opacity: 1, transform: "perspective(500px) rotateY(-8deg) rotate(17deg) scale(1.05)", offset: 0.7 },
        { opacity: 1, transform: "perspective(500px) rotateY(0deg) rotate(13deg) scale(1)" },
      ], 900, 750 + index * 140);
      animate(plane.querySelector(".scene-plane-fill"), [{ opacity: 0 }, { opacity: 1 }], 700, 1100 + index * 130);
    });

    // 1050–2400 ms: reveal the finished interface; the page H1/CTA never wait.
    reveal("topbar", 300, 500);
    reveal("kicker", 1050, 550);
    reveal("title", 1250, 750);
    reveal("action", 1700, 500);
    reveal("badge", 1900, 500);
    Promise.allSettled([...finite].map((animation) => animation.finished)).then(() => {
      if (generation !== thisGeneration) return;
      scene.dataset.phase = "idle";
      startAmbient();
      update();
    });
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting;
    introduce();
    update();
  }, { threshold: 0.15 });
  observer.observe(scene);

  pause.addEventListener("click", () => { userPaused = !userPaused; update(); });

  // Only run frames while the pointer is moving or settling, never an idle JS loop.
  const followPointer = (time: number) => {
    pointerFrame = 0;
    if (!canMove() || !finePointer.matches) return;
    const elapsed = pointer.time ? Math.min(time - pointer.time, 64) : 16;
    pointer.time = time;
    const blend = 1 - Math.exp(-elapsed / 110);
    pointer.x += (pointer.targetX - pointer.x) * blend;
    pointer.y += (pointer.targetY - pointer.y) * blend;
    parallax.style.transform = `perspective(1000px) rotateX(${-pointer.y * 4}deg) rotateY(${pointer.x * 5}deg)`;
    if (light) light.style.transform = `translate3d(${pointer.x * 230}px, ${pointer.y * 150}px, 0)`;
    if (Math.abs(pointer.targetX - pointer.x) + Math.abs(pointer.targetY - pointer.y) > 0.001) {
      pointerFrame = requestAnimationFrame(followPointer);
    } else pointer.time = 0;
  };
  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || !canMove() || !finePointer.matches) return;
    bounds ??= hero.getBoundingClientRect();
    pointer.targetX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
    pointer.targetY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
    if (light) light.style.opacity = "1";
    if (!pointerFrame) pointerFrame = requestAnimationFrame(followPointer);
  }, { passive: true });
  hero.addEventListener("pointerleave", () => {
    bounds = undefined;
    pointer.targetX = pointer.targetY = 0;
    if (light) light.style.opacity = "0";
    if (canMove() && finePointer.matches && !pointerFrame) pointerFrame = requestAnimationFrame(followPointer);
  });
  window.addEventListener("scroll", () => { bounds = undefined; }, { passive: true });
  window.addEventListener("resize", () => { bounds = undefined; if (!finePointer.matches) resetPointer(); }, { passive: true });
  finePointer.addEventListener("change", resetPointer);

  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      introduced = true;
      cancelFinite();
      stopAmbient();
    } else startAmbient();
    update();
  });
  document.addEventListener("visibilitychange", () => { introduce(); update(); });
  scene.dataset.phase = "idle";
  update();
});
