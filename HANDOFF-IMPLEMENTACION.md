# Lead Web: hand-off de implementación

Fecha: 2026-09-06.
Estado: header/hero valorados muy positivamente por el usuario y autorizada la continuación por bloques. Entrada de 2,4 s, iluminación circular amplia/desvanecida, respuesta al puntero, brillos difusos, typewriter 700 con degradado y firma con cursor. Escena única ampliada, sin etiqueta Structure/Experience, y eyebrow EN actualizado/acercado al H1. Un único botón pausa el conjunto. Favicon de marca añadido y firma acercada al símbolo. La franja `Stats`, Work / DISOCA, Expertise, Founder, Process, Reviews y Contact están integrados bajo el hero; Founder conserva una proporción más cuadrada, borde neón reforzado y sombra permanente sin efectos al hover. Reviews es una sección hermana semántica con H2, enlace de navegación, tarjetas compactas y controles manuales a la derecha. Contact conserva las alternativas directas y usa el destino Formspree documentado con validación y estados accesibles, sin envío real de QA. Su servicio ahora alinea exactamente con los otros campos. `StickyWhatsApp.astro` ofrece además una acción fija turquesa–cian–azul, sin verde, que permanece visible e interactiva también en Contact. Los enlaces internos usan scroll suave sin hash en la URL, incluido Contact. Las portadas completas están implementadas en `/` y `/es/`, con hreflang y switcher funcionales. El checkpoint anterior se envió como `97e5cdf` a `origin/master`; el checkpoint actual queda autorizado para commit y push. Sin Remotion ni despliegue al hosting; la verificación de producción sigue pendiente.

Este documento complementa `PLAN-LEADWEB.md` (plan maestro) y `DESIGN-HANDOFF.md` (dirección visual v1), y permite a otro agente continuar la construcción sin depender del historial del chat.

Actualización vigente: el caption de Founder usa `margin-top: 1rem` y `padding: 0 2% 0 2%` en todos los breakpoints. Contact muestra LinkedIn e Instagram después de sus alternativas directas. El CTA fijo de WhatsApp ya no se oculta en Contact: permanece visible e interactivo por solicitud expresa del usuario.

## 1. Contexto

Construir el sitio estático bilingüe de Lead Web Developers (Ramón Zerpa) con Astro 7, SSG, TypeScript estricto y HTML semántico. Inglés en `/`, español en `/es/`. Destino comercial: negocios de Florida, operando honestamente desde Mérida, Venezuela.

El diseño v1 ya fue aprobado visualmente y documentado en `DESIGN-HANDOFF.md`. La construcción está en curso (etapa 3 del plan).

Diseño vigente: `C:\Users\user\Downloads\new-lead-web\design-preview\pencil-design-new-leadweb.pen`, confirmado por MCP. Este handoff concentra el estado técnico; las notas históricas del plan no reabren aprobaciones ya concedidas.

## 2. Estado actual

### Completado (implementación)
- Scaffolding Astro movido de `short-singularity\` a la raíz del repo y carpeta temporal eliminada.
- `package.json` reescrito: name `leadweb-dev`, scripts `dev`, `check`, `build` (`astro check && astro build`), `preview`, `astro`.
- Dependencias instaladas: `astro@^7.3.1`, `@astrojs/sitemap@^3.7.4`; dev `@astrojs/check@^0.9.10`, `typescript@^6.0.3`.
- `astro.config.mjs` configurado: `site: https://leadweb.dev`, `trailingSlash: "always"`, `compressHTML: true`, i18n (`en` default sin prefijo, `es` en `/es/`), sitemap con i18n (`en-US`/`es-US`) y fuentes locales (Instrument Sans 400/500/600/700 → `--font-sans`; IBM Plex Mono 400 → `--font-mono`). Las redirecciones heredadas se retiraron de Astro por una colisión del build y quedan pendientes para Apache; ver sección 10.
- `src/content/copy.ts` escrito: única fuente de verdad para todos los textos EN/ES (nav, hero, stats, work, expertise, founder, process, testimonials, contact, footer, privacy, notFound). Exporta `Locale = "en" | "es"` y `Copy`.
- Assets en `src/assets/`: `logo.png` (49 KB, transparente), `portrait.png` (1,9 MB), `disoca-preview.png` (545 KB), `disoca-photo.webp` (143 KB).
- `src/layouts/BaseLayout.astro`: idioma, metadatos por página, canonical del dominio configurado, Open Graph, Twitter, soporte de alternates EN/ES y `x-default`, `noindex` opcional, meta robots indexable, JSON-LD localizado (`OnlineBusiness`, `Person`, `WebSite` y `WebPage`), fuentes locales con una sola precarga, skip link traducido y único `<main>` enfocable. Slots `header`, contenido, `footer` y `head`.
- `src/styles/global.css`: tokens visuales aprobados, escala de espaciado, tipografía fluida, contenedor, superficies clara/oscura, foco visible y reducción de movimiento. Sin JavaScript de cliente añadido.
- `src/pages/index.astro` y `src/pages/es/index.astro` componen las portadas equivalentes EN/ES con layout, Nav, Hero, Stats, Work, Expertise, Founder, Process, Testimonials, Contact, CTA fijo WhatsApp y `BottomBar`.
- `src/components/Nav.astro`: cabecera de 80 px por debajo de 1024 px y de 96 px a partir de ese ancho. Menú modal móvil con cierre mediante botón/Escape, foco circular, retorno de foco y desbloqueo de scroll al cerrar o cambiar a escritorio. Integrada en el slot `header` de `/`.
- Componentes reutilizables `NavBrand.astro`, `NavLinks.astro` y `LanguageSwitcher.astro`. Logo maestro conservado y servido mediante variantes WebP de Astro; etiquetas accesibles EN/ES añadidas a `copy.ts`.
- `NavBrand.astro`: “Lead Web” a `0.75rem`/400 y `</Dev_>` a `0.875rem`/600 con degradado turquesa–azul, mismo ancho y centro vertical con el logo. `brandSignature` en `copy.ts`; firma reutilizada en el menú móvil. El guion bajo parpadea con CSS y usa el controlador compartido de los brillos para pausa/visibilidad; sin fuentes ni dependencias adicionales.
- Destinos del Nav configurables con `sectionLinks`, `contactHref`, `homeHref` y `alternateHref`. Las anclas EN/ES respetan los títulos visibles de cada idioma; el switcher enlaza `/` y `/es/` de manera recíproca. Los destinos internos conservan href como fallback y el scroll suave evita el hash con JavaScript.
- `src/scripts/smooth-scroll.ts`: controla los enlaces internos de la página, incluido “Explore my work”. Intercepta la navegación normal para desplazar la sección con suavidad y sin cambiar la URL; conserva los `href` como fallback y utiliza desplazamiento inmediato con `prefers-reduced-motion`. Da foco temporal a la sección de destino para usuarios de teclado. El menú móvil lo reutiliza antes de cerrar su diálogo.
- `Hero.astro` y `HeroScene.astro`: composición EN/ES, tipografía adaptada por idioma, última línea del titular animada, texto/CTA disponibles desde HTML y escena geométrica con CSS. Una sola escena final; rótulo Structure/Experience retirado. Dos columnas desde 1024 px; escena simplificada debajo del texto en móvil. Ambas variantes se integran en las rutas públicas equivalentes.
- `src/scripts/hero-scene.ts`: entrada de 2,4 s, flotación y luz ambiental situada en el hero completo. Puntero preciso desde 768 px, pausa/reanudación compartida y suspensión fuera de pantalla/pestaña oculta. Se retiraron selección de vista y repetición; el estado final existe sin scripts. Movimiento reducido conserva la composición estática y oculta el botón de pausa.
- `hero.body` en `copy.ts` contiene `intro`, `detail` y `ending`; la frase final solo se muestra desde 768 px como en Pencil. También contiene los textos de estructura y etiquetas accesibles de los controles en EN/ES.
- `src/scripts/hero-typewriter.ts`: tres frases EN/ES con escritura/borrado y cursor. Pausa manual mediante `data-motion-paused`, suspensión independiente al salir el titular de pantalla o al ocultar la pestaña y primera frase estática con movimiento reducido. H1 accesible original y espacio reservado para impedir saltos. Se retiró el evento de repetición.
- `NeonBorder.astro` y `neon-border.ts`: contorno CSS de 1 px y halo difuso; dos reflejos turquesa/cian/azul recorren el CTA fijo WhatsApp, CTA superior, badge y retrato en 6/7/8/8 s. Sustituye los antiguos segmentos SVG. El controlador, cargado por `NeonBorder`, también sincroniza el guion bajo de `NavBrand`; pausa compartida, visibilidad por elemento y movimiento reducido.
- Tokens `--color-brand-turquoise`, `--color-brand-cyan`, `--color-brand-blue` y `--gradient-brand` en `global.css`; degradado compartido por firma y texto visual del typewriter, colores reutilizados en los brillos. Fallback sólido y colores forzados incluidos.
- Menú e idioma alternativo con hover turquesa sólido; idioma actual conserva su color. Separador vertical con separación visual igual a ambos lados. Typewriter en peso 700; EN conserva tamaño y ES reduce únicamente la línea animada un 2 % desde 1024 px. Detalles en sección 18.
- Favicon de marca derivado de `src/assets/logo.png`: PNG 96×96 e ICO 16/32/48, declarados en el layout. Firma a 4 px del logo en móvil/tablet y 8 px desde 1024 px. Detalles en sección 19.
- `src/components/Stats.astro`: franja semántica de experiencia bajo el hero. El título solo para tecnologías de asistencia etiqueta una lista de definiciones; los datos siguen en `copy.ts`. Desde 1024 px los tres hechos se muestran en fila; de 768 a 1023 px se recomponen como tres columnas verticales; por debajo de 768 px se conserva la síntesis móvil de dos hechos con etiquetas cortas. Sin imágenes ni JavaScript.
- `src/components/Work.astro`: sección semántica Selected work con H2, artículo y H3 de DISOCA, apoyada en los textos centralizados. Reproduce el navegador enmarcado y utiliza `Picture` para servir la previsualización local en AVIF/WebP con `loading="lazy"`; desde 1024 px usa dos columnas y en móvil apila el contenido. El enlace externo usa `target="_blank"` y `rel="noopener noreferrer nofollow"`. Sin JavaScript ni dependencias nuevas.
- `src/components/Expertise.astro`: sección semántica de servicios con H2, lista y H3 por oferta. Reproduce la superficie oscura y las cuatro filas de Pencil con números/flechas decorativos; CSS móvil primero y dos columnas desde 1024 px. Sin JavaScript, enlaces ficticios ni dependencias nuevas.
- `src/components/Founder.astro`: sección semántica de confianza con H2, retrato y pie de foto, biografía, experiencia/formación y enlace externo a LinkedIn. `Picture` sirve `src/assets/portrait.png` en AVIF/WebP diferido y genera candidatos de 342, 424, 636, 848 y 1024 px para la densidad real de cada pantalla. La imagen limpia usa relación cuadrada `1 / 1` en todos los breakpoints; `NeonBorder` a 8 s se separa 2 px y refuerza su halo. La grilla del retrato conserva 1,25 rem y el caption añade `margin-top: 1rem` con `padding: 0 2% 0 2%` en toda la escala. La sombra inferior del retrato es permanente; no hay transformaciones, escala ni intensificación al hover. Sin dependencias, solicitudes remotas ni JavaScript adicional.
- `src/components/Process.astro`: sección semántica de proceso con H2 y lista ordenada de tres H3; su introducción usa un `div` neutro, sin `header` innecesario. Mantiene la superficie paper, líneas superiores y copy EN/ES centralizado; usa tres columnas desde 1024 px y pila vertical por debajo, con 2–2,5 rem de aire superior en móvil/tablet.
- `src/components/Testimonials.astro` y `src/scripts/testimonials-carousel.ts`: sección independiente posterior a Process, con H2, `aria-labelledby`, enlace “Reviews” / “Reseñas”, seis testimonios aprobados y completos en EN/ES, calificación accesible, artículos con pie de atribución y enlaces externos. El carrusel muestra 3/2/1 tarjetas en 1024/768/móvil, usa flechas a la derecha, indicadores, swipe, estado anunciado e `inert` para contenido fuera de vista. Sin autoplay ni dependencias; sin JavaScript conserva una cuadrícula con las seis tarjetas.
- `src/components/Contact.astro`: sección semántica de contacto con H2, correo/WhatsApp y un formulario con etiquetas visibles, campos requeridos, teléfono opcional y radios de servicio. Replica la cuadrícula de Pencil desde 1024 px y la pila móvil debajo. El `fieldset` restablece padding a cero y aplica 10 px entre `legend` y opciones para igualar sus bordes y ritmo con los otros campos. Después de sus alternativas, un `nav` etiquetado muestra LinkedIn e Instagram con `rel="me noopener noreferrer"`, reduce su separación efectiva a 1 rem y deja 0,5 rem extra antes de la ubicación. El `action` nativo y la mejora con `fetch` usan el destino Formspree existente; valida email, bloquea envíos duplicados, preserva datos ante error y anuncia el resultado por `aria-live`. No se hizo un envío real.
- `src/components/StickyWhatsApp.astro`: CTA fijo al WhatsApp autorizado, con una marca sólida y anillo turquesa sobre un disco ink de 48 px, degradado de marca y `NeonBorder` de 6 s. Mantiene `target="_blank"`/`rel="noopener noreferrer"` y `pointer-events: auto` en la acción. Se oculta visual y semánticamente durante el hero, se revela al alcanzar `#lead-web-experience` y permanece visible e interactivo desde allí, incluido Contact y el cierre.
- `src/components/BottomBar.astro`: pie inferior compacto en el slot `footer`, con copyright y “With love from VE to USA.” traducible desde `copy.ts`. Desde 768 px dispone ambos extremos en dos columnas; en móvil los apila. Reserva `calc(6.25rem + env(safe-area-inset-bottom))` debajo del contenido para que el CTA fijo no tape los textos.
- `public/robots.txt` permite el rastreo y declara `https://leadweb.dev/sitemap-index.xml`; el sitemap i18n emite las dos rutas canónicas. Plan, entrega visual y README sincronizados con el estado actual y la ubicación vigente de Pencil. `AGENTS.md` y `CLAUDE.md` mantienen sus instrucciones válidas.

### Pendiente
- La barra inferior compacta está integrada. Un Footer ampliado solo se abordará si el usuario lo solicita como un bloque nuevo.
- Páginas de privacidad y 404, imagen social, verificación operativa de Formspree y despliegue quedan fuera del alcance actual. La nota bajo el formulario no enlaza a privacidad para no crear rutas adicionales.
- `alternates`, sitemap i18n, `robots.txt`, canonicales, metadatos localizados y schema de las dos portadas ya se generan para el par real `/` y `/es/`.
- PageSpeed y Core Web Vitals se volverán a medir sobre producción. El Lighthouse local de esta estación está contaminado por una extensión que inyecta recursos ajenos, por lo que su puntuación no representa el sitio; build, tipos, HTML emitido y auditoría estática ya pasan.
- Optimizar imágenes: `portrait.png` y `disoca-preview.png` ya se sirven con `Picture` mediante variantes AVIF/WebP diferidas. Revisar su presupuesto transferido al finalizar la portada.

### Bloqueos
- Ninguno técnico para continuar. La aprobación de diseño ya consta en `DESIGN-HANDOFF.md`.
- El checkpoint autorizado el 2026-09-07 se completó como `97e5cdf` y dejó `master` sincronizada con `origin/master`. Founder no incluye una autorización nueva de commit/push. El despliegue en hosting permanece sin autorización.

## 3. Decisiones de arquitectura ya fijadas

| Tema | Decisión |
| --- | --- |
| Rutas | Activas: `/` (EN) y `/es/` (ES). Privacidad y 404 están diferidas. Caso Disoca NO es página interna: enlace externo a `https://disoca.com/` con `target="_blank"` y `rel="noopener noreferrer nofollow"`. |
| Idiomas | Default `en` sin prefijo. Cambio de idioma enlaza a la página equivalente (alternates + switcher), nunca siempre a la portada. |
| Contenido vs páginas | Textos EN/ES centralizados en `copy.ts`; las portadas equivalentes están compuestas en `/` y `/es/`. |
| Fuentes | Locales vía `fontProviders.fontsource()`; variables `--font-sans`, `--font-mono`. |
| Casos | Sin `/work/<slug>/` por ahora. Solo el enlace externo de Disoca. |
| Layout | Las páginas pasan `locale`, metadatos específicos y contenido. El layout contiene el único `<main>`; cabecera y footer se incorporan en slots externos al main. |
| Hreflang | `alternates` recibe un par explícito de rutas equivalentes ya existentes. Produce ambos idiomas y `x-default` EN; no se publica en páginas con `noindex`. |

## 4. Datos clave (autorizados en `PLAN-LEADWEB.md`)

- Correo: `info@leadweb.dev`
- WhatsApp: `+584247067872` → `https://wa.me/584247067872`
- LinkedIn: `https://www.linkedin.com/in/raymond-zerpa`
- Instagram: `https://www.instagram.com/leadweb.dev`
- Formspree: el Contact actual apunta a `https://formspree.io/f/xeoyljzz` mediante `action` y `fetch` con Accept JSON. Campos declarados: nombre (`name`), `email`, `phone` (opcional), `service`, `message`. No se envió una prueba; confirmar destinatario, antispam y automatizaciones antes de lanzamiento.
- Nota honesta: el estado "éxito" = aceptación de Formspree, NO entrega confirmada al buzón (queda reflejado en `copy.ts`).

## 5. Tokens visuales (de `DESIGN-HANDOFF.md`)

| Token | Valor |
| --- | --- |
| Ink | `#091214` |
| Paper | `#F3F4EF` |
| Accent / CTA | `#53E3DE` |
| Degradado de marca | `#00DED3 → #00BDDD → #2576EF`, dirección 135° |
| Depth / sección oscura | `#112629` |
| Texto secundario sobre oscuro | `#A7B8B8` |
| Texto secundario sobre claro | `#506A62` |
| Borde de campo oscuro | `#628084` |
| Borde de opciones | `#607B7D` |
| Pestaña seleccionada | `#4B7275` |

Escala de espaciado: 8, 16, 24, 32, 48, 64, 96. Margen base escritorio: 64; móvil: 24. Layout fluido, no copiar posiciones absolutas.

### Criterio responsive aprobado — 2026-09-06

- Anchos principales de diseño/revisión: **390, 768, 1024 y 1440 px**.
- Estilos móviles como base, con tipografía y espaciado fluidos mediante `clamp()`.
- 768 y 1024 px son puntos candidatos para cambios de composición cuando el contenido lo requiera; no introducir media queries vacías o cambios artificiales en cada ancho de revisión.
- 1440 px es la referencia de escritorio y el ancho máximo del contenedor (90rem con la base habitual de 16 px); 390 px es la referencia móvil, no el mínimo admitido.
- Añadir pruebas en anchos intermedios y más estrechos. En la cabecera, el único cambio de distribución ocurre en `64rem` (1024 px con la base habitual), igual en CSS y `matchMedia`.

## 6. Dirección de movimiento del hero

- Planos geométricos que construyen una interfaz en la entrada; la selección manual de vista se retiró al simplificar los controles.
- Dirección actual autorizada: entrada de 2,4 s con estructura, ensamblaje y revelado, seguida de movimiento ambiental pausable. Esta petición del usuario sustituye el límite orientativo anterior de 650–900 ms y la restricción de bucles para este ambiente. No hay loader obligatorio, sustitución del cursor ni scrolljacking.
- `prefers-reduced-motion`: mostrar composición final directamente. Móvil: escena simplificada, controles de 44 px.
- Texto/CTA indexables y disponibles desde el primer render; la ilustración nunca contiene información imprescindible.
- Puntero preciso y hover desde 768 px: inclinación limitada a 4°/5° y desplazamiento de una luz circular. El seguimiento usa frames solo mientras cambia la posición o se estabiliza. Touch y movimiento reducido no activan el efecto. Un único botón EN/ES pausa/reanuda escena, titular, contornos de neón y guion bajo de la firma.
- Titular typewriter autorizado: tres frases por idioma en loop, cursor titilante y borrado. H1 accesible original completo y primera frase estática sin cursor animado con movimiento reducido o scripts ausentes.

## 7. Próximos pasos (por etapas, no todo de una vez)

1. **Siguiente bloque solo bajo nueva petición.** La barra inferior ya está integrada; `Stats`, Work / DISOCA, Expertise, Founder, Process, Reviews y Contact están completos en EN y ES; continuar una sección por vez.
2. **Demás secciones**, una o pocas por bloque acordado: completar `Footer`. Activar los destinos del Nav al existir cada sección.
3. **Páginas completas e integraciones**: composición EN/ES, privacidad, 404, verificación operativa de Formspree, metadatos específicos, alternates, robots y migración. Comprobar recepción real del formulario antes de lanzamiento.
4. **Verificar cada bloque** con tipos/build y navegador. Servidor en background: `npm run dev -- --background`; gestionar con `npm run astro -- dev status`, `logs` y `stop`.

## 8. Archivos relevantes

- `astro.config.mjs` — i18n, sitemap y fuentes; redirecciones antiguas pendientes para Apache.
- `src/content/copy.ts` — TODOS los textos por localidad; la implementación debe leer de aquí, no duplicar strings.
- `src/assets/{logo.png, portrait.png, disoca-preview.png, disoca-photo.webp}` — recursos; optimizar tamaños.
- `src/layouts/BaseLayout.astro` y `src/styles/global.css` — base compartida verificada.
- `src/components/{Nav,NavBrand,NavLinks,LanguageSwitcher}.astro` — cabecera y piezas reutilizables. Un solo Nav por página; IDs estables `site-header` y `site-menu`.
- `src/components/{Hero,HeroScene}.astro` y `src/scripts/{hero-scene,hero-typewriter}.ts` — hero, escena y titular animado. Destinos configurables `contactHref`/`workHref`; Contact y Selected work ya están anclados.
- `src/components/NeonBorder.astro` y `src/scripts/neon-border.ts` — luz difusa del borde y controlador compartido con los cursores de marca.
- `src/scripts/smooth-scroll.ts` — navegación interna suave, sin hash y con respeto a movimiento reducido.
- `src/components/Stats.astro` — franja de experiencia responsive y semántica, bajo el hero.
- `src/components/Work.astro` — bloque Selected work responsive y semántico, con previsualización optimizada de DISOCA.
- `src/components/Expertise.astro` — bloque de servicios responsive y semántico sobre superficie oscura.
- `src/components/Founder.astro` — presentación profesional responsive, retrato optimizado de borde neón y enlace a LinkedIn.
- `src/components/Process.astro` — recorrido de trabajo responsive y semántico en tres pasos, sobre superficie paper.
- `src/components/Testimonials.astro` — sección Reviews responsive y semántica, con H2, carrusel progresivo y atribución compacta.
- `src/components/Contact.astro` — contacto responsive, alternativas directas, LinkedIn/Instagram más cerca de ellas y formulario Formspree con estados accesibles; servicios alineados con los controles de texto.
- `src/components/StickyWhatsApp.astro` — acción fija, responsive y no verde para WhatsApp; se revela desde Stats y reutiliza el contorno de neón hasta el cierre.
- `src/components/BottomBar.astro` — cierre inferior con copyright, frase de código y área segura para el CTA fijo.
- `src/pages/index.astro` — cabecera, hero, Stats, Work, Expertise, Founder, Process, Reviews, Contact, CTA fijo WhatsApp y barra inferior EN; siguiente incorporación: Footer ampliado.
- `public/` — favicon de marca en `favicon.png` y `favicon.ico`; iconos del starter sustituidos.
- `DESIGN-HANDOFF.md`, `PLAN-LEADWEB.md` — referencia de diseño y plan/autorizaciones.
- `tsconfig.json` — extiende `astro/tsconfigs/strict`.

## 9. Límites de autorización

- El primer checkpoint se envió el 2026-09-06 y el segundo, autorizado el 2026-09-07, se envió como `97e5cdf`. No hay autorización de un checkpoint posterior para Founder ni Process. El despliegue a Namecheap requiere autorización aparte.
- NO leer/editar el `.pen` por filesystem (solo MCP Pencil).
- NO exponer secretos, credenciales, PDF de LinkedIn ni backups.
- No inventar clientes, métricas ni experiencia. Mantener: 13+ años desde 2013, Lead Web desde 2015, base real Mérida (Venezuela), servicio a Florida.

## 10. Verificación del bloque base — 2026-09-06

Resultados históricos anteriores a la cabecera. La sección 17 registra el refinamiento vigente de brillos, firma y degradado.

- Entorno: Node `24.14.1`, npm `11.18.0`.
- `npm run build`: PASS. Incluye `astro check`: 0 errores, 0 warnings y 0 hints. Genera una página (`/`) y sitemap con esa única URL.
- Se encontró y corrigió una colisión previa: los redirects `.html` generaban `dist/index.html/index.html`, impidiendo escribir la portada con error `EISDIR`. Se retiraron ambos redirects de `astro.config.mjs`. El mapa `/index-en.html → /`, petición directa `/index.html → /es/` se conserva en el plan para implementar y probar en Apache/Namecheap, distinguiendo `THE_REQUEST` de `DirectoryIndex`. No se han aplicado reglas de hosting.
- Navegador integrado en 1440, 768, 390 y 360 px: un H1 y un main, IDs únicos, sin desbordamiento horizontal. Revisión visual de escritorio y móvil. Márgenes móviles 24 px y escritorio aproximadamente 64 px.
- Teclado: Tab muestra el skip link con foco visible; Enter lleva el foco al `main-content`.
- Metadatos de `/`: canonical `https://leadweb.dev/`, OG EN, una precarga de fuente; sin `noindex` ni alternates a páginas ausentes. Sin errores o warnings de consola en la muestra principal.
- Pruebas temporales de layout EN/ES: títulos y skip link traducidos, canonical propio, hreflang recíproco y `x-default` EN. Variante `noindex`: omite canonical y alternates. Superficie clara con los colores aprobados; sin overflow móvil. La ruta de prueba fue eliminada; no forma parte del build ni del alcance de páginas entregadas.
- Fuentes emitidas como WOFF2 locales y `font-display: swap`; solo se precarga Instrument Sans 400 latin. El HTML de producción no contiene scripts.
- Tamaño de la muestra: HTML de 9.934 bytes (2.726 bytes al comprimir con gzip), incluidos 8.203 bytes de estilos de fuentes y base. Es una comprobación del artefacto local, no una medición de transferencia del hosting ni de PageSpeed.
- Revisión de whitespace en los ocho archivos modificados/creados del bloque: sin incidencias. El repositorio aún no tiene commits y todos los archivos siguen sin seguimiento; `git diff --check` por sí solo no cubre esos archivos.
- Servidor local iniciado mediante `astro dev --background`: `http://localhost:4321`. Comprobar status en futuras sesiones antes de asumir que sigue activo.

Estos resultados corresponden a la base y una muestra mínima, no a la fidelidad de la portada completa, a las futuras interacciones, a un ensayo de reduced motion de la animación aún inexistente ni a una medición PageSpeed/CWV. No se ha realizado publicación.

## 11. Verificación de la cabecera — 2026-09-06

Resultados históricos anteriores al hero. La sección 12 registra el estado posterior.

- Referencias Pencil leídas por MCP: navegación EN `bm5Ht`, móvil `rfJqQ`, menú abierto `A5bxI` y navegación ES `LhYuV`. Se conservaron marca, colores y jerarquía; la cabecera móvil usa el margen global de 24 px y un logo cuadrado de 44 px para preservar su proporción.
- `npm run build`: PASS tras el cambio final de teclado y eliminación de rutas temporales. Astro check: 0 errores, 0 warnings y 0 hints. Build final: únicamente `/` y sitemap de esa URL.

| Ancho | Cabecera EN/ES | Menú | Resultado |
| --- | --- | --- | --- |
| 390 px | 80 px | Botón y diálogo móvil | Sin overflow |
| 768 px | 80 px | Botón y diálogo móvil | Sin overflow |
| 1024 px | 96 px | Navegación completa | Sin overflow |
| 1440 px | 96 px | Navegación completa | Sin overflow |

- Pruebas adicionales EN en 320, 360 y 1023 px sin overflow ni logo fallido. El cambio a escritorio se comprobó en 1024 px.
- Menú: botón de apertura, cierre con botón y Escape, `aria-expanded`, foco inicial en cierre, ciclo Tab/Shift+Tab, regreso al activador y bloqueo de scroll. Al ampliar a escritorio, se cierra y el foco pasa a la marca visible.
- En una ruta temporal EN/ES se comprobaron enlaces reales de sección y selector de idioma equivalente. Al elegir Servicios, se cerró el menú, se actualizó `#servicios` y el foco llegó a esa sección. Las rutas temporales fueron eliminadas antes del build final; no son las futuras páginas `/es/`.
- Menú ES a 390 x 500 px: contenido desplazable, sin overflow horizontal; controles operables de al menos 44 px de altura. Sin errores o warnings de consola en las comprobaciones.
- Logo: cuatro WebP locales de 44/54/88/108 px, entre 1.170 y 2.626 bytes. Se conserva el PNG maestro y se reutiliza la misma imagen en cabecera y diálogo.
- JavaScript de producción inline: **1.427 bytes**, 676 bytes comprimidos con gzip. CSS externo de base y componentes: **9.238 bytes**, 2.466 bytes gzip, sin contar los estilos inline de fuentes. Son tamaños del build local, no resultados de PageSpeed ni transferencia medida del hosting.
- Fallback `<noscript>` con navegación/contacto presente en el HTML; no se ejecutó una sesión de navegador con JavaScript desactivado. No hubo envíos de correo ni formularios reales.
- Al cerrar este bloque, `http://localhost:4321` contenía cabecera y contenido mínimo. El hero se implementó posteriormente, según la sección 12.

## 12. Primera versión del hero y revisión pendiente — 2026-09-06

Histórico de la primera animación de 800 ms, sustituida por la propuesta de la sección 13.

- Referencias leídas por MCP: hero EN `r6Twi`, móvil `TJkJC`, ES `iZkcW` y `WlYtv`, y storyboard `Ds17j`. Se conservaron la jerarquía, los colores, las capas inclinadas y la composición simplificada móvil; las proporciones de la ilustración usan unidades de su contenedor.
- `npm run build`: PASS tras el último ajuste de texto y eliminación de la ruta de QA. Astro check: 12 archivos, 0 errores, 0 warnings y 0 hints. Build final: solo `/` y su sitemap; sin código de instrumentación ni páginas de prueba.
- EN comprobado a 320, 360, 390, 600, 768, 900, 1023, 1024, 1200 y 1440 px sin overflow. ES comprobado a 320, 390, 768, 1024 y 1440 px mediante una ruta temporal retirada. Un H1 y un main, IDs únicos en la portada. Controles de escena de 44 px de altura en todos los anchos principales.
- Revisión visual EN en 390, 768, 1024 y 1440 px y ES en móvil/escritorio. El hero permanece en una columna por debajo de 1024 px. Los tamaños y saltos del titular ES se adaptan a su texto.
- Teclado: cambio de vista mediante Tab/Shift+Tab y Espacio, estado `aria-pressed` correcto y foco visible. Alternancias rápidas comprobadas. El menú móvil sigue abriendo/cerrando mediante Escape con devolución del foco.
- Instrumentación temporal en navegador registró 11 animaciones simultáneas de 800 ms en la entrada, ninguna activa al finalizar; no se repite al volver desde fuera de pantalla. Salir de pantalla durante la entrada deja cero animaciones activas.
- Preferencia de movimiento reducido **simulada mediante `matchMedia` en la ruta de QA**: cero llamadas a `animate()` en carga y alternancia; activar la preferencia durante una transición cancela el movimiento y presenta Interface. No es una prueba con la preferencia del sistema operativo ni una medición en dispositivos físicos. La respuesta a pestaña oculta está implementada, pero no se verificó mediante un cambio real de pestaña.
- Scripts bloqueados por CSP en una ruta temporal: H1, texto, correo y composición Interface visibles, sin controles inertes de la ilustración ni overflow. Esta prueba bloquea la ejecución; no equivale a desactivar JavaScript desde la configuración del navegador ni verifica el fallback `<noscript>` del Nav.
- El preview retenía una versión anterior del CSS. Se reinició mediante `astro dev stop` y `astro dev --background`; se verificó la regla actual y la separación del primer enunciado en escritorio. Servidor activo en `http://localhost:4321`, PID 13736 en esta revisión. Sin errores o warnings en consola de la portada.
- Artefacto de producción: hero JS **1.360 bytes**, 683 bytes gzip; cabecera JS 1.427 bytes, 676 bytes gzip. CSS externo total de base/cabecera/hero **18.503 bytes**, 4.261 bytes gzip, sin incluir los estilos inline de fuentes. HTML total 19.083 bytes, 4.324 bytes gzip. Sin dependencias ni imágenes nuevas para la escena. Son tamaños locales, no PageSpeed ni transferencia medida en el hosting.
- Contacto del hero: `mailto:info@leadweb.dev`. “Explore my work” conserva su diseño y `aria-disabled`, sin href, hasta implementar Selected work. No se enviaron mensajes ni formularios.
- Tras el problema de conexión, se confirmó que los cambios están guardados y el servidor sigue activo. El usuario considera insuficiente el efecto WOW y pide concentrarse en el hero. **Implementación técnica disponible; aprobación visual pendiente.** No avanzar a Stats ni a otras secciones en esta etapa.

## 13. Entrada escalonada, ambiente y puntero — 2026-09-06

- Autorización: el usuario acepta probar la propuesta de entrada y solicita mantener movimiento después, incluyendo un fondo sincronizado con el mouse. Sustituye la restricción previa de bucles para el ambiente; no autoriza avanzar a otras secciones ni publicar.
- Se conservan el layout, los titulares y CTA. La ilustración incorpora un esquema inicial, barrido de luz, apertura de capas, llegada individual de cuatro planos y revelado de contenido. La entrada dura **2.400 ms** en total; no retrasa el H1 ni el contacto. El cambio manual Interface/Structure usa 700 ms.
- Tras la entrada solo quedan dos animaciones ambientales: flotación de hasta 6 px/0,45° en 8 s e iluminación suave en ciclos alternos de 6,5 s. Se añadió pausa/reanudación y repetición, con etiquetas EN/ES. Los cuatro controles tienen altura mínima de 44 px; la tipografía de las opciones se ajusta entre 10–12 px para evitar partir “Estructura” en 320 px.
- La luz del fondo responde al puntero sobre el hero; la composición se inclina hasta 4° en X y 5° en Y. Solo se activa desde 768 px con hover y puntero preciso; ignora touch. El seguimiento se interpola con `requestAnimationFrame` y deja de solicitar frames al estabilizarse. Al salir o pausar, la luz y la inclinación vuelven a su base.
- Integración comprobada con instrumentación temporal: 20 animaciones finitas con retrasos distintos, máximo de 2.400 ms; al terminar, quedan únicamente las dos ambientales. La pausa preserva el tiempo de estas y de una entrada en curso. Repetir reinicia la secuencia sin acumular animaciones. Teclado: repetición con Espacio, cambio de vista y nombres accesibles correctos.
- Salir de pantalla pausa la entrada; volver permite continuarla. Visibilidad de pestaña **simulada mediante `document.hidden`/`visibilitychange`**: animaciones pausadas. No es una prueba de cambio real de pestaña ni de suspensión del sistema operativo.
- Movimiento reducido **simulado mediante `matchMedia`**: cero llamadas a `animate()` al cargar y cambiar vista. Activarlo durante la entrada elimina las animaciones y muestra Interface; pausa y repetición quedan deshabilitadas. No se cambió la preferencia real del sistema operativo.
- Puntero probado en escritorio en dos posiciones: transformaciones y desplazamiento de luz distintos y acotados; al pausar se elimina la inclinación. Móvil a 390 px mantiene la luz del puntero apagada y el contenedor sin transformación de puntero. No se probaron dispositivos táctiles físicos.
- EN y ES: 320, 390, 768, 1024 y 1440 px sin overflow. En la portada: un H1, un main, IDs únicos y cuatro controles de 44 px. Revisión visual de la entrada y estado final en escritorio y móvil. El menú móvil conserva apertura, Escape y devolución del foco.
- Ruta con scripts bloqueados por CSP: título, contacto y composición final disponibles; controles de escena ocultos y luz del puntero apagada. El test no desactiva JavaScript desde la configuración del navegador ni verifica el `<noscript>` del Nav.
- `npm run build`: PASS final, 12 archivos comprobados, cero errores/warnings/hints; solo `/` y sitemap. Las rutas `/motion-check/*` y su instrumentación fueron retiradas antes del build. Consola de la portada sin errores/warnings en las comprobaciones.
- Tamaños de producción: hero JS externo **6.195 bytes**, 2.274 bytes gzip; Nav inline 1.427 bytes, 676 bytes gzip. CSS externo total **20.788 bytes**, 4.726 bytes gzip, excluyendo estilos inline de fuentes. HTML 19.803 bytes, 4.165 bytes gzip. No se añadieron dependencias, imágenes ni videos. No son mediciones PageSpeed/CWV ni transferencia del hosting.
- Se retiró el token CSS sin uso `--motion-scene: 800ms`; los tiempos de las fases están definidos en el controlador. Servidor en background en `http://localhost:4321`, PID 9324 en esta revisión. Diseño `.pen` intacto, sin commits/push/publicación. **Propuesta disponible para prueba; valoración visual del usuario pendiente.**

## 14. Titular typewriter — 2026-09-06

- Petición del usuario: animar “Win trust.” con escritura, tres frases relacionadas que se repiten y cursor titilante. La implementación sigue limitada al hero.
- Frases en `hero.rotatingLines` de `src/content/copy.ts`: EN **“Win trust.” → “Get leads.” → “Sell more.”**; ES **“Inspira confianza.” → “Genera contactos.” → “Impulsa ventas.”**. Se eligió “Sell more.” para mantener una sola línea EN también a 320 px, preservando la escala tipográfica existente.
- `hero-typewriter.ts` usa un único temporizador: comienzo a 120 ms, escritura a 90 ms por carácter, pausa de lectura de 1.800 ms, borrado a 45 ms y separación entre frases de 300 ms. Cursor CSS de 1 s. Sin frameworks ni dependencias nuevas.
- HTML inicial con la primera frase completa. Las tres frases completas se superponen invisibles en CSS grid para reservar la altura necesaria; el texto animado ocupa la misma celda. El H1 accesible conserva el original completo, sin anunciar letras o borrados; las copias de reserva y la visual animada llevan `aria-hidden`. IDs semánticos estables, dos primeras líneas fijas y CTA disponible.
- Pausa/reanudación compartidas con la escena mediante `data-motion-paused` en el hero. Repetir emite `hero:replay` y reinicia también la escritura. La visibilidad se comprueba sobre la propia línea, permitiendo animarla en móvil aunque la escena esté debajo de pantalla. Fuera de pantalla o con pestaña oculta se cancela el temporizador y se conserva la posición. La pausa deja el cursor fijo; movimiento reducido restablece la primera frase y lo oculta.
- Integración verificada en navegador con instrumentación temporal: escritura, pausa de lectura, borrado, intervalo y vuelta a la primera frase; título accesible original constante. Pausa manual conservó texto y tiempo ambiental entre lecturas; repetir reinició por “Win trust.”. Al sacar el titular de pantalla se mantuvo el mismo fragmento y contador de cambios; al volver continuó.
- Preferencia de movimiento reducido **simulada con `matchMedia`**: primera frase estática, cursor invisible y ninguna animación activa; quitar la preferencia inicia el ciclo y reactivarla lo cancela. Visibilidad de pestaña **simulada con `document.hidden`/`visibilitychange`**: fragmento y contador estables durante la pausa, reanudación correcta. No se modificaron preferencias del sistema ni se ensayó un cambio real de pestaña.
- Scripts bloqueados por CSP en una ruta temporal: “Win trust.” visible, sin estado de animación ni cursor, controles de escena ocultos. No equivale a desactivar JavaScript desde la configuración del navegador ni verifica el `<noscript>` del Nav.
- EN/ES comprobados en **320, 390, 768, 1024 y 1440 px**, sin desbordamiento horizontal, con un H1, un main e IDs únicos. Las tres frases EN finales caben en una sola línea en todos esos anchos; ES conserva dos líneas para la frase animada en móvil y una desde tablet en los anchos comprobados. Revisión visual móvil/escritorio.
- Instrumentación de ciclos completos: EN a 320 px mantuvo H1 de 161,578 px y CTA a 479,953 px del documento durante más de cuatro ciclos; ES a 390 px mantuvo H1 de 218,125 px y CTA a 510,156 px durante dos ciclos. También se verificó estabilidad del ciclo inicial EN en 390/1440 px. Son comprobaciones locales de geometría durante la animación, no una medición global de CLS o PageSpeed.
- `npm run build`: PASS, 13 archivos comprobados, cero errores/warnings/hints y una sola página (`/`) en el build. Las rutas `/typing-check/*` y su instrumentación se retiraron antes del build final. Consola de `/` sin errores ni warnings.
- Artefactos finales: typewriter inline **1.428 bytes** (752 bytes gzip); escena externa **6.279 bytes** (2.314 gzip); Nav inline 1.427 bytes (676 gzip). CSS externo total **21.839 bytes** (4.936 gzip), sin incluir estilos inline de fuentes. HTML total **22.165 bytes** (4.918 gzip), incluidos los scripts inline. Son tamaños del build local; no se midió transferencia del hosting ni PageSpeed/CWV. Sin dependencias, imágenes ni videos nuevos.
- Al retomar se encontró el servidor detenido y se inició mediante `astro dev --background` en `http://localhost:4321`, PID 7044. Documentación vigente sincronizada. No se modificó Pencil ni se realizaron commits, push o publicación. **Typewriter implementado y verificado; revisión visual del hero con el usuario pendiente.**

## 15. Firma de marca y revisión del fondo — 2026-09-06

- Usuario: confirma que le gusta el typewriter, pregunta por los controles y solicita propuestas para los cortes de luz señalados en su captura. Autoriza intentar una nueva firma junto al logo; no pide implementar aún una solución concreta para el fondo.
- `NavBrand.astro`: nombre “Lead Web” a 12 px (`0.75rem`), peso 400, color paper y caja natural. Firma literal `</Dev_>` a 14 px (`0.875rem`), peso 600, separada 3 px y con degradado `#00ded3 → #00bddd → #2576ef`. Se reutiliza Instrument Sans ya cargada. El nombre define el ancho; la firma distribuye sus caracteres con flex y contención de tamaño inline. El enlace conserva el nombre accesible completo y localizado; firma decorativa oculta a tecnologías de asistencia. Fallback cian sólido y regla de colores forzados incluidos; colores forzados no ensayados con una preferencia real del sistema.
- Navegador en 320/390/768/1024/1440: nombre a 12 px, ancho del nombre/firma y distribución de caracteres de 57,609 px; diferencia entre centros verticales del logo y la firma inferior a 0,01 px. Sin overflow horizontal, imágenes cargadas e IDs únicos. Firma verificada visualmente en escritorio y dentro del menú móvil.
- `npm run build`: PASS, 13 archivos comprobados sin errores/warnings/hints; una página. Sin nuevos scripts, pesos tipográficos, dependencias ni imágenes. HTML final: 23.109 bytes (4.992 gzip); CSS externo: 22.274 bytes (5.061 gzip), excluyendo estilos inline de fuentes. Los tamaños de scripts de la sección 14 permanecen vigentes. No es una medición PageSpeed.
- El preview retenía el CSS anterior; se reinició con `astro dev stop` y `astro dev --background`. Estilos computados actuales confirmados. Servidor en `http://localhost:4321`, PID 14748 en esta revisión.
- Diagnóstico del fondo: tanto `.hero-atmosphere` como `.scene-art` usan `overflow: hidden`, cortando las luces al llegar a sus límites. Propuestas: máscara que atenúe los bordes; iluminación en una capa que ocupe el ancho del hero, independiente del contenedor del contenido y del dibujo; o menor radio/desplazamiento para que la luz termine antes del recorte. Recomendada capa amplia con desvanecido. Fondo y controles permanecen pendientes de decisión visual.
- Controles: conservar un mecanismo de pausa/detención para el movimiento automático continuo y las frases que se actualizan. Repetir y cambiar vista son opcionales; no es obligatorio mantener esta barra exacta. Referencia consultada: [WCAG 2.2, criterio 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). No se afirma conformidad completa del sitio por este control.

## 16. Luz circular, pausa única y partículas de neón — 2026-09-06

Registro histórico: los segmentos SVG de esta etapa se sustituyeron por luz difusa en la sección 17.

- El usuario aprobó la firma y autorizó fondo amplio/desvanecido y simplificación de controles. Durante el trabajo añadió el borde de neón más notorio en badge/“Let’s talk” y pidió que la luz fuera más circular. Se conserva el foco en el hero.
- `.hero` ahora ocupa todo el ancho disponible; `.hero-layout.container` conserva contenido y grid dentro del máximo de 1440 px. El halo se trasladó fuera de `.scene-art` a `.hero-atmosphere`, junto a la luz del puntero. Ambos gradientes son circulares: radios `min(34rem, 75vw)` y `min(30rem, 70vw)`. Una máscara independiente desvanece el inicio/final de la sección; las guías del dibujo también terminan suavemente. El dibujo conserva sus recortes internos.
- La barra se sustituyó por un único botón de 44 px de altura, con icono y texto “Pause motion”/“Resume motion” o “Pausar movimiento”/“Reanudar movimiento”. Controla escena, luz, titular y neón del header/badge. Se retiraron botones, lógica y textos de repetición/cambio de vista. El botón se oculta con movimiento reducido o scripts ausentes; su espacio mínimo permanece reservado.
- `NeonBorder.astro`: tres trazos SVG normalizados a un perímetro de 100 unidades forman estela, núcleo y partícula. Resplandor turquesa y cabeza clara; ciclos de 4,8 s en CTA superior y 6 s en badge. Se utilizan longitudes explícitas en px para interpolar continuamente `stroke-dashoffset`. `neon-border.ts` sincroniza visibilidad, pestaña oculta, preferencia de movimiento y pausa del hero. Sin un hero que proporcione pausa, los contornos permanecen estáticos. Las reglas responsive previas del CTA/badge se mantienen.
- Instrumentación temporal confirmó posiciones intermedias continuas en ambos contornos: CTA de −53,02 a −84,26 y badge de −24,61 a −49,60 en cuatro muestras consecutivas. Al pausar, texto, desplazamientos y tiempos de animación permanecieron constantes; reanudar reactiva el conjunto. El neón superior se pausa al salir del viewport y se reactiva al volver. También se comprobó reanudación mediante teclado.
- Preferencia de movimiento reducido simulada con `matchMedia`: titular completo estático, botón oculto, animaciones WAAPI canceladas y contornos pausados. La simulación no altera las media queries CSS del navegador; la regla CSS real que oculta la decoración con movimiento reducido/colores forzados fue revisada en código, sin cambiar preferencias del sistema. Visibilidad real de pestaña y dispositivos físicos no se ensayaron en esta etapa.
- Ruta temporal con scripts bloqueados por CSP: titular, escena y luz circular estáticos; botón oculto y contornos sin movimiento. No equivale a desactivar JavaScript en ajustes del navegador ni verifica el `<noscript>` del Nav.
- EN: 320/390/768/1024/1440/1920; ES: 320/390/768/1024/1440. Sin overflow horizontal y botón de 44 px. EN mantiene un H1 y un main. A 1920 px el contenido se limita a 1440 px mientras el fondo ocupa el ancho disponible (excluida la barra de scroll). Revisión visual en escritorio y móvil; puntero activa desplazamiento/luz y la pausa lo restablece.
- Build final: **PASS**, 15 archivos comprobados sin errores/warnings/hints, una página (`/`). Rutas `/effect-check/*` e instrumentación retiradas antes del build. Escena JS: 5.473 bytes (2.061 gzip); neón inline: 630 bytes (372 gzip); Nav inline: 1.427 bytes (676 gzip); typewriter inline: 1.380 bytes (735 gzip). CSS externo: 21.949 bytes (5.200 gzip); HTML: 23.650 bytes (5.113 gzip). Son tamaños de artefactos, no mediciones PageSpeed/CWV. Sin nuevas dependencias, fuentes o imágenes.

## 17. Brillo difuso, cursor de firma y degradado de marca — 2026-09-06

- El usuario rechazó los segmentos de neón porque parecían un “gusanito”. Aportó `C:\Users\user\Videos\Icecream Screen Recorder\efecto brillo.mp4`: video de 18,37 s y 940×452 px del chat de Pencil. Se inspeccionaron fotogramas distribuidos por la grabación: borde fino, zonas de iluminación difusa y transiciones suaves de color. La referencia se adaptó a la paleta del logo. El video y los fotogramas no forman parte de los recursos del sitio.
- `NeonBorder.astro` reemplaza los tres trazos SVG por un contorno CSS de 1 px y un halo separado desenfocado a 6 px. Dos zonas luminosas turquesa/cian/azul se desvanecen a transparente. Un gradiente cónico gira mediante `--neon-angle`, registrado como `<angle>` con `@property`; ciclos lineales de 7 s en CTA superior y 8 s en badge. La máscara deja libre el interior y el desenfoque del halo ocurre en su contenedor para extenderse por fuera del borde.
- El guion bajo de `</Dev_>` lleva `data-brand-cursor`: solo ese carácter alterna `visibility` en ciclos de 1,1 s (55 % visible), reservando su espacio. La firma y el nombre mantienen 57,609 px de ancho, fuentes de 14/12 px y la alineación aprobada. El guion queda visible al pausar o reducir movimiento; firma accesible sin anuncios repetidos. Se aplica también al menú móvil.
- `neon-border.ts` observa brillos y cursores mediante el mismo IntersectionObserver y la pausa del hero. `NeonBorder` carga el módulo una sola vez; `NavBrand` reutiliza el controlador presente en el Nav. No se añadieron temporizadores, bucles RAF, frameworks ni solicitudes adicionales de scripts al build. Un uso aislado de la firma sin ese controlador conserva el guion estático.
- Los tokens de marca centralizan turquesa `#00ded3`, cian `#00bddd` y azul `#2576ef`. `--gradient-brand` conserva el degradado de 135° aprobado en la firma y lo extiende al texto visible del typewriter. El H1 accesible, las tres frases, los tiempos de escritura y la reserva de altura permanecen iguales. La iluminación circular del fondo conserva sus radios y comportamiento.
- Instrumentación temporal de navegador confirmó valores intermedios continuos: CTA 281,16 → 340,29° y badge 246,01 → 297,75° en seis muestras separadas 230 ms. Cursor alterna visible/oculto sin modificar el ancho de la firma. Se congeló una fase oculta para verificar visualmente que desaparecía el guion y se conservaba su espacio.
- Pausa manual: ambos ángulos y el texto permanecieron constantes en seis muestras; el guion quedó visible. Reanudar con Espacio reactivó movimiento y parpadeo. Menú móvil: firma visible y cursor activo dentro del diálogo; cierre con Escape comprobado. Las decoraciones no visibles en móvil permanecen sin movimiento.
- Movimiento reducido simulado mediante `matchMedia`: brillos detenidos, guion visible y primera frase completa estática. Esta simulación no cambia las media queries CSS reales; las reglas de movimiento reducido/colores forzados fueron revisadas en código. No se alteraron preferencias del sistema ni se repitieron pruebas de pestaña oculta o scripts bloqueados de etapas anteriores.
- EN/ES en 320, 390, 768, 1024 y 1440 px: sin overflow horizontal; firma de ancho constante. EN con un H1 y un main. Revisión visual de móvil/escritorio y menú móvil; frase ES completa revisada en móvil. Consola sin errores/warnings en las comprobaciones.
- El servidor conservaba CSS antiguo de la firma; se reinició mediante `astro dev stop` y `astro dev --background` y se confirmó el parpadeo real. Preview en `http://localhost:4321`, PID 18796 en esta revisión.
- Build final: **PASS**, 15 archivos comprobados, cero errores/warnings/hints, una sola página `/`. Rutas `/glow-check/*` y su instrumentación eliminadas antes del build. Controlador de brillos/cursor inline: **651 bytes** (382 gzip); escena externa: 5.473 bytes (2.061 gzip); Nav inline: 1.427 bytes (676 gzip); typewriter inline: 1.380 bytes (735 gzip). CSS externo: **23.128 bytes** (5.441 gzip); HTML: **23.493 bytes** (5.090 gzip). Son tamaños locales, no mediciones PageSpeed/CWV. Sin nuevas dependencias, fuentes o imágenes del sitio.
- README, plan y handoffs sincronizados. Nueva valoración visual del usuario pendiente; mantener el trabajo dentro de header/hero. Pencil, otras secciones, commits, push y publicación fuera del alcance de esta etapa.

## 18. Hover, separador de idioma y typewriter 700 — 2026-09-06

- El usuario valoró muy positivamente la etapa anterior y pidió tres cambios acotados: hover turquesa en menú/idioma alternativo, separador vertical con espacios iguales y frases animadas en peso **700**. La petición explícita de 700 sustituyó la prueba inicial de 600.
- `NavLinks.astro` y `LanguageSwitcher.astro`: hover `#53e3de`, transición de color de 180 ms. Incluye los elementos de la muestra cuyos destinos todavía no existen; siguen sin href y con `aria-disabled`. El idioma actual sigue siendo un span con `aria-current`, sin regla hover.
- Separador `|` decorativo. Gap de 8 px en cabecera y 16 px en la variante con nombres completos del menú móvil. El texto del enlace alternativo se alinea al inicio para que su área mínima de 44 px no introduzca espacio desigual junto al separador.
- `Hero.astro`: la línea animada y sus frases de reserva heredan peso 700; las dos primeras líneas permanecen en 500. Se añadió Instrument Sans 700 local en `astro.config.mjs`. EN mantiene todos los tamaños y alturas medidos antes del cambio. En ES, “Genera contactos.” medía 674,91 px para una columna de 672 px a 1440; solo desde 1024 px se aplica `font-size: 0.98em` a la línea animada. Conserva una línea en escritorio y los saltos anteriores en móvil/tablet; no se cambian textos, tiempos, degradado ni otros efectos.
- Navegador EN/ES en 320/390/768/1024/1200/1440: peso 700 confirmado y sin overflow. Comparación con la base: altura reservada y posición del CTA EN idénticas en los cinco anchos principales. ES conserva su altura móvil/tablet; el ajuste mínimo evita la segunda línea en escritorio. Revisión visual en móvil y escritorio.
- Hover real mediante el puntero comprobado en Work, Expertise, About y ES: color turquesa; al volver sobre EN, el actual permanece paper y el alternativo vuelve al color normal. Separación visual medida: 8/8 px en cabecera, 16/16 px en menú móvil; área alternativa de 44 px. Apertura del menú y cierre con Escape comprobados.
- Build final: **PASS**, 15 archivos, cero errores/warnings/hints y una sola página `/`. Ruta temporal `/type-weight-check/` retirada. Una sola precarga de fuente; WOFF2 de peso 700 con `font-display: swap` y subconjuntos latin/latin-ext. Sin JavaScript ni dependencias nuevas. HTML: 24.833 bytes (5.186 gzip); CSS externo: 23.282 bytes (5.466 gzip). Son tamaños del build local, no mediciones PageSpeed/CWV.
- Servidor en background en `http://localhost:4321`, PID 15664 en esta revisión. Documentación sincronizada. Alcance limitado a header/hero; sin modificaciones de Pencil, commits, push ni publicación.

## 19. Favicon, separación de marca y primer checkpoint — 2026-09-06

- Usuario: solicita usar el mismo logo como favicon, acercar ligeramente la firma al símbolo y hacer commit/push. Acuerda continuar después. Esta petición autoriza guardar el estado actual completo del proyecto en el remoto configurado; no autoriza desplegar el sitio ni construir nuevas secciones.
- `public/favicon.png`: 96×96, 5.610 bytes. `public/favicon.ico`: tres entradas PNG de 16/32/48 px, 3.897 bytes. Derivados mediante Sharp del `src/assets/logo.png` de 400×400; se recortó solo el margen transparente y se dejó una pequeña separación exterior. Colores, proporción y transparencia del símbolo conservados. Layout con enlaces explícitos a ambos; SVG del starter retirado.
- `NavBrand.astro`: gap móvil/tablet de 6 a **4 px**, gap de escritorio de 14 a **8 px**. Firma, tipografía, cursor y degradado conservados. Comprobados 320/390/768/1024/1440: sin overflow, firma de 57,609 px y diferencia de centros verticales inferior a 0,01 px. Revisión visual de cabecera en escritorio.
- Ambos iconos responden HTTP 200 en el preview con MIME correcto. PNG decodificado a 96×96 con alpha; ICO con tres entradas y tipo válido. Build final: **PASS**, 15 archivos, cero errores/warnings/hints y solo `/`; sin nuevas dependencias ni JavaScript.
- Primer guardado: rama local existente `master`, remoto `origin` en `https://github.com/ramon-zerpa/leadweb-dev.git`, sin commits remotos antes de este checkpoint. Alcance: implementación, configuración, documentación, recursos y diseño/exportaciones. `node_modules`, `dist` y `.astro` permanecen ignorados. El historial de Git contiene el identificador del commit.
- Servidor en background en `http://localhost:4321`, PID 11060 en esta revisión. Siguiente sesión: retomar con el usuario desde este header/hero; las demás secciones y el despliegue al hosting siguen pendientes.

## 20. Escena única ampliada y eyebrow de ingeniería — 2026-09-06

- Usuario: confirma que no le interesaba la segunda vista “Structure” y pide retirar “01 / Structure → Experience”, aumentar un poco el conjunto gráfico y actualizar/acercar el eyebrow. No solicita restaurar controles, cambiar la escena interna ni publicar.
- `HeroScene.astro`: eliminado el elemento visible `scene-label`, su CSS y los strings EN/ES de `copy.ts`. Las capas geométricas se conservan como profundidad y parte de la entrada, pero la portada presenta una sola composición final. El máximo de `.hero-scene` pasa de **37,25rem / 596 px** a **39,25rem / 628 px**. Desde 1024 px, el grid cambia de 672/596 a 640/628, dando alrededor de 5,4 % más ancho a la escena sin usar `transform: scale()` ni recortes nuevos.
- `copy.ts`: eyebrow EN exacto `WEBSITES ENGINEERED FOR FLORIDA BUSINESSES`. El eyebrow móvil pasa de 26 a 32ch, de modo que conserva dos líneas a 320/390 px; `margin-block-end: -0.25rem` reduce en 4 px la distancia hacia el H1. El texto ES de su futura ruta se conserva sin traducir/adaptar de forma automática.
- Navegador: 320/390/768/1024/1440 sin overflow, un H1 y etiqueta retirada del DOM. Escena: 272 px a 320, 327 px a 390, 628 px a 768/1440 y 446,6 px a 1024; móvil conserva dos líneas de eyebrow y 18 px hasta el H1. Revisión visual del final en 1024/1440 y del eyebrow en 390.
- `npm run build`: **PASS**, 15 archivos, cero errores/warnings/hints y una sola ruta `/`. No se añadieron dependencias, solicitudes, scripts o medios. Preview en `http://localhost:4321`, servidor PID 11060 en esta revisión. Documentación sincronizada. Este ajuste queda local hasta recibir una nueva autorización de commit/push.

## 21. Franja de experiencia / Stats — 2026-09-06

- Usuario: después de valorar positivamente el hero, pide desarrollar el siguiente bloque. Se toma `Experience strip` como siguiente bloque del recorrido definido en Pencil y en el plan.
- Fuente visual inspeccionada exclusivamente mediante MCP de Pencil: `p2aFV6` en `WRA6V` y `XaxPp` en `lUMvX`. Escritorio: borde superior/inferior de 1 px, padding 25/64 px y tres pares valor/etiqueta. Móvil: padding de 24 px y solo 13+ y VE / FL en vertical. El archivo `.pen` no se modificó.
- `Stats.astro`: sección con id, `aria-labelledby`, H2 para tecnologías de asistencia y `data-ui-id` estable. La lista de definiciones conserva una única fuente de copy. Valores en Instrument Sans; paper para los datos y muted para etiquetas. No usa JS, imágenes ni nuevas dependencias.
- Copy ajustado por solicitud posterior: el primer dato usa “Years building code” en escritorio y “Years of experience” en móvil. El dato central se presenta como “Since 2015” / “U.S. collaboration”, en vez de afirmar que Lead Web se fundó en ese año. El identificador usa “VE / FL”, sin flecha; su etiqueta queda en “Experienced. Connected.” y “Collaboration” en móvil, sin “Remote”. La variante ES mantiene las equivalencias naturales “Desde 2015”, “colaboración con EE. UU.”, “Años de experiencia” y “Colaboración”.
- Responsive: desde 1024 px conserva la fila horizontal del desktop; entre 768 y 1023 px muestra los tres pares como columnas verticales; bajo 768 px oculta el dato editorial central y usa etiquetas abreviadas, como la composición móvil Pencil. Los umbrales siguen el criterio aprobado 390/768/1024/1440 y no alteran hero/cabecera.
- Verificación: `npm run build` **PASS** con 16 archivos, cero errores/warnings/hints y una ruta `/`. Navegador local: H1 y H2 en orden, una sección `lead-web-experience`, lista de definiciones y los tres datos presentes en escritorio. La franja no añade recursos de red ni código de cliente. Cambios locales; sin commit/push ni publicación.

## 22. Trabajo seleccionado / DISOCA — 2026-09-06

- Usuario: tras aprobar la franja de experiencia, solicita el siguiente bloque. Se toma Selected work / DISOCA, inmediatamente después de la franja en el recorrido de Pencil; se conserva el alcance de una sección por vez.
- Fuente visual inspeccionada exclusivamente mediante MCP de Pencil: `rXUQC` dentro de `WRA6V` para escritorio y `lxDdj` dentro de `lUMvX` para móvil. Se tomaron como referencia la superficie paper, el encabezado editorial, el navegador enmarcado, las dos columnas de escritorio y la pila móvil. El archivo `.pen` no se modificó.
- `Work.astro`: sección con id, `aria-labelledby`, H2 y `data-ui-id` estable. El proyecto es un `article` con H3, imagen con alt, lista semántica de tecnologías y enlace externo. La nota inferior usa un `aside`; el orden de encabezados de la portada queda H1 del hero, H2 de Stats, H2 de Work y H3 de DISOCA.
- La previsualización utiliza `Picture` sobre `src/assets/disoca-preview.png`, con anchos 310/538/698, formatos AVIF/WebP, `loading="lazy"` y `decoding="async"`. Astro genera las variantes al construir; no se solicita una captura desde `disoca.com` y no se añadió JavaScript ni dependencias.
- `index.astro` define `#built-for-purpose-made-to-be-noticed`, pasa ese destino a `Nav` y `Hero`, y renderiza Work debajo de Stats. Work y “Explore my work” ya son enlaces funcionales hacia el bloque. Expertise se activó en la etapa siguiente; en ese momento About y el idioma alternativo permanecían correctamente deshabilitados. El enlace “Explore the project” abre `https://disoca.com/` con `target="_blank"` y `rel="noopener noreferrer nofollow"`.
- Copy revisado por el usuario: la nota final deja de presentar DISOCA como un proyecto personal. EN: “A tailored digital presence for a construction company operating across Latin America.” ES: “Una presencia digital a medida para una constructora con operaciones en América Latina.” El rótulo pasa a “Selected project” / “Proyecto seleccionado”.
- Responsive: base móvil con la previsualización, contenido y nota apilados; desde 768 px se reorganiza encabezado/nota y desde 1024 px proyecto pasa a dos columnas. La composición de escritorio se comprobó visualmente en el navegador local después de la carga diferida de la imagen; la jerarquía, los destinos de ancla, el alt y el enlace externo se confirmaron con el árbol de accesibilidad.
- Verificación final: `npm run build` **PASS** con 17 archivos, cero errores, warnings y hints; una ruta `/`. El build emitió variantes AVIF/WebP de la previsualización y el servidor devolvió las solicitudes de imagen con HTTP 200. `git diff --check` no informó errores de whitespace. Servidor en background: `http://localhost:4321`, PID 11060. Cambios locales; sin commit/push ni publicación.

## 23. Expertise / Servicios — 2026-09-06

- Usuario: solicita el bloque siguiente después de actualizar la nota de DISOCA. Se implementa Expertise, que sucede a Selected work en el recorrido de Pencil, manteniendo una sección por etapa.
- Fuente visual inspeccionada exclusivamente mediante MCP de Pencil: `fRzH5` dentro de `WRA6V` para escritorio y `xlhDV` dentro de `lUMvX` para móvil. Se tomaron como referencia la superficie `#112629`, el label turquesa, el titular de tres líneas, el copy de apoyo y las cuatro filas de servicios. El archivo `.pen` no se modificó.
- `Expertise.astro`: sección con id, `aria-labelledby`, H2 y `data-ui-id` estable. La lista de servicios tiene una etiqueta propia y cada oferta un H3; los números y flechas son decorativos y no introducen anuncios duplicados. Copy EN/ES y el label de lista se centralizan en `copy.ts`. No añade JavaScript, recursos de red ni dependencias.
- Composición: base móvil de 56/24 px, introducción seguida de lista y filas separadas por líneas de 1 px. Desde 1024 px usa dos columnas; la introducción mantiene de 320 a 380 px para preservar “A business tool.” en una sola línea, mientras la lista ocupa el espacio restante. Los títulos de servicio pasan de 24 a 28 px de forma gradual, siguiendo las referencias de Pencil.
- `index.astro` renderiza Expertise debajo de Work y registra `#more-than-a-website-a-business-tool` en `sectionLinks`. El enlace Expertise del header ya navega al bloque; en esa etapa About y el idioma alternativo permanecían deshabilitados hasta contar con destino real.
- Verificación: revisión visual de escritorio en el navegador local, con composición completa, sin cortes y proporciones corregidas para que el titular conserve sus tres líneas. El árbol de accesibilidad confirma H1 del hero, H2 de Stats/Work/Expertise y H3 de DISOCA y los cuatro servicios; Work y Expertise del header tienen sus anclas correctas. `npm run build` **PASS** con 18 archivos, cero errores, warnings y hints; una ruta `/`. `git diff --check` no informó errores de whitespace. Cambios locales; sin commit/push ni publicación.

## 24. Navegación interna sin hash — 2026-09-07

- Usuario: solicita scroll suave al navegar por las secciones y que la URL no agregue un hash. Autoriza también commit y push de todos los cambios pendientes al terminar la verificación.
- `src/scripts/smooth-scroll.ts`: detecta enlaces con destino interno, cancela su comportamiento nativo, hace `scrollIntoView()` suave y deja la URL intacta. Los clics modificados o no primarios se preservan; `prefers-reduced-motion` usa desplazamiento inmediato. La sección recibe foco temporal con `preventScroll` para conservar una navegación de teclado comprensible.
- `Nav.astro`: el menú móvil reutiliza el mismo helper, previene el hash antes de cerrar el diálogo y ejecuta la misma transición. Work, Expertise y “Explore my work” quedan cubiertos sin scripts separados en cada componente. Los `href` siguen presentes como fallback sin JavaScript.
- Verificación: desde teclado se activó Work desde la cabecera. La vista se desplazó a Selected work y `http://localhost:4321/` permaneció sin hash. `npm run build` **PASS** con 19 archivos, cero errores, warnings y hints; `git diff --check` no informó errores de whitespace. Este checkpoint está autorizado para commit y push; despliegue sigue fuera de alcance.
- Checkpoint: `97e5cdf feat: add homepage sections and smooth navigation` se envió a `origin/master`. Tras el push, el árbol quedó limpio y `master...origin/master` registró `0 0`. No se desplegó el sitio.

## 25. Founder / Ramón Zerpa — 2026-09-07

- Usuario: al retomar, solicita construir el siguiente bloque. Se toma Founder, inmediatamente después de Expertise en el recorrido de Pencil, y se conserva el alcance de una sección por etapa.
- Fuente visual inspeccionada exclusivamente mediante MCP de Pencil: `pth2H` dentro de `WRA6V` para escritorio y `WM6UC` dentro de `lUMvX` para móvil. Se usaron como referencia el fondo paper, el retrato aprobado, el caption, la biografía, la información profesional y el enlace. El archivo `.pen` no se modificó.
- `Founder.astro`: sección con id, `aria-labelledby`, H2, `figure`/`figcaption`, copy centralizado y enlace seguro a LinkedIn. `Picture` genera variantes AVIF/WebP de `src/assets/portrait.png` con `loading="lazy"` y `decoding="async"`; no se añadieron scripts, solicitudes remotas ni dependencias.
- Composición: desde 1024 px usa las dos columnas de la referencia, con retrato de hasta 424 px, biografía de hasta 724 px y separación de hasta 100 px. En 768 px y menos se apila; a 390 px el titular pasa a 34 px para conservar “Experience is human.”, “Possibility is” y “expanding.” en tres líneas. No hubo desbordamiento horizontal visible.
- Navegación: `index.astro` entrega `#the-person-behind-the-pixels` a About. La misma utilidad de scroll suave cubre escritorio y menú móvil: este último cierra el diálogo, desplaza la sección, da foco temporal y conserva la URL sin hash.
- Verificación: `npm run build` **PASS** con 20 archivos, cero errores, warnings y hints; `git diff --check` no informó errores de whitespace. CUA confirmó la composición y la navegación real en 1440, 1024, 768 y 390 px; About terminó en Founder y `http://localhost:4322/` permaneció sin hash. El servidor de esta app se inició en segundo plano en `http://localhost:4322` porque el puerto 4321 estaba ocupado por otro proyecto. Cambios locales; sin commit/push ni publicación autorizados para esta etapa.

## 26. Retrato dinámico / Founder — 2026-09-07

- Usuario: aprueba la propuesta de hacer el retrato más impactante, con entrada editorial, luz de marca amplia, barrido diagonal al entrar, foco asociado al puntero y movimiento ambiental discreto. Pide que sea un lenguaje propio, distinto del hero.
- `Founder.astro`: se añadió una capa de halo turquesa–azul detrás de la foto, un barrido diagonal sobre el retrato y una luz radial interna. La sección usa `overflow: clip` para contener los halos y evitar desbordamiento horizontal en viewport estrecho.
- `founder-portrait.ts`: usa `IntersectionObserver` al 20 % para activar una única entrada de 900–1.300 ms; el halo comienza después y se pausa fuera de pantalla o con la pestaña oculta. Solo un puntero fino actualiza las variables CSS de la luz interna mediante `requestAnimationFrame`; touch no activa el efecto. La preferencia de movimiento reducido omite la animación y conserva la imagen completa.
- Verificación: `npm run build` **PASS** con 21 archivos y cero errores, warnings y hints; `git diff --check` no informó errores de whitespace. Tras reiniciar el servidor en segundo plano, sus logs y la consola del navegador quedaron sin errores. CUA confirmó la entrada, halo y foco del puntero en 1440 px y revisó la composición sin desbordamiento en 1024, 768 y 390 px; About sigue llevando a Founder sin agregar hash. El servidor actual permanece en `http://localhost:4322/` (PID de inicio 4392). Cambios locales; todavía no hay commit/push ni publicación autorizados para esta etapa.

## 27. Marco de cristal / Founder — 2026-09-07

- Usuario: toma como referencia la sensación del avatar de inicio de sesión de Windows Live Messenger y autoriza aplicarla. El objetivo es aumentar el efecto WOW del retrato usando el neón ya aprobado, sin copiar el verde ni la interfaz retro.
- `Founder.astro`: el retrato se trasladó dentro de `.founder__portrait-frame`, con 10 px de marco, gradientes prismáticos, borde interior claro y dos capas de reflejos. La imagen conserva `Picture`, sus variantes optimizadas y su recorte; el marco exterior mantiene 424 × 492 px desde 1024 y la escala proporcional existente debajo.
- `NeonBorder` se instancia dentro del marco con radio de `0.875rem` y ciclo de 9 s. Reutiliza el contorno de 1 px/halo difuso turquesa-cian-azul del hero, se pausa al salir de pantalla, al ocultar la pestaña, con movimiento reducido y con la pausa global del hero. El puntero preciso ahora intensifica la profundidad luminosa del marco además de la luz radial interna.
- Verificación: `npm run build` **PASS** con 21 archivos, cero errores, warnings y hints. CUA confirmó el marco, `data-orbit-running="true"`, foco de puntero, URL sin hash y ausencia de overflow en 1440, 1024, 768 y 390 px. Sin commit/push, despliegue ni dependencia nueva autorizados.

## 28. Process / Clear by design — 2026-09-07

- Usuario: tras dejar Founder tal como está, autoriza continuar con el siguiente bloque, manteniendo una sola sección por etapa.
- Fuente visual inspeccionada exclusivamente mediante MCP de Pencil: `zJRVO` dentro de `WRA6V` para escritorio y `IfhHN` dentro de `lUMvX` para móvil. Se tomaron como referencia la superficie paper, label, titular y tres pasos. El archivo `.pen` no se modificó.
- `Process.astro`: sección con id, `aria-labelledby`, H2 y lista ordenada de tres elementos. Cada paso usa H3, explicación y número decorativo; todo el copy EN/ES continúa centralizado en `copy.ts`. No se añadieron imágenes, JavaScript ni dependencias.
- Composición: desde 1024 px el encabezado dispone label a la izquierda y titular a la derecha, seguido de tres columnas con línea superior de 1 px `#CDD5CE`. En 768 y 390 px se apila de forma natural, con los pasos en el orden de trabajo y sin desbordamiento horizontal.
- Verificación: `npm run build` **PASS** con 22 archivos, cero errores, warnings y hints; `git diff --check` no informó errores de whitespace antes de la sincronización documental. CUA comprobó la composición completa en 1440 y 1024 px, la pila en 768 y 390 px y la consola sin errores. El servidor actual permanece en `http://localhost:4322/`. Cambios locales; sin commit/push ni publicación autorizados para esta etapa.

## 29. Refinamiento limpio de Founder y título Process — 2026-09-07

- Usuario: pide que “No black box.” quede en una sola línea por lo menos en escritorio y solicita probar el retrato sin vidrio ni brillo excesivo sobre la imagen, conservando solamente el borde neón del hero.
- `Process.astro`: desde 1024 px el encabezado usa una columna de ancho intrínseco para el H2 y `white-space: nowrap`; “A clear process. No black box.” queda en una única línea en 1024 y 1440 px. Las reglas de móvil/tablet se mantienen para no forzar el ancho en pantallas estrechas.
- `Founder.astro`: se retiraron la capa de vidrio, el marco prismático, reflejos, sombra ambiental, barrido, foco de puntero y `founder-portrait.ts`. La foto conserva `Picture`, recorte, proporciones y caption; `NeonBorder` se aplica directamente alrededor de la imagen con radio de `0.75rem` y ciclo de 8 s.
- Verificación: `npm run build` **PASS** con 21 archivos, cero errores, warnings y hints. CUA confirmó el retrato limpio y el título de Process en una línea a 1440 y 1024 px, y revisó la pila/ausencia de overflow a 768 y 390 px. Cambios locales; sin commit/push ni publicación autorizados.

## 30. Proporción, neón y elevación de Founder — 2026-09-07

- Usuario: pide hacer el retrato menos alargado, reforzar el neón y probar un hover que haga parecer que la foto se levanta de la superficie con una sombra hacia abajo.
- `Founder.astro`: `.founder__portrait-frame` pasa de 424 × 492 px a la relación `1 / 1.08` (424 × 458 px en escritorio y 342 × 370 px en móvil). La imagen conserva `object-fit: cover` y su recorte centrado, sin deformación.
- El borde de `NeonBorder` se extiende 2 px y su halo aumenta de 6 a 8 px, con brillo y saturación algo mayores. No se altera la paleta, el ciclo de 8 s ni las salvaguardas de visibilidad.
- Hover: solo con `(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)`, la foto usa una transición de 320 ms, `translateY(-8px) scale(1.012)` y cuatro capas de sombra/neón hacia abajo. Touch y movimiento reducido no activan el efecto.
- Verificación: `npm run build` **PASS** con 21 archivos, cero errores, warnings y hints. CUA confirmó proporción, neón y hover real a 1440 px; 1024, 768 y 390 px conservaron `scrollWidth === clientWidth`, sin desbordamiento horizontal. Cambios locales; sin commit/push ni publicación autorizados.

## 31. Aire de Founder y Contact — 2026-09-07

- Usuario: aprueba la proporción/hover del retrato, solicita un poco más de aire entre foto y nombre/ciudad y autoriza desarrollar el siguiente bloque.
- `Founder.astro`: el `gap` entre `.founder__portrait-frame` y su `figcaption` pasa de 1 a 1,25 rem. No modifica el recorte, el borde, la interacción ni la composición de móvil.
- Fuente visual inspeccionada exclusivamente mediante MCP de Pencil: `y2H57q` dentro de `WRA6V` para escritorio, `a897h` dentro de `lUMvX` para móvil y `z8NPQ` para estados de formulario. El `.pen` no se modificó.
- `Contact.astro`: sección con id, H2, dirección semántica con correo y WhatsApp, y formulario con labels asociados. Nombre, email y mensaje son requeridos; teléfono y servicio son opcionales. El HTML conserva `action` al Formspree existente y la mejora de cliente envía `FormData`, recibe JSON, previene envíos duplicados, conserva valores ante fallo y expone estado de éxito/error mediante `aria-live`.
- `index.astro`: registra `#lets-build-something-that-matters` y entrega el destino a Nav y Hero. “Let’s talk” y el CTA principal ya llegan a Contact mediante el helper suave sin hash.
- Responsive: columna editorial y formulario desde 1024 px con proporción Pencil 510/692; pila desde 768 px. Los servicios son tres columnas en la pila y recuperan su ancho intrínseco en escritorio. No hay nuevas dependencias ni se altera el archivo de copy.
- Verificación: `npm run build` **PASS** con 22 archivos, cero errores, warnings y hints; `git diff --check` sin errores. CUA confirmó Contact a 1440, 1024, 768 y 390 px con `scrollWidth === clientWidth`, sin errores de consola. El CTA de header terminó en la sección enfocada, con URL sin hash. No se hizo una solicitud real a Formspree ni se confirmó recepción. Cambios locales; sin commit/push ni publicación autorizados.

## 32. Servicio alineado y CTA fijo de WhatsApp — 2026-09-07

- Usuario: detecta que “What do you have in mind?” no compartía la alineación de los otros campos y solicita una acción fija de WhatsApp que se sienta propia del sitio, con borde de neón y sin verde.
- `Contact.astro`: la causa fue el padding implícito de 12 px del `fieldset`. Se restablece a cero y el `legend` separa 10 px de las opciones; el label, los radios y los campos de texto comparten ahora el mismo borde izquierdo y ritmo vertical.
- `StickyWhatsApp.astro`: incorpora el enlace ya autorizado `https://wa.me/584247067872` con icono SVG propio, superficie ink, degradado turquesa–cian–azul y `NeonBorder` de 6 s. En móvil llena los gutters; desde 768 px queda abajo a la derecha. Al entrar Contact al 15 %, se desvanece, recibe `inert` y `aria-hidden`; no abre ni envía nada hasta que una persona active el enlace.
- Verificación: `npm run build` **PASS** con 23 archivos y cero errores, warnings o hints; `git diff --check` sin errores antes de la sincronización documental. CUA comprobó 1440, 1024, 768 y 390 px sin overflow, el gradiente de marca del icono y la acción, y consola sin errores. A 390 px, input, `legend` y opciones comienzan en 24 px y ambos gaps etiqueta/control miden 10 px. No se activó el enlace externo de WhatsApp ni se hizo envío Formspree. Cambios locales; sin commit/push ni publicación autorizados.

## 33. Caption, redes y CTA persistente — 2026-09-07

- Usuario: solicita `margin-top: 1rem` y `padding: 0 2% 0 2%` para `.founder__caption` en todos los breakpoints; pide que WhatsApp se mantenga visible en el último bloque y propone LinkedIn/Instagram después de las alternativas de Contact.
- `Founder.astro`: el caption recibe exactamente esos valores en su regla base, sin media queries que los sustituyan. La comprobación calculada devuelve 16 px de margen superior y padding lateral proporcional: 8,47 px a 1440 y 6,53 px a 390.
- `Contact.astro`: reutiliza la URL LinkedIn confirmada de Founder y añade `https://www.instagram.com/leadweb.dev/` como segundo enlace. Los dos controles siguen correo/WhatsApp, están dentro de un `nav` con nombre accesible y abren con `target="_blank"` y `rel="me noopener noreferrer"`.
- `StickyWhatsApp.astro`: se retira la observación de Contact, el estado `inert`/`aria-hidden` y el ocultamiento. La acción declara `pointer-events: auto` y conserva su presencia en todas las secciones, incluido Contact.
- Verificación: `npm run build` **PASS** con 23 archivos, cero errores, warnings o hints. CUA comprobó 1440, 1024, 768 y 390 px con `scrollWidth === clientWidth`, dos enlaces sociales, CTA visible/activo y consola sin errores. No se abrieron los enlaces externos ni se hizo envío Formspree. Cambios locales; sin commit/push ni publicación autorizados.

## 34. CTA desde la franja y barra inferior — 2026-09-07

- Usuario: pide un disco oscuro con borde e icono turquesa para WhatsApp, una barra inferior con copyright y una frase de programación, espacio móvil para que el CTA no la cubra, visibilidad del CTA solo después del hero y menor distancia entre las redes y las alternativas de Contact.
- `StickyWhatsApp.astro`: el disco pasa de la superficie degradada a `#0b1e21`, con borde, icono y halo turquesa. Usa `data-sticky-start` con `#lead-web-experience` por defecto; un script pasivo alterna `data-sticky-ready` y `aria-hidden` al cruzar esa sección. El CTA está oculto en el hero y disponible desde Stats hasta el final de la página, sin perder interacción en Contact.
- `BottomBar.astro`: nuevo `<footer>` en el slot de `BaseLayout`; `copy.ts` aporta el copyright y la frase EN `// Turning coffee into clean code and ideas into momentum.`. La grilla alinea copyright a la izquierda y frase a la derecha desde 768 px; por debajo se apila. Su padding inferior de 6,25 rem más el área segura evita el solapamiento del CTA fijo.
- `Contact.astro`: `.contact__socials` usa `margin-block-start: -0.5rem`, por lo que el gap efectivo tras `.contact__alternatives` pasa de 1,5 a 1 rem sin alterar la composición del formulario.
- Verificación: `npm run build` **PASS** con 24 archivos y cero errores, warnings o hints; `git diff --check` pendiente de la sincronización documental final. CUA comprobó 1440, 1024, 768 y 390 px sin overflow. Tras 600 ms en el hero, el CTA devuelve `opacity: 0`, `visibility: hidden` y `aria-hidden="true"`; al cruzar Stats devuelve `opacity: 1`. A 390 px, el texto final termina a 743,72 px y el CTA empieza a 758 px, sin solapamiento; en escritorio también quedan separados. La consola no registró errores. No se abrieron WhatsApp, LinkedIn o Instagram ni se hizo envío Formspree. Cambios locales; sin commit/push ni publicación autorizados.

## 35. Semántica de Process y refinamiento del cierre — 2026-09-07

- Usuario: solicita aire entre el eyebrow de Process y la línea previa en móvil/tablet, cuestiona el uso de `header` dentro de esa sección, pide más separación antes de la ubicación de Contact, un icono de WhatsApp blanco/nítido y una nueva frase final.
- `Process.astro`: sustituye el elemento `header` por `.process__intro` en un `div` neutro. El H2 y el `ol` de tres pasos sostienen la jerarquía semántica. La sección recibe `padding-block-start: clamp(2rem, 5vw, 2.5rem)` por debajo de 1024 px; el escritorio conserva sus 12 px aprobados.
- `Contact.astro`: `.contact__socials` conserva el ajuste de −0,5 rem hacia las alternativas y añade 0,5 rem al final, elevando la distancia hasta `contact__location` a 32 px en móvil/tablet y 38 px en escritorio.
- `StickyWhatsApp.astro`: reemplaza el dibujo lineal por una marca sólida de WhatsApp propia, blanca y de 26 px; el disco ink se compacta a 48 px y usa un anillo blanco. El borde orbital de marca se conserva fuera de ese disco.
- `BottomBar.astro` y `copy.ts`: el texto EN pasa a “With love from VE to USA.” y el ES a “Con cariño desde VE hasta EE. UU.”; se retira el prefijo visual `//` para respetar literalmente la frase solicitada.
- Verificación: se reinició el servidor Astro en background para purgar CSS anterior; queda activo en `http://localhost:4322` (PID 17576). `npm run build` **PASS** con 24 archivos y cero diagnósticos. CUA confirmó a 390/768/1024/1440 px `scrollWidth === clientWidth`; Process expone un `DIV`, cero `header` anidados, un H2 y un `ol`. El aire superior mide 32 px a 390 y 38,4 px a 768; escritorio se mantiene en 12 px. El icono/anillo computados son blancos y miden 26/48 px. El CTA y los textos de BottomBar no se solapan a 390 px. No se abrieron enlaces externos ni se envió Formspree.

## 36. Retorno del icono turquesa y checkpoint autorizado — 2026-09-07

- Usuario: prefiere que el icono y el anillo interior del CTA de WhatsApp vuelvan a turquesa y autoriza commit y push de todo el trabajo pendiente.
- `StickyWhatsApp.astro`: conserva la marca sólida nítida de 26 px y el disco ink de 48 px; `color`, borde y halo interno vuelven a `--color-brand-turquoise`. El borde orbital exterior se mantiene sin cambios.
- Verificación previa al checkpoint: `npm run build` **PASS** con 24 archivos y cero errores, warnings o hints; `git diff --check` sin errores. CUA confirmó a 390 px icono y anillo `rgb(0, 222, 211)`, disco de 48 px y marca sólida de 26 px, CTA visible desde Stats y ausencia de overflow. No se abrieron enlaces externos ni se hizo envío Formspree. El commit/push y la divergencia se completan en la secuencia autorizada por el usuario.

## 37. Portada ES, sombra fija y auditoría semántica — 2026-09-08

- Usuario: solicita dejar fija la sombra de Founder, retirar el resto de efectos de hover, terminar la nota bajo el formulario en la consulta, implementar la versión española funcional, auditar errores semánticos/técnicos graves y crear un nuevo checkpoint remoto. No autoriza desplegar hosting ni crear páginas adicionales de privacidad.
- `Founder.astro`: el `box-shadow` aprobado pasa a la regla base. Se eliminan el `translate`, `scale`, transición específica e intensificación del halo al hover; el borde neón de 8 s permanece.
- `copy.ts` y `Contact.astro`: la nota EN termina exactamente en “Your details are used to respond to your inquiry.” y la ES en “Tus datos se usan para responder a tu consulta.” No hay enlace ni ruta de privacidad nueva. `Work.astro` obtiene además el nombre accesible de sus tecnologías desde el copy localizado.
- `src/pages/es/index.astro`: compone la portada española completa con IDs derivados de títulos ES, anclas de Nav/hero, CTA fijo y barra inferior. Ambas páginas declaran sus `alternates`, canonical propio y entradas recíprocas de sitemap; el selector alterna `/` y `/es/`.
- `StickyWhatsApp.astro`: el contenedor usa un nombre accesible y queda `inert` mientras el CSS lo oculta durante hero; el script retira `inert` al alcanzar Stats. Así el enlace no puede recibir foco cuando no se muestra.
- Verificación final: `npm run build` **PASS** con 25 archivos, cero errores, warnings o hints; genera `/` y `/es/`. Auditoría del HTML emitido EN/ES: un solo `main` y H1, jerarquía de headings sin saltos, IDs únicos, secciones etiquetadas, labels de formulario válidos, imágenes con `alt`, anclas internas existentes, `noopener` en enlaces externos, sin foco dentro de `aria-hidden`, sin enlace de privacidad y CTA inicial `inert`. CUA verificó `/es/` a 1440/1024/768/390 px sin overflow; Proyectos conserva `/es/` sin hash y foco de destino; el CTA pasa de oculto/inert a visible/activo desde Stats; ES→EN navega a `/`; consola sin errores. No se abrieron enlaces externos ni se envió Formspree.
- Checkpoint: commit y push a `origin/master` autorizados; despliegue de hosting continúa fuera de alcance.

## 38. Testimonios bilingües como sección Reviews — 2026-09-08

- Usuario: entrega seis testimonios aprobados, originalmente en español, y solicita incorporarlos también en inglés. Pide mantener las tarjetas alineadas y aprueba un slider de tres columnas con dos grupos en escritorio. En el refinamiento siguiente solicita separar Reviews de Process, enlazarla al menú, usar el criterio 05 y pasar Contact a 06.
- `Testimonials.astro`: sección semántica independiente inmediatamente posterior a Process. Usa H2 propio, `aria-labelledby`, artículos, `blockquote` y pie de atribución; presenta 5/5, nombre y ubicación apilados a la izquierda, con dominio a la derecha. Las citas permanecen completas; el alto mínimo baja a 21 rem para eliminar espacio vacío y preservar alineación dentro de cada grupo.
- `testimonials-carousel.ts`: mejora progresiva sin dependencias. Muestra 3 tarjetas desde 1024 px, 2 desde 768 px y 1 por debajo; calcula 2/3/6 grupos, añade flechas, indicadores, swipe, estado `aria-live` e `inert` en tarjetas fuera de vista. Sin JavaScript quedan las seis tarjetas en una cuadrícula responsive. No usa autoplay.
- Contenido: los originales ES quedan centralizados en `copy.ts`; la concordancia “su atención… hicieron” se corrige y se crea una traducción EN fiel. Los nombres, ubicaciones y dominios aprobados se conservan, incluido “Raymond” en la cita de Manuel.
- Navegación y composición: `Nav.astro` incorpora “Reviews” / “Reseñas”, reutiliza el scroll suave sin hash y conserva el foco del destino. El H2 queda a la izquierda bajo `05 / CLIENT STORIES`; Contact adopta `06 / LET’S BUILD SOMETHING THAT MATTERS`. Los controles de anterior/siguiente recuperan el extremo derecho del pie.
- Verificación: `npm run build` **PASS** con 27 archivos y cero errores, warnings o hints. Navegador confirmó la jerarquía de secciones, H2, enlace Reviews sin hash, 3 tarjetas a 1440/1024, segundo grupo y ausencia de overflow. La comprobación previa de 3/2/1, ambos idiomas, consola y axe focal sigue vigente para el carrusel. Cambios locales; sin commit, push ni despliegue solicitados.

## 39. Iconos de Process, ritmo de Reviews y retrato nítido — 2026-09-08

- Usuario: solicita sustituir los números de Process por iconos, más aire entre el H2 de Reviews y sus tarjetas, eliminar la línea gris entre Process y Reviews, compactar esa transición y volver cuadrada la foto sin perder nitidez.
- `Process.astro`: el `ol` y sus H3 se conservan; los números visuales se reemplazan por SVG decorativos grandes de exploración, código y verificación, sin círculos de fondo. No se añade una librería ni texto redundante para tecnologías asistivas.
- `Testimonials.astro`: reduce el final de Process y el comienzo de Reviews para acortar la transición; elimina `border-block-start` y `padding-block-start` del contenedor de Reviews. El `gap` interior pasa a 2,5 rem, creando aire directo entre H2 y tarjetas sin reincorporar el espacio exterior excesivo.
- `Founder.astro`: confirma que el original local es 1024 × 1024. La composición pasa a `aspect-ratio: 1` en todos los breakpoints y `Picture` ofrece 342, 424, 636, 848 y 1024 px en AVIF/WebP, con un `sizes` válido de 424 px desde 768 px. Así el navegador puede pedir un recurso adecuado para una pantalla de densidad 2×/3× sin servir el PNG maestro por defecto.
- Verificación: `npm run build` **PASS** con 27 archivos y cero errores, warnings o hints; `git diff --check` no reporta errores de whitespace. La salida EN expone tres `.process__icon`, cero `.process__number`, candidatos de retrato 848/1024 px y Reviews sin el divisor. Los mismos componentes y copy se renderizan en `/es/`. Cambios locales; sin commit, push ni despliegue solicitados.

## 40. SEO técnico, semántica y rendimiento local — 2026-09-08

- `BaseLayout.astro` incorpora meta robots, Twitter y un gráfico JSON-LD localizado por página: `OnlineBusiness` para Lead Web Developers, `Person` para Ramón Zerpa, `WebSite` y `WebPage`. El logo se genera desde el asset local con `getImage`, y el marcado solo expresa correo, enlaces, fundador, servicios y zona de servicio visibles o confirmados. Se omiten `LocalBusiness`, `Review` y `AggregateRating`: Lead Web no declara una dirección física de Florida y las valoraciones del propio sitio no se presentan como resultados enriquecidos.
- `public/robots.txt` permite el rastreo y declara el sitemap de producción. Canonicales, alternates `en-US`/`es-US`/`x-default`, Open Graph y el sitemap i18n ya existían para `/` y `/es/`; se completan títulos/descripciones localizados y la tarjeta Twitter de resumen.
- Correcciones técnicas: `Testimonials.astro` usa artículos y pies semánticos; los landmarks de Nav obtienen nombres únicos; `Stats`, `Expertise`, `Process` y Work retiran roles o nombres ARIA no permitidos; `HeroScene` deja `figcaption` al final de su `figure`; el contraste de la credencial de Founder sube a AA. `NeonBorder` y la escena reemplazan estilos inline por variantes CSS, dejando el HTML emitido válido.
- Verificación: `npm run build` **PASS** con 27 archivos, cero errores, warnings o hints. `html-validate` estricto pasa sobre `dist/index.html` y `dist/es/index.html`; `git diff --check` no informa errores. La auditoría estática de ambas salidas confirma un `main` y H1, IDs/destinos internos, imágenes con `alt`, controles con nombre visible y enlaces externos seguros. El preview responde HTTP 200 para EN, ES y `robots.txt`.
- Rendimiento: el HTML EN emitido mide 66.994 bytes (13.815 gzip / 11.392 Brotli); la hoja CSS principal 55.484 bytes (10.159 gzip / 8.997 Brotli); `HeroScene` pesa 5.473 bytes (2.060 gzip / 1.831 Brotli). El Lighthouse local no se considera representativo: una extensión `adblock360` inyectó solicitudes, JavaScript y errores ajenos al build, alterando el tamaño transferido y sus métricas. La medición final debe hacerse una vez publicado en `https://leadweb.dev/`, con CDN, cache-control, compresión, TLS y TTFB reales. No se desplegó, no se hizo commit/push y no se envió Formspree.
