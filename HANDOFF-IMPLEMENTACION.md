# Lead Web: hand-off de implementación

Fecha: 2026-09-06.
Estado: header/hero valorados muy positivamente por el usuario. Entrada de 2,4 s, iluminación circular amplia/desvanecida, respuesta al puntero, brillos difusos, typewriter 700 con degradado y firma con cursor. Un único botón pausa el conjunto. Favicon de marca añadido y firma acercada al símbolo. Primer commit y push autorizados el 2026-09-06; punto de pausa para retomar después. Sin Remotion ni despliegue al hosting; demás secciones e integraciones pendientes.

Este documento complementa `PLAN-LEADWEB.md` (plan maestro) y `DESIGN-HANDOFF.md` (dirección visual v1), y permite a otro agente continuar la construcción sin depender del historial del chat.

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
- `src/content/copy.ts` escrito: única fuente de verdad para todos los textos EN/ES (nav, hero, stats, work, expertise, founder, process, contact, footer, privacy, notFound). Exporta `Locale = "en" | "es"` y `Copy`.
- Assets en `src/assets/`: `logo.png` (49 KB, transparente), `portrait.png` (1,9 MB), `disoca-preview.png` (545 KB), `disoca-photo.webp` (143 KB).
- `src/layouts/BaseLayout.astro`: idioma, metadatos por página, canonical del dominio configurado, Open Graph, soporte de alternates EN/ES y `x-default`, `noindex` opcional, fuentes locales con una sola precarga, skip link traducido y único `<main>` enfocable. Slots `header`, contenido, `footer` y `head`.
- `src/styles/global.css`: tokens visuales aprobados, escala de espaciado, tipografía fluida, contenedor, superficies clara/oscura, foco visible y reducción de movimiento. Sin JavaScript de cliente añadido.
- `src/pages/index.astro` compone el layout, Nav y Hero EN. La portada completa sigue pendiente.
- `src/components/Nav.astro`: cabecera de 80 px por debajo de 1024 px y de 96 px a partir de ese ancho. Menú modal móvil con cierre mediante botón/Escape, foco circular, retorno de foco y desbloqueo de scroll al cerrar o cambiar a escritorio. Integrada en el slot `header` de `/`.
- Componentes reutilizables `NavBrand.astro`, `NavLinks.astro` y `LanguageSwitcher.astro`. Logo maestro conservado y servido mediante variantes WebP de Astro; etiquetas accesibles EN/ES añadidas a `copy.ts`.
- `NavBrand.astro`: “Lead Web” a `0.75rem`/400 y `</Dev_>` a `0.875rem`/600 con degradado turquesa–azul, mismo ancho y centro vertical con el logo. `brandSignature` en `copy.ts`; firma reutilizada en el menú móvil. El guion bajo parpadea con CSS y usa el controlador compartido de los brillos para pausa/visibilidad; sin fuentes ni dependencias adicionales.
- Destinos del Nav configurables con `sectionLinks`, `contactHref`, `homeHref` y `alternateHref`. En la muestra actual, Work/Expertise/About y el idioma alternativo tienen `aria-disabled` y carecen de href; el contacto usa `mailto:info@leadweb.dev`. Activar cada destino cuando exista su sección o página, sin enlaces ficticios.
- `Hero.astro` y `HeroScene.astro`: composición EN/ES, tipografía adaptada por idioma, última línea del titular animada, texto/CTA disponibles desde HTML y escena geométrica con CSS. Dos columnas desde 1024 px; escena simplificada debajo del texto en móvil. El componente ES fue comprobado en una ruta temporal, no equivale a tener `/es/` implementada.
- `src/scripts/hero-scene.ts`: entrada de 2,4 s, flotación y luz ambiental situada en el hero completo. Puntero preciso desde 768 px, pausa/reanudación compartida y suspensión fuera de pantalla/pestaña oculta. Se retiraron selección de vista y repetición; el estado final existe sin scripts. Movimiento reducido conserva la composición estática y oculta el botón de pausa.
- `hero.body` en `copy.ts` contiene `intro`, `detail` y `ending`; la frase final solo se muestra desde 768 px como en Pencil. También contiene los textos de estructura y etiquetas accesibles de los controles en EN/ES.
- `src/scripts/hero-typewriter.ts`: tres frases EN/ES con escritura/borrado y cursor. Pausa manual mediante `data-motion-paused`, suspensión independiente al salir el titular de pantalla o al ocultar la pestaña y primera frase estática con movimiento reducido. H1 accesible original y espacio reservado para impedir saltos. Se retiró el evento de repetición.
- `NeonBorder.astro` y `neon-border.ts`: contorno CSS de 1 px y halo difuso; dos reflejos turquesa/azul recorren CTA superior y badge en 7/8 s. Sustituye los antiguos segmentos SVG. El controlador, cargado por `NeonBorder`, también sincroniza el guion bajo de `NavBrand`; pausa compartida, visibilidad por elemento y movimiento reducido. No se anima el CTA comercial del cuerpo.
- Tokens `--color-brand-turquoise`, `--color-brand-cyan`, `--color-brand-blue` y `--gradient-brand` en `global.css`; degradado compartido por firma y texto visual del typewriter, colores reutilizados en los brillos. Fallback sólido y colores forzados incluidos.
- Menú e idioma alternativo con hover turquesa sólido; idioma actual conserva su color. Separador vertical con separación visual igual a ambos lados. Typewriter en peso 700; EN conserva tamaño y ES reduce únicamente la línea animada un 2 % desde 1024 px. Detalles en sección 18.
- Favicon de marca derivado de `src/assets/logo.png`: PNG 96×96 e ICO 16/32/48, declarados en el layout. Firma a 4 px del logo en móvil/tablet y 8 px desde 1024 px. Detalles en sección 19.
- Plan, entrega visual y README sincronizados con el estado actual y la ubicación vigente de Pencil. `AGENTS.md` y `CLAUDE.md` mantienen sus instrucciones válidas.

### Pendiente
- Revisar con el usuario la nueva entrada, el ambiente, la respuesta al puntero y el titular typewriter antes de pasar a otras secciones. Autorizó probar esta solución nativa; no asumir aprobación visual final ni adopción de Remotion.
- El usuario aprobó la firma y valoró muy positivamente el brillo difuso, el cursor y la extensión del degradado de la sección 17. Después pidió hover sencillo, barra vertical de idioma y peso 700 en el typewriter, implementados en la sección 18. Permanecer en header/hero hasta acordar la siguiente etapa.
- Faltan las demás secciones y composición completa de `/`; páginas `/es/`, `/privacy/`, `/es/privacidad/` y 404; Formspree, imagen social y SEO final por página.
- Activar `alternates` del layout cuando existan las dos páginas equivalentes. La muestra actual no genera enlaces a `/es/` porque esa página todavía no existe.
- QA funcional y visual de cada nuevo bloque; PageSpeed y verificación del sitio completo al finalizar. La base ya pasa build y comprobación de tipos.
- Optimizar imágenes: `portrait.png` y `disoca-preview.png` deben generar variantes ligeras (WebP/AVIF, `pipelineSharpImage`/`astro:assets`).

### Bloqueos
- Ninguno técnico para continuar. La aprobación de diseño ya consta en `DESIGN-HANDOFF.md`.
- Commit y push de este primer checkpoint autorizados el 2026-09-06. El despliegue en hosting permanece sin autorización.

## 3. Decisiones de arquitectura ya fijadas

| Tema | Decisión |
| --- | --- |
| Rutas | `/` (EN), `/es/` (ES), `/privacy/` (EN), `/es/privacidad/` (ES), 404. Caso Disoca NO es página interna: enlace externo a `https://disoca.com/` con `target="_blank"` y `rel="noopener noreferrer nofollow"`. |
| Idiomas | Default `en` sin prefijo. Cambio de idioma enlaza a la página equivalente (alternates + switcher), nunca siempre a la portada. |
| Contenido vs páginas | Textos EN/ES escritos en `copy.ts`; requieren revisión editorial final y todavía no son páginas completas. |
| Fuentes | Locales vía `fontProviders.fontsource()`; variables `--font-sans`, `--font-mono`. |
| Casos | Sin `/work/<slug>/` por ahora. Solo el enlace externo de Disoca. |
| Layout | Las páginas pasan `locale`, metadatos específicos y contenido. El layout contiene el único `<main>`; cabecera y footer se incorporan en slots externos al main. |
| Hreflang | `alternates` recibe un par explícito de rutas equivalentes ya existentes. Produce ambos idiomas y `x-default` EN; no se publica en páginas con `noindex`. |

## 4. Datos clave (autorizados en `PLAN-LEADWEB.md`)

- Correo: `info@leadweb.dev`
- WhatsApp: `+584247067872` → `https://wa.me/584247067872`
- LinkedIn: `https://www.linkedin.com/in/raymond-zerpa`
- Instagram: `https://www.instagram.com/leadweb.dev`
- Formspree: destino existente `https://formspree.io/f/xeoyljzz`. Campos: nombre (`name`), `email`, `phone` (opcional), `service`, `message`. Antes de definir `name="..."` revisar automatizaciones actuales para no romper compatibilidad; la etiqueta visible se traduce sin cambiar la clave.
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

1. **Permanecer en el hero** por instrucción del usuario. Valorar la nueva propuesta de 2,4 s, el ambiente, el efecto del puntero y las tres frases del typewriter. Ajustar su intensidad/composición según la revisión visual. Remotion no se ha instalado ni integrado. Volver a verificar responsive, movimiento reducido y coste al modificarla.
2. **Demás secciones**, una o pocas por bloque acordado: `Stats`, `Work`, `Expertise`, `Founder`, `Process`, `Contact`, `Footer`. Optimizar imágenes y activar los destinos del Nav al existir cada sección.
3. **Páginas completas e integraciones**: composición EN/ES, privacidad, 404, Formspree, metadatos específicos, alternates, robots y migración. Comprobar compatibilidad del formulario antes de envíos reales.
4. **Verificar cada bloque** con tipos/build y navegador. Servidor en background: `npm run dev -- --background`; gestionar con `npm run astro -- dev status`, `logs` y `stop`.

## 8. Archivos relevantes

- `astro.config.mjs` — i18n, sitemap y fuentes; redirecciones antiguas pendientes para Apache.
- `src/content/copy.ts` — TODOS los textos por localidad; la implementación debe leer de aquí, no duplicar strings.
- `src/assets/{logo.png, portrait.png, disoca-preview.png, disoca-photo.webp}` — recursos; optimizar tamaños.
- `src/layouts/BaseLayout.astro` y `src/styles/global.css` — base compartida verificada.
- `src/components/{Nav,NavBrand,NavLinks,LanguageSwitcher}.astro` — cabecera y piezas reutilizables. Un solo Nav por página; IDs estables `site-header` y `site-menu`.
- `src/components/{Hero,HeroScene}.astro` y `src/scripts/{hero-scene,hero-typewriter}.ts` — hero, escena y titular animado. Destinos configurables `contactHref`/`workHref`; contacto por correo y trabajo sin href mientras su sección no exista.
- `src/components/NeonBorder.astro` y `src/scripts/neon-border.ts` — luz difusa del borde y controlador compartido con los cursores de marca.
- `src/pages/index.astro` — cabecera y hero EN; incorporar las siguientes secciones solo después de cerrar la revisión actual.
- `public/` — favicon de marca en `favicon.png` y `favicon.ico`; iconos del starter sustituidos.
- `DESIGN-HANDOFF.md`, `PLAN-LEADWEB.md` — referencia de diseño y plan/autorizaciones.
- `tsconfig.json` — extiende `astro/tsconfigs/strict`.

## 9. Límites de autorización

- Primer commit y push a GitHub autorizados para el checkpoint actual el 2026-09-06. Cualquier despliegue a Namecheap requiere autorización aparte.
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
