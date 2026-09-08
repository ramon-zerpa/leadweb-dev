# Lead Web: entrega de diseño v1

Fecha: 2026-09-06.

Estado: diseño v1 aprobado; cabecera, hero, franja de experiencia, bloque Selected work/DISOCA, Expertise, Founder, Process, Reviews, Contact, CTA fijo WhatsApp y barra inferior están implementados en las portadas EN y ES. El usuario valoró el hero y autorizó avanzar por bloques. Hero con entrada de 2,4 s, ambiente pausable, respuesta al puntero y titular typewriter de tres frases. Consultar `HANDOFF-IMPLEMENTACION.md` para el estado técnico y las verificaciones vigentes.

Este documento complementa `PLAN-LEADWEB.md` y permite continuar el trabajo sin depender del historial del chat.

## 1. Recuperación tras el corte

La comprobación de Pencil confirmó que el diseño no se perdió. Existen diez tableros de diseño y un tablero de referencias, con sus capas editables. Algunas pantallas están fuera del viewport actual del editor, no ausentes del documento.

Tras el corte se cerró esta documentación. Posteriormente quedó registrada la aprobación visual y comenzó la implementación; el usuario confirmó su continuidad el 2026-09-06. La revisión de diseño descrita aquí es histórica y no sustituye la verificación del sitio construido.

## 2. Documento editable

- Archivo activo: `C:\Users\user\Downloads\new-lead-web\design-preview\pencil-design-new-leadweb.pen`, indicado por el usuario y confirmado por MCP el 2026-09-06.
- Acceder exclusivamente mediante herramientas MCP de Pencil.
- No leer, editar ni intentar descifrar el `.pen` con herramientas de filesystem.
- El archivo editable ya está dentro de `design-preview/` en el workspace. La ruta anterior en el almacenamiento interno de Pencil es histórica. No se ha realizado commit ni push del archivo.
- Las exportaciones son referencias visuales, no sustituyen las capas del documento ni contienen una implementación funcional.

## 3. Inventario de tableros

Las dimensiones están expresadas en píxeles de diseño. Las alturas son propias de cada composición, no alturas fijas que deban imponerse en CSS.

| Frame | Contenido | Dimensiones | Exportación local |
| --- | --- | --- | --- |
| `WRA6V` | Portada completa EN, escritorio | 1440 x 4517 | `design-preview/WRA6V.webp` |
| `lUMvX` | Portada completa EN, móvil | 390 x 6576 | `design-preview/lUMvX.webp` |
| `NqfbI` | Caso Disoca EN, escritorio | 1440 x 2331 | `design-preview/NqfbI.webp` |
| `sTgdp` | Caso Disoca EN, móvil | 390 x 3083 | `design-preview/sTgdp.webp` |
| `lb8Ru` | Sistema visual, colores, tipografía y CTA | 1440 x 499 | `design-preview/lb8Ru.webp` |
| `Ds17j` | Storyboard Structure / Interface | 1440 x 768 | `design-preview/Ds17j.webp` |
| `z8NPQ` | Foco, validación, envío, éxito y error | 1440 x 550 | `design-preview/z8NPQ.webp` |
| `A5bxI` | Menú móvil abierto | 390 x 800 | `design-preview/A5bxI.webp` |
| `qNP1M` | Adaptación ES de cabecera, escritorio | 1440 x 890 | `design-preview/qNP1M.webp` |
| `HZEXm` | Adaptación ES de cabecera, móvil | 390 x 1113 | `design-preview/HZEXm.webp` |
| `bi8Au` | Referencias: captura real, retrato, logos e imagen de Disoca | 800 x 2421 | Solo en Pencil |

El componente reutilizable `IKYC1` representa el CTA primario por defecto.

Los once tableros se confirmaron en el archivo vigente mediante MCP. Los diseños de caso Disoca se conservan como referencia futura: la implementación v1 enlaza directamente a `https://disoca.com/`, sin crear páginas internas de casos.

`design-preview/export.pdf` reúne ocho vistas de revisión: portada EN escritorio/móvil, caso EN escritorio/móvil, movimiento, formulario y cabeceras ES escritorio/móvil. El sistema visual y el menú abierto tienen exportaciones WebP separadas.

## 4. Recursos confirmados

| Recurso | Fuente | Copia para el proyecto |
| --- | --- | --- |
| Retrato | `C:\Users\user\Documents\Recursos Mios Nuevo\generated-image.png` | `design-assets/ZGJdX.png`, 1024 x 1024 |
| Logo maestro | `C:\Users\user\Documents\Recursos Mios Nuevo\LWD Recursos\LWD Transparent Logo.png` | `design-assets/rRfF3.png`, 400 x 400 |
| Captura de Disoca | Sección `#top` de `https://disoca.com/`, obtenida con el navegador integrado | Recurso dentro del documento Pencil |
| Imagen de construcción | `https://disoca.com/images/stock/hero.webp` | Recurso dentro del documento Pencil |

Se cotejaron visualmente las dos copias PNG con los archivos proporcionados. No se regeneró el rostro ni se rediseñó el logo. El retrato se recorta dentro de los marcos de diseño, sin deformarlo. El PNG del logo conserva su transparencia.

Los PNG exportados son recursos de trabajo, no un formato obligatorio para la web final. Generar variantes optimizadas durante la implementación, preservando la identidad.

La captura de Disoca refleja el viewport disponible en el navegador integrado. En los mockups se muestra un recorte de esa captura real, no una auditoría o captura completa de escritorio a 1440 px.

El usuario confirmó diseño y desarrollo con Astro. No inferir métricas de velocidad, conversiones ni relación comercial directa a partir de la captura. Antes de publicar el caso, confirmar recursos autorizados y la redacción final.

## 5. Dirección creativa

Concepto: Ingeniería visible.

- Mantener la identidad cian/azul del logo, con fondos grafito y papel cálido.
- Usar composición editorial, títulos de gran escala y alternancia de densidad.
- Mostrar trabajo real antes de desarrollar la lista de servicios.
- Utilizar filas de servicios en lugar de una cuadrícula genérica de tarjetas.
- La fotografía identifica a la persona responsable y refuerza confianza en una contratación remota.
- No presentar a Ramón como ubicado en Florida: su base real es Mérida, Venezuela.

| Token | Valor |
| --- | --- |
| Ink | `#091214` |
| Paper | `#F3F4EF` |
| Accent / CTA | `#53E3DE` |
| Depth / sección oscura secundaria | `#112629` |
| Texto secundario sobre oscuro | `#A7B8B8` |
| Texto secundario ajustado sobre claro | `#506A62` |
| Borde de campo oscuro | `#628084` |
| Borde de opciones / controles | `#607B7D` |
| Pestaña seleccionada | `#4B7275` |
| Tipografía principal | Instrument Sans |
| Anotaciones técnicas | IBM Plex Mono |

Escala de espaciado: 8, 16, 24, 32, 48, 64 y 96. Margen base de escritorio: 64; móvil: 24. No copiar posiciones absolutas de todas las capas a la implementación: utilizar layout fluido, contenido intrínseco y puntos de adaptación probados.

Criterio responsive aprobado posteriormente por el usuario: revisar **390, 768, 1024 y 1440 px**, con comprobaciones adicionales intermedias y menores. No son cuatro media queries obligatorias: los cambios se introducen cuando la composición lo necesita. La cabecera usa menú móvil por debajo de 1024 px (80 px de altura) y navegación completa desde ese ancho (96 px). El logo móvil conserva proporción cuadrada a 44 px y la cabecera usa el margen global de 24 px.

Refinamiento de marca solicitado en código: símbolo a la izquierda y firma de dos líneas a la derecha, centrada verticalmente con él. “Lead Web” en blanco a `0.75rem`, peso 400 y caja natural; debajo, con 3 px de separación, `</Dev_>` a `0.875rem`, peso 600, distribuido en el mismo ancho y con degradado turquesa–azul inspirado en el símbolo. Se aplica en cabecera y menú móvil. El logo maestro y Pencil conservan sus archivos actuales.

Refinamiento posterior autorizado: el guion bajo de la firma parpadea como cursor en ciclos de 1,1 s, conservando su espacio; pausa y movimiento reducido lo dejan visible. El degradado aprobado `#00ded3 → #00bddd → #2576ef` también se aplica al texto del typewriter y sus colores a los brillos del header/badge. Esta extensión de identidad se concentra en los acentos protagonistas del hero.

El usuario valoró muy positivamente este resultado y pidió un hover sencillo: turquesa sólido `#53e3de` para elementos del menú e idioma alternativo; el idioma actual no cambia con hover. El selector usa `|`, con separación visual igual a ambos lados: 8 px en cabecera y 16 px en el menú móvil.

Ajuste de cierre del bloque: separación entre la caja del símbolo y la firma de 4 px en móvil/tablet y 8 px en escritorio; mismo ancho de firma y alineación vertical. El favicon se obtiene del logo maestro, manteniendo forma, degradado y transparencia, en PNG de 96 px e ICO de 16/32/48 px. El archivo Pencil conserva el diseño original; estos refinamientos viven en código.

## 6. Mensaje y recorrido

Cabecera EN: “Stand out. Stay fast. Win trust.”

Adaptación ES: “Impacta. Carga rápido. Inspira confianza.” La cabecera española usa una escala tipográfica distinta para acomodar el idioma sin desbordamientos. No forzar el mismo número de caracteres o líneas.

Actualización autorizada en código: la última línea escribe y borra tres frases en loop con cursor titilante. EN: “Win trust.” → “Get leads.” → “Sell more.”. ES: “Inspira confianza.” → “Genera contactos.” → “Impulsa ventas.”. Las dos primeras líneas permanecen fijas. Se reserva la altura necesaria para evitar saltos y se conserva el titular original completo para tecnologías de asistencia y como fallback sin scripts. No se modificó el archivo Pencil.

Peso final solicitado: **700 en la línea animada**, frente a 500 en las dos superiores. Se mantiene la escala EN y la escala ES móvil/tablet. Solo la línea animada ES en escritorio se reduce un 2 % para conservar sus saltos y proporciones. Instrument Sans 700 real incluida en las fuentes locales.

Recorrido principal: propuesta y CTA, experiencia, Disoca, servicios, fundador, proceso y contacto.

CTA comercial: “Discuss your project”. Envío del formulario: “Send project inquiry”. Español: “Hablemos de tu proyecto”. Emplear redacción estadounidense en inglés.

La portada incluye 13+ años de experiencia y Lead Web desde 2015. La formación correcta es UPTM Kleber Ramírez. Las agencias se presentan como experiencia profesional, no como una lista automática de clientes directos.

La franja `Experience strip` se inspeccionó mediante MCP en `p2aFV6` (escritorio) y `XaxPp` (móvil), sin modificar Pencil. En escritorio usa bordes de 1 px, padding de 25/64 px y tres datos en una misma fila. El código conserva 13+ con “Years building code”, reemplaza la fundación por “Since 2015 / U.S. collaboration” y usa VE / FL sin flecha. En móvil conserva bordes y padding de 24 px; el código utiliza las etiquetas concisas “Years of experience” y “Collaboration”, sin “Remote”. El código interpola a tres columnas verticales entre 768 y 1023 px para mantener los tres hechos sin apretar la lectura.

El bloque Selected work se inspeccionó mediante MCP en `rXUQC` (escritorio) y `lxDdj` (móvil), sin modificar Pencil. La implementación conserva la superficie clara, encabezado editorial, navegador enmarcado y composición de proyecto de DISOCA. La captura se sirve desde el recurso local mediante variantes AVIF/WebP diferidas, no desde `disoca.com`; el enlace externo es la única navegación del caso en esta primera versión. El escritorio usa dos columnas desde 1024 px y el móvil apila previsualización, contenido y nota.

Expertise se inspeccionó mediante MCP en `fRzH5` (escritorio) y `xlhDV` (móvil), sin modificar Pencil. La implementación conserva la superficie `#112629`, el label turquesa, el titular de tres líneas, el copy de apoyo y cuatro filas de servicios. Desde 1024 px usa la proporción de introducción de 380 px y lista a la derecha; debajo de ese ancho mantiene la pila de móvil. Los números y flechas comunican la composición visual, sin inventar destinos de navegación.

Founder se inspeccionó mediante MCP en `pth2H` (escritorio) y `WM6UC` (móvil), sin modificar Pencil. La implementación conserva el papel `#F3F4EF`, retrato local aprobado, caption con nombre/ubicación, titular, contexto profesional, formación y enlace a LinkedIn. Desde 1024 px recompone retrato y biografía en dos columnas; debajo usa la pila móvil. El titular de 390 px se ajusta a 34 px para conservar sus tres líneas sin desbordamiento, y el retrato se entrega en AVIF/WebP diferido desde el recurso local. Tras revisar el ensayo de cristal, la dirección vigente deja la foto limpia: sin bisel, reflejos, barrido, halo ambiental, foco de puntero ni cambio al hover. El marco adopta proporción cuadrada `1 / 1` en todas las escalas, coincidiendo con el original 1024 × 1024. `Picture` ofrece variantes de 342, 424, 636, 848 y 1024 px para cubrir pantallas de alta densidad sin escalar una miniatura. `NeonBorder` del hero recorre su perímetro a 8 s desde 2 px al exterior, con dos zonas turquesa/cian/azul y halo de 8 px. La sombra inferior permanece fija para conservar la sensación de elevación. El borde se suspende con movimiento reducido o colores forzados y no depende de Remotion.

Refinamiento posterior de Founder: `.founder__caption` recibe `margin-top: 1rem` y `padding: 0 2% 0 2%` en la regla base, sin sobrescrituras por breakpoint. El caption conserva su alineación y respira con el retrato en toda la escala responsive.

Process se inspeccionó mediante MCP en `zJRVO` (escritorio) y `IfhHN` (móvil), sin modificar Pencil. Conserva la superficie paper, el label “04 / HOW WE GET THERE”, el titular “A clear process. No black box.” y tres pasos con iconos de exploración, código y verificación. El label y H2 viven en un contenedor neutro; la semántica la aportan el H2 y la lista ordenada, mientras los SVG decorativos se muestran grandes y sin contenedor circular. En escritorio, desde 1024 px, el label se mantiene a la izquierda, el titular se alinea a la derecha y los pasos se distribuyen en tres columnas con línea superior `#CDD5CE`. Debajo se apilan con la misma jerarquía y 2–2,5 rem de aire antes del eyebrow. Es una sección deliberadamente sobria que da pausa visual después del retrato, sin efectos animados añadidos.

La extensión aprobada de testimonios no modifica Pencil. Ahora vive en su propia sección hermana inmediatamente después de Process y reduce el espacio exterior de esa transición. Usa el eyebrow `05 / CLIENT STORIES`, H2 a la izquierda, sin línea separadora, y abre 2,5 rem entre el H2 y las tarjetas. Las tarjetas ink usan una arista de degradado de marca, calificación 5/5, cita completa y atribución: nombre y ubicación apilados a la izquierda, dominio a la derecha. Su alto mínimo se reduce para eliminar aire vacío. El carrusel presenta 3 tarjetas desde 1024 px, 2 desde 768 px y 1 en móvil, con controles alineados a la derecha del pie.

## 7. Movimiento propuesto

El tablero `Ds17j` es un storyboard estático, no una animación ejecutable.

1. La estructura inicial es visible y el titular y CTA ya pueden utilizarse.
2. El storyboard original proponía 650–900 ms. La nueva prueba autorizada usa 2,4 s para dar tiempo a estructura, ensamblaje de planos y revelado de la interfaz.
3. La versión actual mantiene flotación e iluminación suaves, con un único control de pausa/reanudación. Se retiraron las opciones Interface/Structure y repetición al simplificar la barra por aprobación del usuario.

Decisión vigente: el storyboard Interface/Structure queda como referencia histórica del proceso de diseño. La portada muestra una sola composición final; no restaurar el segundo estado ni su control sin una nueva petición explícita. También se retiró el rótulo “01 / Structure → Experience”, ya que no explicaba una acción útil para el visitante. La escena crece de 596 a un máximo de 628 px para ganar presencia sin cambiar su lenguaje visual.

El eyebrow EN vigente es “WEBSITES ENGINEERED FOR FLORIDA BUSINESSES”. Se acerca 4 px al H1 y se adapta a dos líneas en móvil; el copy ES se entrega en la ruta funcional `/es/`.

No implementar un loader obligatorio, sustitución del cursor ni scrolljacking. El usuario autorizó posteriormente movimiento ambiental continuo y efecto ligado al mouse: esa petición sustituye la restricción original de bucles para este ambiente. Debe poder pausarse y suspenderse fuera de pantalla o al ocultar la pestaña. Con movimiento reducido, mostrar directamente la composición final. En móvil se utiliza una escena simplificada y controles de 44 px; el efecto del puntero solo se activa con hover/puntero preciso desde 768 px.

La ilustración no debe contener información imprescindible que solo pueda leerse dentro de un canvas o una miniatura. Mantener texto, controles y descripción accesibles fuera de la decoración.

El typewriter comparte pausa con la escena y los bordes de neón. Se detiene si su propia línea sale de pantalla o la pestaña está oculta. Con movimiento reducido se mantiene la primera frase estática y se oculta el cursor. La animación no genera anuncios repetidos en lectores de pantalla.

El usuario aprobó la firma y autorizó corregir los cortes del fondo: la iluminación vive ahora en una capa del ancho completo del hero, separada del contenedor del contenido y del dibujo, con máscara que desvanece los extremos superior/inferior. Después pidió que la forma fuera más circular: ambos gradientes utilizan radios circulares. La ilustración conserva su recorte; las guías también se desvanecen en sus extremos.

Refinamiento vigente del neón: el usuario rechazó el aspecto de “gusanito” de los segmentos SVG y aportó `C:\Users\user\Videos\Icecream Screen Recorder\efecto brillo.mp4`, una grabación del chat de Pencil. Se revisaron fotogramas de sus 18,37 s: contorno fino, reflejos difusos y transiciones de color. La implementación usa un borde CSS de 1 px y halo desenfocado con dos zonas de luz turquesa/cian/azul que se desvanecen a transparente; ciclos de 7 s en “Let’s talk” y 8 s en “Human-led. AI-powered.”. Se retiraron los trazos sólidos y la cabeza de partícula. El único botón de pausa controla también ambos contornos y el guion bajo de la firma. Movimiento reducido conserva los bordes estáticos originales; en móvil el CTA superior y el badge mantienen sus reglas de visibilidad anteriores.

CSS y Web Animations API siguen siendo la opción inicial. Cualquier dependencia adicional debe justificar su utilidad y pasar el presupuesto de rendimiento.

Actualización de implementación: la primera transición simultánea de 800 ms fue sustituida por una secuencia de 2,4 s: esquema inicial, apertura de capas, cuatro planos escalonados, material y contenido final. La composición flota después y una luz del fondo sigue al puntero con inclinación leve de la escena. Sigue usando CSS/Web Animations API, sin Remotion. Los cambios son una prueba autorizada, no una aprobación visual final; el storyboard Pencil no se ha modificado. Revisar el resultado antes de continuar otras secciones.

El ensayo de movimiento independiente de Founder —entrada editorial, barrido, halo y foco de puntero— quedó retirado después de la revisión visual del usuario. La versión vigente mantiene el retrato estático y completo; el contorno `NeonBorder` usa las mismas salvaguardas de visibilidad y movimiento reducido que los bordes del hero. La sombra inferior queda permanente y no existe elevación, escala ni intensificación al hover.

Refinamiento vigente del retrato: se retiró el marco de cristal de 10 px, sus reflejos y la iluminación sobre la foto para devolver toda la presencia al retrato. La proporción cuadrada `1 / 1` mantiene 424 × 424 px en escritorio y coincide con el original 1024 × 1024 en móvil, sin deformación. El componente genera AVIF/WebP de 342, 424, 636, 848 y 1024 px para pantallas de alta densidad. El contorno CSS del hero se aplica directamente a la imagen, se separa 2 px y aumenta el halo a 8 px; conserva dos zonas de luz de marca y duración de 8 s. El borde permanece fino y las luces se difuminan a transparente, sin partículas ni líneas sólidas. La sombra inferior es permanente; el retrato no se eleva, escala ni modifica el halo al hover. En móvil conserva la misma proporción exterior que el retrato y no agrega overflow.

Contact se inspeccionó exclusivamente mediante MCP en `y2H57q` para escritorio y `a897h` para móvil, sin modificar el `.pen`. La implementación conserva su fondo ink, 64/48 px de titular, columnas 510/692 como referencia de escritorio y pila móvil. El formulario mantiene etiquetas permanentes, tres opciones de servicio y los controles oscuros con borde de 1 px; correo y WhatsApp quedan como alternativas reales a la izquierda.

Refinamiento posterior de Contact: el `fieldset` de servicio restablece explícitamente su padding a cero y separa el `legend` 10 px de las opciones. Así “What do you have in mind?” comparte el mismo borde izquierdo y el mismo ritmo etiqueta/control que los demás campos, sin cambiar la composición de Pencil.

El CTA fijo de WhatsApp fue solicitado después de la referencia original y no modifica el archivo Pencil. `StickyWhatsApp.astro` conserva el borde orbital turquesa–cian–azul ya aprobado, con una marca sólida y anillo turquesa sobre un disco ink de 48 px; no usa el verde de WhatsApp. Es una pieza de conversión fija, amplia entre los gutters en móvil y ubicada abajo a la derecha desde tablet. Durante el hero queda oculto y `inert`; se revela al alcanzar la franja de experiencia y después sigue disponible también durante Contact y el cierre.

Después de `contact__alternatives`, Contact incorpora los enlaces secundarios de LinkedIn e Instagram. Se presentan como dos controles de borde fino para reforzar presencia profesional sin competir con correo, WhatsApp o el formulario; su separación efectiva se reduce de 1,5 a 1 rem y se suma 0,5 rem antes de la ubicación.

La barra inferior también es una incorporación posterior a la referencia y no modifica el archivo Pencil. `BottomBar.astro` usa el slot `footer` del layout: copyright a la izquierda y “With love from VE to USA.” a la derecha desde 768 px, con pila móvil. Su área inferior reservada permite que el CTA de WhatsApp se mantenga fijo hasta el final sin tapar estos textos.

## 8. Estados de interfaz

- Formulario Contact implementado con etiquetas permanentes; nombre, email y mensaje requeridos, teléfono opcional y radios de servicio opcionales.
- La etiqueta/controles de servicio alinean con los campos de texto: `fieldset` sin padding implícito y separación de 10 px entre `legend` y opciones.
- CTA fijo de WhatsApp solicitado por el usuario: enlace seguro al número autorizado, disco ink compacto con marca/anillo turquesa y borde de neón de la marca; se oculta en hero, aparece desde la franja de experiencia y permanece visible e interactivo incluso en Contact y el cierre.
- Redes secundarias en Contact: LinkedIn e Instagram siguen a correo/WhatsApp con borde fino, destino externo seguro, una separación efectiva de 1 rem y 0,5 rem extra antes de la ubicación.
- Barra inferior: copyright y “With love from VE to USA.” desde `copy.ts`; dos columnas desde 768 px, pila móvil y espacio inferior reservado para el CTA fijo.
- El destino Formspree registrado usa `name`, `email`, `phone`, `service` y `message`; mantiene su `action` nativo como fallback.
- Foco visible, email inválido, envío en curso, aceptación y fallo de `z8NPQ` se reflejan en el componente mediante validación nativa, botón deshabilitado y región `aria-live`.
- Ante fallo se conserva el contenido del formulario y se evita el doble envío mientras la solicitud está pendiente.
- El estado de éxito representa aceptación de Formspree; no demuestra recepción de correo.
- Menú móvil abierto en `A5bxI`; en código requerirá foco gestionado, cierre por teclado y navegación comprobada.
- Hover y foco del CTA en `lb8Ru`.

Los controles de Pencil siguen siendo capas y estados visuales. En código se comprobó la presencia del formulario, los anchos, la alineación de servicio, el CTA fijo y la navegación hacia Contact; no se ejecutó ningún envío real ni se confirmó recepción.

## 9. Verificación realizada

- Documento recuperado después del corte: 10 tableros de diseño y uno de referencias presentes.
- Ningún contenedor principal mantiene `placeholder: true`.
- Revisión visual de portada, caso, retrato, cabeceras ES, storyboard, menú y estados.
- Corregidos tamaños de tipografía móvil, límites de marcos, deformación de imagen y texto de envío.
- Cuatro avisos de clipping restantes: las capturas reales de Disoca, recortadas intencionalmente dentro de cuatro mockups. No corresponden a texto de página o controles inaccesibles.
- Cotejo visual de los PNG exportados de foto y logo.
- Comprobación de contraste sobre 336 nodos de texto usando colores y el fondo sólido declarado más próximo, con umbrales de 4,5:1 para texto normal y 3:1 para texto grande. Sin resultados bajo esos umbrales tras las correcciones.
- Bordes de campos ajustados a una combinación calculada de 3,90:1; selección de pestaña frente a su contenedor, 3,04:1.

La comprobación de contraste no reproduce todos los efectos de composición, imágenes, gradientes, opacidades o rendering del navegador. No es una certificación WCAG. Las ilustraciones y referencias no son contenido de lectura evaluado como interfaz principal.

Durante la entrega visual original no se realizaron build, pruebas funcionales ni auditoría SEO del rediseño. El cierre técnico posterior se registra en `HANDOFF-IMPLEMENTACION.md`: build, HTML emitido, semántica y SEO de las portadas EN/ES ya fueron comprobados localmente. Tras la publicación, PSI devuelve 99 móvil y 100 escritorio; aún no hay datos de campo porque el dominio es reciente. La regla de caché de assets versionados se incorpora en `public/.htaccess`; Core Web Vitals de campo se evaluarán cuando haya cobertura real de usuarios.

## 10. Trabajo aún pendiente

1. La barra inferior compacta ya cierra ambas portadas. Un Footer ampliado queda diferido hasta una petición explícita; continuar una sección o bloque coherente por vez.
2. Revisar editorialmente los textos EN/ES ya escritos en `src/content/copy.ts`; las maquetas españolas de Pencil siguen limitadas a las cabeceras.
3. Validar narrativa y recursos de Disoca para publicación, sin métricas inventadas y con enlace externo en v1.
4. Cerrar privacidad, contenido definitivo, estados adicionales necesarios y comportamiento responsive entre los anchos de referencia.
5. Repetir las comprobaciones funcionales y de coste al refinar la animación del hero. El typewriter se registra en la sección 14 del handoff técnico; la sección 13 conserva las pruebas de escena/ambiente y la 12 la primera versión.
6. Completar solo los bloques que se autoricen después: privacidad, 404, imagen social, verificación operativa de Formspree, migración y pruebas de producción descritas en `PLAN-LEADWEB.md`.
7. Confirmar acceso a Namecheap, backup, document root y autorización antes de publicar.

La dirección visual v1 está aprobada para implementación. El cierre editorial y las verificaciones del sitio completo siguen pendientes. No presentar las adaptaciones ES como maquetas completas ni la existencia del copy como páginas implementadas.

## 11. Git y publicación

Repositorio: https://github.com/ramon-zerpa/leadweb-dev

La entrega original verificó el remoto como público y vacío. El 2026-09-06 el usuario autorizó el primer commit y push del proyecto después de los refinamientos de favicon/firma, sobre la rama existente `master`. El checkpoint incluye Markdown, código, recursos, `.pen` y sus exportaciones de revisión. El PDF de `design-preview/export.pdf` es la exportación del diseño. Esta autorización de guardado no incluye sustituir la web publicada ni desplegar en el hosting.

El 2026-09-07 el usuario autorizó un nuevo commit y push de todos los cambios pendientes después de corregir la navegación interna. El scroll suave sin hash es un comportamiento de código que conserva los destinos visuales del diseño; no modifica el archivo Pencil ni autoriza despliegue al hosting.

No subir el PDF de LinkedIn, credenciales, backups ni materiales no autorizados. Revisar el tamaño y pertinencia de las exportaciones antes de decidir cuáles versionar.
