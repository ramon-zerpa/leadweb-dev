# Lead Web Developers

Sitio de Ramón Zerpa para negocios de Florida, con base real en Mérida, Venezuela. Astro estático, TypeScript estricto y CSS nativo a partir del diseño Pencil aprobado.

## Estado actual

Implementación por bloques pequeños. Ya existen configuración, recursos, textos EN/ES, layout, estilos base, cabecera responsive y primera versión funcional del hero. `/` muestra cabecera y hero, todavía no la portada completa del diseño.

Punto de pausa: **header y hero**. El usuario valoró muy positivamente la firma, el brillo y el typewriter. La entrada de 2,4 segundos conserva estructura, ensamblaje e interfaz. La iluminación ocupa el ancho completo del hero, con luces circulares y desvanecido suave. Los bordes de “Let’s talk” y “Human-led. AI-powered.” usan luz difusa inspirada en el video de Pencil aportado por el usuario. El degradado de marca se extiende al typewriter y el guion bajo de la firma parpadea. Un único botón pausa/reanuda el conjunto. El favicon usa el logo original y la firma está más cerca del símbolo. Primer commit y push del proyecto autorizados el 2026-09-06. Las demás secciones, páginas en español, privacidad, 404 e integración Formspree continúan pendientes. Sin Remotion ni publicación en el hosting.

## Documentación

- [PLAN-LEADWEB.md](./PLAN-LEADWEB.md): objetivos, alcance, presupuestos y registro histórico.
- [DESIGN-HANDOFF.md](./DESIGN-HANDOFF.md): diseño v1 aprobado y dirección visual.
- [HANDOFF-IMPLEMENTACION.md](./HANDOFF-IMPLEMENTACION.md): estado técnico vigente, verificaciones y siguiente bloque.
- [AGENTS.md](./AGENTS.md) y [CLAUDE.md](./CLAUDE.md): instrucciones de desarrollo.

Diseño editable: `design-preview/pencil-design-new-leadweb.pen`. Consultarlo exclusivamente mediante MCP de Pencil; no leer ni editar su contenido por filesystem.

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
  components/              Nav y piezas compartidas; Hero y HeroScene
  content/copy.ts           Textos y rutas de idioma EN/ES
  layouts/BaseLayout.astro  HTML, metadatos, fuentes y estructura accesible
  styles/global.css        Tokens y estilos compartidos
  scripts/hero-scene.ts     Entrada, ambiente pausable y respuesta al puntero
  scripts/hero-typewriter.ts Escritura y borrado de las tres frases del titular
  scripts/neon-border.ts    Visibilidad y pausa compartida de los contornos luminosos
  pages/index.astro         Cabecera y hero EN
design-preview/            Diseño Pencil y exportaciones
design-assets/             Copias de retrato y logo del diseño
```

El layout recibe `locale`, admite metadatos por página y contiene el único `<main>`. Sus slots `header`, contenido por defecto, `footer` y `head` permiten incorporar componentes progresivamente. `alternates` recibe un par EN/ES de páginas equivalentes solo cuando ambas existen. Las páginas no indexables pueden usar `noindex` y `canonicalPath={false}`.

Consumir textos desde `copy.ts`. Los patrones `.container`, `.section`, `.stack`, `.eyebrow` y `.lede` están disponibles; los estilos específicos se añaden junto a cada componente con identificadores semánticos.

El Nav recibe destinos mediante `sectionLinks`, `contactHref`, `homeHref` y `alternateHref`. En la muestra actual, las secciones pendientes y el idioma alternativo no tienen href; el CTA usa correo. Incorporar cada destino cuando exista, conservando la equivalencia de página al cambiar idioma.

El menú y el idioma alternativo cambian a turquesa sólido con hover, incluso en la muestra con destinos pendientes. El idioma actual conserva su color. El selector utiliza una barra vertical `|` con espacios visuales iguales: 8 px por lado en cabecera y 16 px en el menú móvil; el enlace alternativo mantiene su área de 44 px.

La firma del Nav aprobada por el usuario conserva el símbolo y usa dos líneas a su derecha: “Lead Web” a `0.75rem`/400 y `</Dev_>` a `0.875rem`/600 con degradado turquesa–azul. Las dos líneas comparten ancho y el conjunto se centra verticalmente con el logo, también en el menú móvil. Solo el guion bajo parpadea, en ciclos de 1,1 s, sin cambiar su espacio. La pausa y el movimiento reducido lo dejan visible y estático. Se reutilizan las fuentes locales existentes.

Separación entre la caja del logo y la firma: 4 px en móvil/tablet y 8 px desde 1024 px. `public/favicon.png` (96×96) y `public/favicon.ico` (16/32/48) se derivan del mismo `src/assets/logo.png`, conservando colores y transparencia; se recortó únicamente el margen transparente para mejorar su lectura a tamaños pequeños. El layout declara ambos iconos; se retiró el favicon SVG del starter.

`--gradient-brand` y los tokens `--color-brand-turquoise`, `--color-brand-cyan` y `--color-brand-blue` reúnen los colores del logo. El degradado se utiliza en firma y texto animado; los brillos combinan esa misma paleta. La extensión actual se limita a estos acentos del header/hero.

El Hero recibe `locale`, `contactHref` y `workHref`. El contacto usa correo mientras no exista la sección de formulario; “Explore my work” permanece sin href hasta construir Selected work. `hero.body` separa `intro`, `detail` y `ending`: la frase final se muestra desde 768 px. `.hero` ocupa todo el ancho; `.hero-layout.container` limita el contenido a 1440 px. La iluminación circular vive en una capa separada del dibujo y una máscara desvanece sus límites superior/inferior. La escena conserva su entrada, flotación e inclinación con puntero preciso. Un único botón visible pausa/reanuda todo el movimiento; se retiraron la selección de vista y la repetición. Movimiento reducido muestra directamente la composición estática y oculta ese botón.

`hero.rotatingLines` define las tres frases del typewriter por idioma. EN: “Win trust.”, “Get leads.” y “Sell more.”. ES: “Inspira confianza.”, “Genera contactos.” e “Impulsa ventas.”. El titular accesible mantiene su texto original completo y no anuncia cada letra; las frases superpuestas reservan la altura para evitar saltos. La escritura se suspende cuando su línea sale de pantalla, se oculta la pestaña o se pulsa pausa. Movimiento reducido muestra la primera frase sin cursor animado.

El typewriter usa Instrument Sans **700**, incorporada como WOFF2 local; las dos líneas superiores mantienen peso 500. EN conserva su tamaño. En ES, solo desde 1024 px, la línea animada usa `0.98em` para que “Genera contactos.” conserve una sola línea. El degradado y los tiempos de animación se mantienen.

`NeonBorder.astro` combina un contorno CSS de 1 px con un halo desenfocado. Dos zonas de luz se desvanecen suavemente al recorrerlo en 7 s (CTA superior) y 8 s (badge). Un ángulo registrado con `@property` permite la interpolación continua del gradiente cónico. `neon-border.ts`, cargado por este componente, controla ambos brillos y los cursores de marca: pausa manual del hero, salida de pantalla, pestaña oculta y movimiento reducido. Sin scripts los elementos quedan estáticos; la preferencia CSS real de movimiento reducido oculta la decoración del borde. No hay dependencias nuevas.

Anchos principales de revisión: **390, 768, 1024 y 1440 px**. Base móvil y estilos fluidos; cambios CSS según necesidad del contenido. La cabecera pasa a navegación completa y el hero a dos columnas en 1024 px. Comprobar también anchos intermedios y móviles más estrechos.

## Alcance de la primera versión

Rutas previstas: `/`, `/es/`, `/privacy/`, `/es/privacidad/` y 404. Disoca enlazará al sitio externo; no habrá páginas internas de casos en esta versión. La meta de PageSpeed es al menos 90 en móvil y escritorio; todavía no hay mediciones del sitio completo.

El usuario autorizó el primer commit y push del estado actual a `origin` (`https://github.com/ramon-zerpa/leadweb-dev.git`), desde la rama existente `master`, el 2026-09-06. Incluye implementación, documentación y recursos de diseño del proyecto. La publicación web en Namecheap sigue pendiente y requiere autorización explícita y backup verificado. No modificar DNS ni correo.

## Referencias de implementación

- [Layouts de Astro](https://docs.astro.build/en/basics/layouts/)
- [Estilos y CSS](https://docs.astro.build/en/guides/styling/)
- [Fuentes de Astro](https://docs.astro.build/en/guides/fonts/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
