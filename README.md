# Lead Web Developers

Sitio de Ramón Zerpa para negocios de Florida, con base real en Mérida, Venezuela. Astro estático, TypeScript estricto y CSS nativo a partir del diseño Pencil aprobado.

## Estado actual

Implementación por bloques pequeños. Ya existen configuración, recursos, textos EN/ES, layout, estilos base, cabecera responsive, hero, franja de experiencia, trabajo seleccionado, Expertise, Founder con retrato de borde neón, Process, Reviews, Contact, un CTA fijo de WhatsApp y una barra inferior. La portada completa está compuesta y operativa en `/` (EN) y `/es/` (ES).

Actualización vigente: el pie de Founder conserva `margin-top: 1rem` y `padding: 0 2% 0 2%` en todos los anchos. La sombra del retrato queda permanente; ya no hay elevación, escala ni intensificación al hover. Contact añade LinkedIn e Instagram después de correo/WhatsApp como enlaces secundarios, los acerca 0,5 rem y abre 0,5 rem extra antes de la ubicación. Process utiliza un contenedor neutro para su introducción y deja 2–2,5 rem de aire superior en móvil/tablet. Reviews es una sección semántica independiente justo después de Process: usa el criterio de numeración 05, un H2 y seis testimonios aprobados en un carrusel progresivo de 3 tarjetas desde 1024 px, 2 desde 768 px y 1 en móvil. Las tarjetas reducen su alto al contenido; la atribución agrupa nombre y ubicación a la izquierda, con el sitio a la derecha, y los controles quedan a la derecha del pie. El CTA fijo se oculta durante el hero, aparece al alcanzar la franja `Stats` y se mantiene disponible hasta el final, incluido Contact. Su icono sólido y su anillo recuperan el turquesa de marca sobre un disco ink más compacto. `BottomBar.astro` coloca el copyright a la izquierda y “With love from VE to USA.” a la derecha desde 768 px; en móvil se apila y reserva espacio suficiente para que el CTA no cubra el contenido.

Ajuste visual más reciente: Process mantiene la lista ordenada, pero sustituye sus números visibles por tres iconos decorativos de exploración, código y verificación, grandes y sin contenedor circular. Se reduce la transición vertical entre Process y Reviews por ambos lados; Reviews elimina la línea separadora y abre 2,5 rem entre su H2 y el carrusel. Founder usa la proporción cuadrada exacta del original en desktop, tablet y móvil. `Picture` genera candidatos AVIF/WebP de 342, 424, 636, 848 y 1024 px para que una pantalla de alta densidad no escale una miniatura de 424 px.

El usuario valoró muy positivamente la firma, el brillo y el typewriter, y autorizó avanzar por bloques. La entrada de 2,4 segundos conserva estructura, ensamblaje e interfaz. La iluminación ocupa el ancho completo del hero, con luces circulares y desvanecido suave. Los bordes de “Let’s talk” y “Human-led. AI-powered.” usan luz difusa inspirada en el video de Pencil aportado por el usuario. El degradado de marca se extiende al typewriter y el guion bajo de la firma parpadea. La escena es una sola composición final, sin etiqueta “Structure → Experience”, y ganó un poco de escala. El eyebrow EN dice “WEBSITES ENGINEERED FOR FLORIDA BUSINESSES” y está más cerca del H1. Un único botón pausa/reanuda el conjunto. Debajo, `Stats.astro` traduce la franja “Experience strip”, `Work.astro` construye el bloque Selected work para DISOCA, `Expertise.astro` presenta los cuatro servicios, `Founder.astro` aporta la sección de presentación profesional de Ramón, `Process.astro` describe el recorrido de trabajo, `Testimonials.astro` aporta Reviews como sección hermana y `Contact.astro` reúne alternativas directas y formulario. El retrato de Founder permanece limpio, se acerca a una proporción cuadrada, mantiene su borde difuso turquesa/cian/azul y proyecta una sombra permanente sin comportamiento hover. Process equilibra esa composición con tres pasos sobrios sobre la superficie paper, H2 y lista ordenada, con un `div` neutro en la introducción y aire superior adicional solo en móvil/tablet. Reviews conserva seis citas completas, H2, `aria-labelledby`, su enlace de navegación “Reviews” / “Reseñas” y controles manuales a la derecha; Contact pasa a la numeración 06 y conserva etiquetas visibles, validación nativa, estado accesible de envío/éxito/error y el destino Formspree documentado, sin haber efectuado un envío real ni confirmado recepción. `StickyWhatsApp.astro` ofrece una vía directa adicional con el borde orbital de marca y un icono sólido/anillo turquesa sobre ink, sin verde de WhatsApp; se revela al llegar a Stats y sigue interactivo en Contact. `BottomBar.astro` cierra la página con copyright y la frase “With love from VE to USA.”, dejando un área inferior segura para esa acción fija. Work, Expertise, About, Reviews y “Let’s talk” del header, junto a “Explore my work” y el CTA principal del hero, llevan a sus secciones con scroll suave y sin agregar un hash a la URL. El selector de idioma enlaza las portadas completas equivalentes. El favicon usa el logo original y la firma está más cerca del símbolo. Privacidad, 404, imagen social y verificación operativa de Formspree quedan fuera del alcance actual. Sin Remotion ni publicación en el hosting.

## Documentación

- [PLAN-LEADWEB.md](./PLAN-LEADWEB.md): objetivos, alcance, presupuestos y registro histórico.
- [DESIGN-HANDOFF.md](./DESIGN-HANDOFF.md): diseño v1 aprobado y dirección visual.
- [HANDOFF-IMPLEMENTACION.md](./HANDOFF-IMPLEMENTACION.md): estado técnico vigente, verificaciones y siguiente bloque.
- [AGENTS.md](./AGENTS.md) y [CLAUDE.md](./CLAUDE.md): instrucciones de desarrollo.

Diseño editable: `design-preview/pencil-design-new-leadweb.pen`. Consultarlo exclusivamente mediante MCP de Pencil; no leer ni editar su contenido por filesystem.

## SEO, semántica y rendimiento

Las dos portadas ya emiten título y descripción localizados, canonical propio, alternates `en-US`/`es-US`/`x-default`, etiquetas Open Graph y Twitter, `robots` indexable, `robots.txt` y sitemap i18n. `BaseLayout.astro` genera JSON-LD localizado de `OnlineBusiness`, `Person`, `WebSite` y `WebPage`, limitado a datos visibles y confirmados. No se usan `LocalBusiness`, `Review` ni `AggregateRating`: no existe una dirección física de Florida y las valoraciones propias no deben declararse como rich results.

La compilación del 2026-09-08 pasó `astro check` con 0 errores, 0 warnings y 0 hints; el HTML emitido de `/` y `/es/` pasó validación estricta. La auditoría estática confirma un único H1 y `main` por página, IDs y destinos internos válidos, imágenes con texto alternativo y enlaces externos seguros. El Lighthouse local quedó contaminado por una extensión del equipo que inyecta tráfico y JavaScript ajenos; no se registra esa puntuación como métrica del sitio. La medición definitiva debe hacerse sobre el despliegue HTTPS con CDN, compresión y caché reales. Tras publicar, PSI produjo 99 móvil y 100 escritorio; `public/.htaccess` extiende a un año la caché de los recursos de Astro con hash, sin asignar caché larga a HTML, sitemaps ni `robots.txt`.

## Desarrollo local

Node compatible: `>=22.12.0`; entorno usado en esta etapa: Node `24.14.1`, npm `11.18.0`. Dependencias mediante `package-lock.json`.

```sh
npm ci
npm run dev -- --background
```

El servidor comunica la URL y el puerto asignados. Para gestionarlo:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

| Comando | Función |
| --- | --- |
| `npm run check` | Comprobación de Astro y TypeScript |
| `npm run build` | Ejecuta `astro check` y genera `dist/` |
| `npm run preview` | Sirve el build local |

## Organización

```text
src/
  assets/                  Recursos maestros locales
  components/              Nav y piezas compartidas; Hero, Stats, Work, Expertise, Founder, Process, Testimonials, Contact, StickyWhatsApp y BottomBar
  content/copy.ts           Textos y rutas de idioma EN/ES
  layouts/BaseLayout.astro  HTML, metadatos, fuentes y estructura accesible
  styles/global.css        Tokens y estilos compartidos
  scripts/hero-scene.ts     Entrada, ambiente pausable y respuesta al puntero
  scripts/hero-typewriter.ts Escritura y borrado de las tres frases del titular
  scripts/neon-border.ts    Visibilidad y pausa compartida de los contornos luminosos
  scripts/smooth-scroll.ts  Navegación interna suave sin alterar la URL
  scripts/testimonials-carousel.ts Carrusel progresivo, responsive y accesible
  pages/index.astro         Portada EN
  pages/es/index.astro      Portada ES equivalente
design-preview/            Diseño Pencil y exportaciones
design-assets/             Copias de retrato y logo del diseño
```

El layout recibe `locale`, admite metadatos por página y contiene el único `<main>`. Sus slots `header`, contenido por defecto, `footer` y `head` permiten incorporar componentes progresivamente. `alternates` recibe un par EN/ES de páginas equivalentes solo cuando ambas existen. Las páginas no indexables pueden usar `noindex` y `canonicalPath={false}`.

Consumir textos desde `copy.ts`. Los patrones `.container`, `.section`, `.stack`, `.eyebrow` y `.lede` están disponibles; los estilos específicos se añaden junto a cada componente con identificadores semánticos.

El Nav recibe destinos mediante `sectionLinks`, `contactHref`, `homeHref` y `alternateHref`. Work enlaza al bloque Selected work, Expertise a la sección de servicios, About a Founder, Reviews a Testimonials y “Let’s talk” a Contact. El idioma alternativo enlaza a la portada equivalente (`/` ↔ `/es/`); los destinos internos conservan su `href` como fallback y el script evita agregar el hash cuando JavaScript está disponible.

`smooth-scroll.ts` intercepta enlaces internos con hash cuando JavaScript está disponible: desplaza la sección con movimiento suave, conserva la URL sin hash y transfiere foco programático a la sección. Respeta `prefers-reduced-motion`; los `href` permanecen como fallback sin scripts.

El menú y el idioma alternativo cambian a turquesa sólido con hover; el idioma actual conserva su color. El selector utiliza una barra vertical `|` con espacios visuales iguales: 8 px por lado en cabecera y 16 px en el menú móvil; el enlace alternativo mantiene su área de 44 px.

La firma del Nav aprobada por el usuario conserva el símbolo y usa dos líneas a su derecha: “Lead Web” a `0.75rem`/400 y `</Dev_>` a `0.875rem`/600 con degradado turquesa–azul. Las dos líneas comparten ancho y el conjunto se centra verticalmente con el logo, también en el menú móvil. Solo el guion bajo parpadea, en ciclos de 1,1 s, sin cambiar su espacio. La pausa y el movimiento reducido lo dejan visible y estático. Se reutilizan las fuentes locales existentes.

Separación entre la caja del logo y la firma: 4 px en móvil/tablet y 8 px desde 1024 px. `public/favicon.png` (96×96) y `public/favicon.ico` (16/32/48) se derivan del mismo `src/assets/logo.png`, conservando colores y transparencia; se recortó únicamente el margen transparente para mejorar su lectura a tamaños pequeños. El layout declara ambos iconos; se retiró el favicon SVG del starter.

`--gradient-brand` y los tokens `--color-brand-turquoise`, `--color-brand-cyan` y `--color-brand-blue` reúnen los colores del logo. El degradado se utiliza en firma y texto animado; los brillos combinan esa misma paleta. La extensión actual se limita a estos acentos del header/hero.

El Hero recibe `locale`, `contactHref` y `workHref`. El CTA principal enlaza con Contact y “Explore my work” con Selected work. `hero.body` separa `intro`, `detail` y `ending`: la frase final se muestra desde 768 px. `.hero` ocupa todo el ancho; `.hero-layout.container` limita el contenido a 1440 px. La iluminación circular vive en una capa separada del dibujo y una máscara desvanece sus límites superior/inferior. La escena conserva una sola entrada/final, flotación e inclinación con puntero preciso: no hay selector ni etiqueta Structure/Interface. Su máximo pasa de 596 a 628 px y el layout de escritorio asigna una proporción algo mayor a la escena. Un único botón visible pausa/reanuda todo el movimiento. Movimiento reducido muestra directamente la composición estática y oculta ese botón.

El eyebrow EN usa exactamente `WEBSITES ENGINEERED FOR FLORIDA BUSINESSES`. En móvil/tablet se limita a 32 caracteres de referencia para conservar dos líneas; su margen inferior de −4 px lo acerca al H1 sin alterar la separación con el resto del contenido. La variante ES ya se publica en `/es/` con sus textos localizados.

`hero.rotatingLines` define las tres frases del typewriter por idioma. EN: “Win trust.”, “Get leads.” y “Sell more.”. ES: “Inspira confianza.”, “Genera contactos.” e “Impulsa ventas.”. El titular accesible mantiene su texto original completo y no anuncia cada letra; las frases superpuestas reservan la altura para evitar saltos. La escritura se suspende cuando su línea sale de pantalla, se oculta la pestaña o se pulsa pausa. Movimiento reducido muestra la primera frase sin cursor animado.

El typewriter usa Instrument Sans **700**, incorporada como WOFF2 local; las dos líneas superiores mantienen peso 500. EN conserva su tamaño. En ES, solo desde 1024 px, la línea animada usa `0.98em` para que “Genera contactos.” conserve una sola línea. El degradado y los tiempos de animación se mantienen.

`Stats.astro` conserva los datos en `copy.ts` y usa una lista de definiciones, una sección etiquetada y `data-ui-id` estables. La franja ocupa todo el ancho con líneas superior e inferior: desde 1024 px muestra valor y explicación en una fila; entre 768 y 1023 px mantiene los tres datos apilados por columna; por debajo de 768 px refleja la maqueta móvil con 13+ y VE / FL, etiquetas compactas y sin el dato editorial central. “Since 2015 / U.S. collaboration” reemplaza la antigua atribución de fundación. No incorpora JavaScript, imágenes ni dependencias.

`Work.astro` convierte Selected work en una sección semántica con un H2, un artículo para DISOCA y un H3 para el proyecto. Reproduce el navegador enmarcado de Pencil sin depender de una captura remota: `Picture` transforma el recurso local en variantes AVIF/WebP, lo carga de forma diferida y conserva un alt descriptivo. Desde 1024 px usa dos columnas; en móvil apila la previsualización, el contenido y la nota. El único enlace de caso abre `https://disoca.com/` en una nueva pestaña con `noopener noreferrer nofollow`; no hay página interna de caso ni JavaScript adicional.

`Expertise.astro` replica el bloque oscuro “What I bring” con un H2, una lista semántica de cuatro servicios y H3 por oferta. Usa el copy centralizado, números y flechas decorativos ocultos a lectores de pantalla, sin enlaces ficticios ni JavaScript. En móvil se apila; desde 1024 px conserva la introducción de 380 px y la lista de servicios a la derecha, como Pencil.

`Founder.astro` implementa el bloque de confianza personal con H2, retrato optimizado mediante `Picture`, pie de foto y enlace seguro a LinkedIn. Usa el copy EN/ES centralizado y conserva la información profesional como texto HTML. Tras probar el marco prismático, el retrato quedó deliberadamente limpio: sin vidrio, reflejos, barrido, halo ambiental ni efectos de hover. Su proporción es `1 / 1` en todos los breakpoints, coincidiendo con el original 1024 × 1024 sin deformarlo. `Picture` genera AVIF/WebP de 342, 424, 636, 848 y 1024 px y declara tamaños reales de 424 px desde 768 px, evitando que un candidato de miniatura se amplíe en pantallas de alta densidad. `NeonBorder` a 8 s se coloca 2 px por fuera del perímetro y aumenta su halo a 8 px para hacer el recorrido turquesa/cian/azul más visible. La sombra del marco es permanente. El pie gana un espacio de 1,25 rem bajo la foto. No se añade JavaScript. En móvil apila retrato y biografía; el titular usa 34 px en 390 px para preservar las tres líneas del diseño. Desde 1024 px recompone el retrato y la biografía en dos columnas, con una foto de 424 × 424 px y el espacio de 100 px de la referencia de escritorio.

El caption incorpora además `margin-top: 1rem` y `padding: 0 2% 0 2%` sin media queries que los modifiquen. Mantiene la alineación nombre/ubicación y gana aire lateral de forma proporcional tanto en desktop como en móvil.

`Process.astro` implementa el siguiente tramo como una sección semántica con H2 y lista ordenada de tres pasos. Su introducción usa un `div` neutro, no un elemento `header`; el copy EN/ES permanece en `copy.ts` y cada paso tiene un icono decorativo de línea, H3 y explicación. El orden sigue siendo semántico para lectores de pantalla. Mantiene líneas superiores de 1 px y la superficie paper de Pencil. Desde 1024 px alinea el label a la izquierda, el titular a la derecha y los tres pasos en columnas; por debajo los apila en el orden del proceso y suma 2–2,5 rem de aire superior antes del eyebrow.

`Testimonials.astro` es una sección hermana de `Process.astro`, no una subsección: incorpora `id`, H2, `aria-labelledby` y `data-ui-id`, y se navega desde “Reviews” / “Reseñas” sin cambiar la URL. No usa línea separadora; reduce el ritmo exterior respecto de Process y deja 2,5 rem entre el encabezado y el carrusel. Renderiza los seis testimonios completos en HTML con atribución y enlace al sitio citado; el nombre y la ubicación se apilan a la izquierda y el dominio se alinea a la derecha. Las tarjetas reducen su alto mínimo al contenido, sin recortes ni puntos suspensivos. `testimonials-carousel.ts` añade navegación por flechas a la derecha, indicadores, swipe, anuncio de página, `inert` para tarjetas fuera de la vista y adaptación 3/2/1. Sin JavaScript, las seis tarjetas quedan disponibles en una cuadrícula responsive. No se añadió autoplay ni dependencia externa.

`Contact.astro` reproduce los frames `y2H57q` y `a897h`: label turquesa, titular editorial, correo/WhatsApp y formulario de nombre, email, teléfono opcional, servicio y mensaje. Desde 1024 px usa las dos columnas del diseño; a 768 y 390 px se apila, conserva controles de 46 px y mantiene las tres opciones de servicio en una fila proporcionada. El `fieldset` de “What do you have in mind?” reinicia el padding que el navegador aplica por defecto y separa el `legend` 10 px de sus opciones, igualando tanto el borde izquierdo como el ritmo vertical de los demás campos. El formulario usa el destino Formspree ya documentado y sus claves `name`, `email`, `phone`, `service` y `message`; con JavaScript envía `FormData`, recibe JSON, bloquea duplicados, conserva los datos ante fallo y anuncia resultado con `aria-live`, mientras el `action` nativo queda como fallback. No se hizo una solicitud real ni se confirmó entrega de correo. La nota de privacidad termina en la consulta y no enlaza a una ruta inexistente.

Después de `contact__alternatives`, un `nav` etiquetado añade los enlaces secundarios de LinkedIn e Instagram. Ambos abren las URLs autorizadas en nueva pestaña con `rel="me noopener noreferrer"`; se mantienen compactos, reducen su separación efectiva a 1 rem respecto de las alternativas, dejan 0,5 rem extra antes de la ubicación y no desplazan el foco comercial del formulario.

`StickyWhatsApp.astro` añade un CTA fijo al final visible de la pantalla: por debajo de 768 px ocupa los gutters móviles; desde 768 px se sitúa abajo a la derecha. Reutiliza `NeonBorder` en 6 s, una marca sólida y un anillo turquesa dentro de un disco ink de 48 px; no usa el verde asociado a WhatsApp. Durante el hero queda oculto mediante CSS e `inert`; se revela al alcanzar `#lead-web-experience` y desde allí sigue disponible incluso mientras Contact está en pantalla. El enlace conserva el `wa.me` autorizado con nueva pestaña y atributos seguros.

`BottomBar.astro` ocupa el slot `footer` de `BaseLayout`. Muestra el copyright y “With love from VE to USA.” desde `copy.ts`, en dos columnas desde 768 px y apilada por debajo. Su inset inferior de `calc(6.25rem + env(safe-area-inset-bottom))` deja espacio real para que el CTA fijo no cubra ninguno de sus textos en móvil.

`NeonBorder.astro` combina un contorno CSS de 1 px con un halo desenfocado. Dos zonas de luz se desvanecen suavemente al recorrerlo en 6 s (CTA fijo WhatsApp), 7 s (CTA superior) y 8 s (badge y retrato). Un ángulo registrado con `@property` permite la interpolación continua del gradiente cónico. `neon-border.ts`, cargado por este componente, controla ambos brillos y los cursores de marca: pausa manual del hero, salida de pantalla, pestaña oculta y movimiento reducido. Sin scripts los elementos quedan estáticos; la preferencia CSS real de movimiento reducido oculta la decoración del borde. No hay dependencias nuevas.

Anchos principales de revisión: **390, 768, 1024 y 1440 px**. Base móvil y estilos fluidos; cambios CSS según necesidad del contenido. La cabecera pasa a navegación completa y el hero a dos columnas en 1024 px. Comprobar también anchos intermedios y móviles más estrechos.

## Alcance de la primera versión

Rutas activas: `/` y `/es/`. Las páginas de privacidad y 404 quedan fuera del alcance actual; el texto bajo el formulario termina en la consulta y no enlaza a una política inexistente. Disoca enlaza al sitio externo; no habrá páginas internas de casos en esta versión. La meta de PageSpeed es al menos 90 en móvil y escritorio. La build y sus recursos ya fueron auditados localmente, pero la puntuación Lighthouse final se medirá tras publicar bajo HTTPS con CDN y caché reales.

El usuario autorizó el primer commit y push del estado inicial a `origin` (`https://github.com/ramon-zerpa/leadweb-dev.git`), desde la rama existente `master`, el 2026-09-06. El 2026-09-07 autorizó un nuevo checkpoint con todos los cambios pendientes, incluida la navegación interna. La publicación web en Namecheap sigue pendiente y requiere autorización explícita y backup verificado. No modificar DNS ni correo.

## Referencias de implementación

- [Layouts de Astro](https://docs.astro.build/en/basics/layouts/)
- [Estilos y CSS](https://docs.astro.build/en/guides/styling/)
- [Fuentes de Astro](https://docs.astro.build/en/guides/fonts/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
