# Plan de lanzamiento de Lead Web Developers

- **Fecha:** 2026-09-06
- **Responsable:** Ramón Zerpa
- **Workspace:** `C:\Users\user\Downloads\new-lead-web`
- **Repositorio público:** https://github.com/ramon-zerpa/leadweb-dev
- **Remoto configurado:** `origin`: `https://github.com/ramon-zerpa/leadweb-dev.git`
- **Estado del repositorio:** primer checkpoint del header/hero enviado a `origin` el 2026-09-06; segundo checkpoint `97e5cdf` enviado a `origin/master` el 2026-09-07, con la navegación interna incluida. Founder, su retrato limpio y más cuadrado con borde neón/elevación, Process, Contact, el CTA fijo de WhatsApp, la barra inferior y esta actualización documental forman el checkpoint autorizado siguiente. Publicación en el hosting pendiente.
- **Estado global:** diseño v1 aprobado e implementación Astro por bloques pequeños. Firma de marca aprobada y typewriter valorado positivamente. Hero con iluminación circular amplia/desvanecida, brillos difusos en CTA superior/badge inspirados en el video de Pencil, degradado de marca en el typewriter y guion bajo titilante en la firma. Una sola escena final, sin etiqueta Structure/Experience, con mayor presencia visual y pausa compartida. `Stats`, Work/DISOCA, Expertise, Founder, Process, Contact y una barra inferior ya están integrados localmente; el retrato de Founder deja la imagen limpia, adopta una proporción más cuadrada, refuerza el borde neón de marca, se eleva levemente con sombra y deja 1,25 rem antes del pie. Process conserva una pausa visual sobria con tres pasos, H2/lista ordenada y un contenedor neutro para la introducción; suma aire antes de su eyebrow en móvil/tablet y mantiene su título completo en una línea desde 1024 px. Contact conserva alternativas directas, sus redes más cercanas, más espacio antes de la ubicación, el formulario Formspree accesible y el servicio alineado con los demás campos, sin haber enviado una prueba real. `StickyWhatsApp.astro` añade una vía de conversión fija con borde orbital turquesa–cian–azul y una marca/anillo turquesa sobre ink: se oculta durante el hero, aparece al llegar a Stats y no obstruye el cierre. El siguiente bloque es el Footer ampliado. Sitio completo y publicación pendientes.
- **Actualización vigente:** `.founder__caption` añade `margin-top: 1rem` y `padding: 0 2% 0 2%` en todos los breakpoints. Contact suma LinkedIn e Instagram después de correo/WhatsApp, reduce su separación efectiva a 1 rem y deja 0,5 rem adicional antes de la ubicación. El CTA fijo usa un disco oscuro compacto con marca/anillo turquesa, permanece disponible desde Stats incluso dentro de Contact y `BottomBar.astro` reserva espacio inferior para él en móvil con la frase “With love from VE to USA.”.
- **Entrega de diseño:** consultar `DESIGN-HANDOFF.md`, `design-preview/` y el documento Pencil local indicado en la sección 4.
- **Estado técnico vigente:** `HANDOFF-IMPLEMENTACION.md`. Las notas del registro histórico no sustituyen este estado actual.

## 1. Objetivo y límites de autorización

Lanzar un sitio excepcional de Lead Web Developers para captar proyectos de negocios de Florida, Estados Unidos, operando honestamente desde Mérida, Venezuela. Combinar SEO, optimización de conversión (CRO), Astro e IA como apoyo al trabajo, con identidad propia, evidencia verificable y una meta de PageSpeed Insights (PSI) de 90 o más en móvil y escritorio.

La calidad visual y el efecto WOW son prioridad P0, igual que la claridad comercial, la accesibilidad y el rendimiento. Ninguna de estas metas autoriza a inventar resultados, experiencia, clientes o garantías.

**Decisión aprobada: diseñar primero en Pencil local.** El diseño v1 ya fue aprobado y la implementación iniciada. Pencil permite evaluar el diseño, pero no demuestra rendimiento, accesibilidad funcional ni comportamiento del código final.

La creación del repositorio público y configuración del remoto se realizaron bajo la autorización administrativa anterior. El 2026-09-06 el usuario confirmó la implementación iniciada y autorizó actualizar los Markdown y continuar por etapas. Tras base y cabecera autorizó el hero; pidió detener el avance a otras secciones y probar una entrada más expresiva, seguida de movimiento ambiental y respuesta al mouse. La nueva propuesta usa la tecnología nativa existente; no se ha adoptado Remotion. No incluye commits, push, publicación, compras ni cambios de DNS/MX.

**Autorización posterior de guardado — 2026-09-06:** tras valorar positivamente el hero, el usuario solicita favicon con el logo, acercar la firma y hacer commit y push del proyecto. Autoriza este primer checkpoint de código, documentación y recursos de diseño al remoto configurado. Sustituye el límite previo de commits/push para este guardado; no autoriza desplegar en Namecheap ni avanzar a nuevas secciones. El trabajo se retoma después.

**Autorización de checkpoint posterior — 2026-09-07:** el usuario solicita scroll suave para la navegación interna, sin hash visible en la URL, y autoriza el commit y push de todos los cambios pendientes cuando el ajuste esté verificado. Esta autorización no incluye desplegar el sitio, modificar DNS ni correo.

Después solicitó que “Win trust.” se escribiera con efecto typewriter, alternando tres frases relacionadas en loop con cursor titilante. Se implementa en el mismo hero, con pausa compartida y fallback estático accesible; la repetición manual se retiró al simplificar los controles. Posteriormente autorizó refinar los brillos mediante su video de Pencil, animar el guion bajo de la firma y extender su degradado a otros acentos del hero. Después autorizó continuar por bloques: `Stats` implementa la franja de experiencia, Work/DISOCA el siguiente tramo y Expertise presenta los servicios, sin alterar el archivo de diseño. Las demás secciones mantienen su estado pendiente.

## 2. Fuente de verdad y materiales

### Identidad y contacto confirmados

| Dato | Valor autorizado |
| --- | --- |
| Nombre | Ramón Zerpa |
| Perfil | Front-End Developer e Ingeniero |
| Trayectoria | 13+ años de experiencia, desde 2013 |
| Marca | Lead Web Developers, actividad paralela desde 2015 |
| Base real | Mérida, Venezuela; servicios para Florida, USA |
| Formación correcta | UPTM Kleber Ramírez |
| Correo | info@leadweb.dev |
| WhatsApp | +584247067872; enlace `https://wa.me/584247067872` |
| LinkedIn | https://www.linkedin.com/in/raymond-zerpa |
| Instagram | https://www.instagram.com/leadweb.dev/ |
| Logo maestro | `C:\Users\user\Documents\Recursos Mios Nuevo\LWD Recursos\LWD Transparent Logo.png`; PNG transparente de 400x400, ya leído según la actualización confirmada, de mayor tamaño y con el mismo símbolo. Usar este PNG como maestro y conservar la marca; no existe vector disponible |
| Logo publicado de referencia | https://leadweb.dev/assets/LWD-Logo.png; conservar como referencia de identidad, no como maestro frente al PNG local confirmado |
| Retrato confirmado | `C:\Users\user\Documents\Recursos Mios Nuevo\generated-image.png`; imagen exacta aportada por el usuario, recibida y leída a 1024x1024 según la actualización confirmada |
| Copia de retrato exportada desde Pencil | `design-assets/ZGJdX.png`, 1024x1024; cotejada visualmente con la foto confirmada y utilizada en los diseños de escritorio y móvil |
| Copia de logo exportada desde Pencil | `design-assets/rRfF3.png`, 400x400; cotejada visualmente con el PNG maestro, conservando el símbolo y la transparencia |
| Proyecto más reciente del usuario | https://disoca.com/; el usuario confirma diseño y desarrollo con Astro; el crédito Leadweb del footer coincide con esta atribución |

Los datos de contacto y educación del PDF de LinkedIn son incorrectos: no deben reemplazar los valores confirmados de esta tabla. No incorporar el PDF ni credenciales. La ruta del retrato está resuelta: usar la imagen exacta confirmada, sin sustituirla por otra persona, una nueva imagen generada o una foto de stock. Las copias de `design-assets/` ya fueron exportadas por el trabajo de diseño; esta actualización no las crea ni modifica. Al terminar el diseño se debe validar visualmente su correspondencia con las fuentes, los recortes y la transparencia del logo.

Para Disoca están confirmados el rol de diseño y desarrollo y el uso de Astro; no volver a pedir estos datos como si estuvieran pendientes. El usuario aporta su proyecto y autoriza su uso en el boceto. Esto no equivale a permiso final comprobado del cliente para publicar el caso, sus recursos o testimonios. Quedan pendientes el detalle del alcance que se quiera narrar, los recursos autorizados para publicación final, el permiso del cliente y cualquier métrica que se pretenda citar.

Los indicadores del negocio de Disoca, por ejemplo, 247 obras, no son resultados del desarrollo web y no deben atribuirse a Ramón ni al sitio. DISOCA tiene operaciones en varios países de América Latina: no inferir clientes, operaciones o experiencia en Florida a partir de este proyecto. No hay evidencia comprobada de mejoras de PageSpeed ni otras métricas de impacto del desarrollo. Sin mediciones verificadas, describir únicamente decisiones y entregables confirmados, no cifras de mejora.

### Experiencia a validar editorialmente

La cronología siguiente procede del PDF y debe tratarse como experiencia profesional, no como una lista automática de clientes directos:

| Organización | Periodo indicado |
| --- | --- |
| MotoFull | 2013-2015 |
| Dushi | 2015-2018 |
| VPSystem | 2018-2020 |
| 837 Comunicación | 2021 |
| TrueWebmaster | 2021-actualidad, según el PDF; confirmar vigencia antes de publicar |
| Lead Web Developers | Desde 2015, en paralelo |

No sumar periodos solapados ni presentar agencias o empleadores como clientes directos. No inferir cargos, tecnologías o responsabilidades a partir de nombres y fechas. Mantener la expresión aprobada de 13+ años desde 2013.

### Pendientes que requieren respuesta o acceso autorizado

- Conservar el retrato, recortes y aplicación de marca del diseño v1 aprobado. El cotejo visual ya se realizó; no volver a solicitar los archivos ni la aprobación ya registrada.
- Para Disoca, confirmar permiso final del cliente, recursos publicables y detalle del alcance editorial; comprobar cualquier métrica antes de incluirla. Diseño, desarrollo y Astro ya están confirmados y el uso en el boceto está autorizado por el usuario.
- Para otros casos candidatos, confirmar por separado rol, tecnología, permisos y evidencia, sin trasladarles la confirmación de Disoca.
- Revisar el copy público de la experiencia, la vigencia de TrueWebmaster y la denominación académica sin inventar títulos adicionales.
- Confirmar el público prioritario, servicios que realmente se ofrecen y capacidad de atención; agencias son un segmento secundario aún por validar.
- Obtener acceso autorizado al hosting, copia de seguridad y document root real de Namecheap; nunca registrar credenciales en este plan o en GitHub.
- Confirmar automatizaciones, destinatario y capacidad del propietario para verificar recepción de pruebas de Formspree.
- Confirmar acceso o alta autorizada de Google Search Console (GSC), y datos reales para la política de privacidad.
- Continuar por bloques conforme al diseño aprobado; solicitar aprobación de despliegue antes de publicar.

## 3. Arquitectura editorial, idiomas y conversión

**Idioma principal confirmado:** inglés en `/`. Español natural en `/es/`, no una traducción literal sin revisión. La propuesta debe explicar qué se hace, para quién y con qué evidencia, antes de enfatizar herramientas.

| Ruta | Propósito |
| --- | --- |
| `/` | Página principal en inglés para el mercado de Florida |
| `/es/` | Versión equivalente en español |
| `/privacy/` | Política real de privacidad en inglés |
| `/es/privacidad/` | Política equivalente en español |
| Página 404 del build | Ayuda y navegación útiles; las URL inexistentes deben devolver HTTP 404 |

La primera versión no incluye páginas internas de casos (`/work/<slug>/` ni `/es/proyectos/<slug>/`). Disoca enlaza a `https://disoca.com/` con `target="_blank"` y `rel="noopener noreferrer nofollow"`, según el handoff vigente. Los tableros de caso quedan como referencia futura. No crear casos vacíos, slugs especulativos ni páginas de relleno. El selector de idioma debe enlazar a la página equivalente, no siempre a la portada ni a una traducción inexistente.

### Contenido de la primera versión

- Cabecera con identidad clara, navegación breve, selector de idioma y CTA principal.
- Hero con propuesta de valor específica, texto indexable y CTA disponible desde el primer render.
- Servicios con alcance, problemas que resuelven y entregables reales; priorizar servicio más evidencia suficiente de caso.
- Trabajo seleccionado con Disoca, enlace al sitio externo y atribución precisa del rol.
- Proceso comprensible, sin promesas de plazos que no estén acordadas.
- Sección del fundador con retrato genuino, trayectoria y transparencia sobre la colaboración remota desde Venezuela.
- Contacto con formulario, correo y WhatsApp, sin afirmar atención permanente.
- Pie con datos consistentes, privacidad, idiomas y navegación útil.

CTA principal: **Discuss your project**; secundario: **Explore my work**. Español: **Hablemos de tu proyecto** y **Explora mi trabajo**, según `src/content/copy.ts`. No prometer ventas, posiciones en Google, respuesta en 24 horas ni disponibilidad 24/7 sin evidencia y compromiso operativo explícitos.

## 4. Dirección visual: Ingeniería visible

Usar como maestro el PNG local transparente de 400x400 `LWD Transparent Logo.png` inventariado en la sección 2 y conservar su identidad cian/azul, combinada con grafito y blanco cálido. No reemplazarlo por un vector inventado. Crear un lenguaje editorial asimétrico, con jerarquías tipográficas fuertes, composición intencional y espacio negativo; evitar una plantilla SaaS y el uso generalizado de tarjetas en cuadrícula.

El hero usa planos geométricos que construyen una interfaz. El storyboard original incluía estados **Interface** y **Structure**, pero la decisión vigente es una sola composición final: no restaurar el segundo estado, selector ni etiqueta “Structure → Experience” sin una nueva petición explícita. Los planos conservan la idea de construcción sin exigir interpretación o interacción al visitante.

### Documento activo y estado

- Documento Pencil vigente: `C:\Users\user\Downloads\new-lead-web\design-preview\pencil-design-new-leadweb.pen`, confirmado por el usuario y mediante MCP el 2026-09-06. La ruta anterior en el almacenamiento interno de Pencil es histórica.
- Acceso exclusivamente mediante herramientas MCP de Pencil; no leer ni editar el `.pen` por filesystem.
- Propuesta v1: portada EN `WRA6V` y `lUMvX`; caso Disoca EN `NqfbI` y `sTgdp`, en escritorio y móvil respectivamente.
- Tableros adicionales: sistema visual `lb8Ru`, movimiento `Ds17j`, estados de formulario `z8NPQ` y menú móvil abierto `A5bxI`.
- Español en Pencil: cabeceras de escritorio `qNP1M` y móvil `HZEXm`; no son maquetas completas. Los textos EN/ES de portada, estados, privacidad y 404 ya existen en `src/content/copy.ts`; siguen pendientes las páginas y la revisión editorial final.
- Las copias de retrato y logo fueron cotejadas visualmente con las fuentes y revisadas en los diseños.
- La revisión tras el corte de conexión confirmó 10 tableros de diseño y un tablero de referencias. No hay marcos marcados como incompletos. Los únicos cuatro recortes señalados corresponden a capturas de Disoca dentro de sus marcos, de forma intencional.
- Se ajustó contraste de textos secundarios, bordes de campos y selección de pestañas. Se analizaron 336 combinaciones de texto y fondo sólido declarado sin fallos bajo los umbrales aplicados; esto no certifica WCAG ni sustituye pruebas de navegador y teclado.
- Exportaciones locales: 10 vistas WebP en `design-preview/` y un PDF de revisión `design-preview/export.pdf`. Inventario y límites en `DESIGN-HANDOFF.md`.
- La aprobación del diseño está registrada en el handoff y el usuario confirmó la continuidad el 2026-09-06. Pencil conserva el storyboard original; la animación actual del hero dura 2,4 s y mantiene ambiente pausable y efecto de puntero autorizados para prueba. Su valoración visual y las mediciones PageSpeed siguen pendientes.

### Entregables Pencil obligatorios

- Portada completa de escritorio y móvil, incluyendo cabecera, servicios, trabajo, fundador y contacto.
- Plantilla de caso de estudio de escritorio y móvil, basada en contenido autorizado o marcadores claramente pendientes durante el diseño.
- Ubicación y recorte de la foto exacta confirmada de 1024x1024; usar la copia exportada y cotejarla visualmente con la fuente al terminar, sin tratar el archivo como pendiente de localizar.
- Motion boards del hero y de los estados Interface/Structure como referencia histórica, con estado inicial, transición, interacción y estado final. La implementación vigente conserva una sola composición final.
- Estados de navegación, foco, hover, menú móvil y formulario: vacío, validación, envío, éxito y error.
- Versión completa para `prefers-reduced-motion`, equivalente móvil y anotaciones de comportamiento responsive.
- Tokens visuales, jerarquía, espaciado, contraste y especificación de interacciones suficientes para construir sin adivinar.

No usar intros obligatorias, cursores personalizados ni scrolljacking. El texto y el CTA no deben depender de que termine una animación. En implementación, pausar animaciones fuera de pantalla y reducir trabajo cuando la pestaña no esté activa. El móvil no debe ser una versión recortada o rota del escritorio.

**Aprobación de diseño:** v1 aprobada según `HANDOFF-IMPLEMENTACION.md`; continuidad confirmada por el usuario el 2026-09-06. Permite construir por bloques, pero no sustituye la validación editorial ni autoriza publicación. El WOW es P0 y su coste debe medirse en código real.

## 5. Stack acordado y avance técnico

Ya existen Astro `^7.3.1`, TypeScript estricto, sitemap, idiomas/fuentes, recursos locales, copy EN/ES, layout global, CSS base, cabecera responsive y primera versión del hero. `src/pages/index.astro` compone cabecera y hero EN. La escena usa HTML/CSS y Web Animations API, sin nuevas dependencias. Revisar su efecto visual antes de construir otras secciones, páginas e integraciones. Ver resultados y límites en `HANDOFF-IMPLEMENTACION.md`.

- Astro estable con generación estática (SSG), TypeScript estricto y HTML semántico.
- CSS nativo con tokens, `clamp()` y container queries donde aporten valor; evitar complejidad sin necesidad.
- Animación mediante CSS y Web Animations API (WAAPI), con scripts TypeScript pequeños y progresivos.
- Sin React, Three.js ni GSAP por defecto. Cualquier excepción exige necesidad concreta, aprobación y medición del coste.
- Imágenes mediante `astro:assets`, dimensiones explícitas, formatos modernos cuando convenga y carga diferida fuera de la primera pantalla. Conservar como maestro el PNG local transparente del logo confirmado en el inventario; no depender innecesariamente de hotlinking.
- Fuentes WOFF2 locales con licencia verificada, pocos pesos y subconjuntos necesarios para inglés y español; iconos SVG limitados a los usados.
- Textos tipados EN/ES en `src/content/copy.ts`. Colecciones para casos solo si se amplía el alcance a páginas internas; no publicar campos incompletos como hechos.
- Node LTS compatible con la versión elegida de Astro, versión fijada, npm y lockfile para instalaciones reproducibles.
- Sitemap generado, metadatos por página y Formspree como servicio externo de formularios; sin backend propio, base de datos ni CMS.
- Playwright, axe y Lighthouse para verificación automatizada, complementados con pruebas manuales.

La IA puede asistir en borradores, traducción, desarrollo y revisión, siempre con control humano. No introducir datos personales, credenciales o material confidencial en servicios sin autorización, ni presentar contenido generado como evidencia real de proyectos.

## 6. SEO, migración e indexación

### Posicionamiento honesto

Priorizar negocios de Florida; mantener agencias como hipótesis secundaria por validar. Comunicar claramente **based in Venezuela, serving Florida businesses**, sin dirección ficticia en Florida, oficina inexistente, ficha de Google Business Profile indebida ni marcado LocalBusiness que sugiera presencia física no real.

Las búsquedas relacionadas con custom website Florida, website redesign, website performance y Astro son hipótesis editoriales, no keywords con volumen o dificultad ya demostrados. Validar intención y encaje comercial antes de ampliar páginas. No crear doorway pages por ciudad, reseñas, estrellas, testimonios, clientes ni cifras inventadas.

### SEO técnico

- Servir texto y enlaces relevantes en HTML indexable, sin depender del movimiento o JavaScript para descubrir contenido principal.
- Usar títulos, descripciones, encabezados y URLs claros, basados en la página y su idioma.
- Definir canonical propio para cada URL indexable final; no canonicalizar español al inglés.
- Configurar `hreflang` recíproco `en-US`, `es-US` y `x-default` a la página inglesa equivalente, solo para pares reales.
- No redirigir automáticamente por IP o idioma del navegador. Mantener elección explícita y enlaces navegables.
- Publicar robots y sitemap con URLs canónicas reales y revisar respuestas HTTP; un 404 previamente detectado en robots/sitemap no demuestra que el sitio no esté indexado.
- Usar datos estructurados Person, Organization y Service solo cuando representen hechos visibles y verificables; `areaServed` puede expresar Florida sin inventar una oficina allí.
- Preparar contenido claro, atribuible y accesible para buscadores y búsqueda asistida por IA. `llms.txt` no es requisito ni garantía de aparición.
- Registrar baseline con GSC si hay acceso y revisar indexación, enlaces entrantes y páginas existentes antes de sustituir contenido.

### Mapa de migración obligatorio

| Entrada anterior | Destino propuesto | Precaución |
| --- | --- | --- |
| `/index-en.html` | `/` | Redirección permanente después de comprobar el hosting |
| Solicitud directa de `/index.html` | `/es/` | Detectar petición externa real, no resolución interna del servidor |
| `/` anteriormente en español | `/` en inglés | Cambio de idioma in situ; no existe redirección que elimine su riesgo SEO |
| Anclas antiguas | Sección equivalente documentada | Mantener IDs compatibles o mapeo explícito cuando sea necesario |
| Otras URLs existentes | Equivalente real o HTTP 404 | Inventariar primero; no redirigir todo a la portada |

En Apache, distinguir la solicitud directa mediante `THE_REQUEST` de la resolución de `DirectoryIndex` o de una reescritura interna. La regla para `/index.html` no debe capturar el archivo usado internamente al servir `/`, ni provocar bucles en `/es/`. Diseñar y probar la configuración sobre el comportamiento real de Namecheap; este plan no instala reglas `.htaccess`.

Los fragmentos `#ancla` no llegan al servidor: no prometer una redirección HTTP basada en ellos. Inventariar enlaces antiguos, conservar IDs útiles y probar los recorridos con fragmentos en el navegador para cada idioma.

Comprobar redirecciones de un salto cuando sea viable, rutas con barra final, canonical, hreflang, query strings y respuestas 404. La raíz cambia de español a inglés: documentar el cambio, medirlo y no prometer ausencia de impacto SEO.

## 7. Formulario, analítica y privacidad

### Formspree

El Contact actual usa el destino existente `https://formspree.io/f/xeoyljzz` en su `action` nativo y en la mejora de cliente. Conserva los campos `name`, `email`, `phone`, `service` y `message`; las etiquetas visibles se traducen desde `copy.ts` sin cambiar esas claves.

La alternativa fija `StickyWhatsApp.astro` usa el enlace autorizado `https://wa.me/584247067872`, en nueva pestaña con `noopener noreferrer`. Es un canal independiente del formulario: no recoge ni transmite el contenido de sus campos. Se oculta durante el hero y se revela al alcanzar Stats; desde allí permanece visible e interactiva incluso al entrar Contact y llegar a `BottomBar`.

- Revisar destinatario, validaciones actuales, antispam, respuestas, límites y automatizaciones antes de cambiar comportamiento.
- El teléfono se implementa como opcional. Validar destinatario, antispam, límites y automatizaciones antes de lanzamiento; no se ha hecho un envío real.
- Traducir labels, ayudas, validaciones y mensajes de éxito/error en inglés y español; no depender solo de placeholders.
- Incluir validación accesible, etiquetas asociadas, foco útil al error y anuncio de estado; verificar email y límites razonables sin rechazar teléfonos internacionales válidos.
- Evitar dobles envíos, informar mientras se procesa, conservar datos ante error y ofrecer correo/WhatsApp como alternativas reales.
- Mostrar éxito solo después de una respuesta de aceptación válida de Formspree. Aceptación de la API no equivale a entrega del correo al propietario.
- Probar primero con mocks: campos inválidos, error de red, rechazo del servicio, límite de solicitudes, doble clic y respuesta aceptada.
- Coordinar una prueba real por idioma con el propietario y confirmar recepción en destino, incluida revisión de spam si es necesario. No generar envíos reales repetidos desde suites automáticas.

### Medición

Plausible es una propuesta de analítica ligera, sujeta a aprobación de cuenta, coste y tratamiento de datos. No comprar, crear una suscripción ni añadir su script por defecto. GSC y Formspree pueden servir al inicio, pero GSC no mide por sí solo sesiones completas o todos los eventos de conversión, y Formspree no cubre todos los canales ni garantiza entrega de correo.

| Evento propuesto | Momento y condición |
| --- | --- |
| `cta` | Activación del CTA principal, con ubicación e idioma como atributos no personales |
| `project_view` | Visualización definida y consistente de un caso real, sin duplicados por simple rerender |
| `form_start` | Primera interacción significativa con el formulario |
| `form_success` | Solo tras aceptación válida de Formspree, no al hacer clic en enviar |
| `form_error` | Error clasificado mediante códigos controlados, sin contenido del mensaje |
| `email` | Clic en enlace de correo; no prueba de contacto enviado o recibido |
| `whatsapp` | Clic en enlace de WhatsApp; no prueba de conversación o venta |

No enviar nombres, emails, teléfonos, mensajes, valores libres de formulario ni URLs con datos personales a analítica. Validar también lo que recoge automáticamente cualquier proveedor. La activación de estos eventos depende de la solución de medición aprobada; no introducir otra herramienta a escondidas.

### Privacidad

Redactar políticas en ambos idiomas a partir del responsable real, tecnologías finalmente usadas, finalidades, proveedores, destinatarios, retención, transferencias y canal de contacto. Evaluar consentimiento y cookies según la configuración y normativa aplicable; no instalar un banner de adorno ni afirmar que nunca se requiere consentimiento. Solicitar revisión profesional cuando corresponda, sin prometer cumplimiento legal absoluto.

## 8. Etapas, entregables y aprobaciones

Las duraciones son estimaciones de esfuerzo activo, no compromisos de entrega en el día. El total orientativo es **6-10 horas** para este alcance si materiales, accesos y aprobaciones están disponibles; revisiones, esperas y ampliaciones pueden extenderlo. El seguimiento de 72 horas, 2 semanas y 30-90 días no forma parte de esas horas de ejecución inicial.

| Etapa | Esfuerzo | Acciones y entregable | Dependencia y aprobación | Estado |
| --- | --- | --- | --- | --- |
| 0. Preparación | 20-40 min | Inspeccionar workspace y repo, inventariar materiales y URLs, validar acceso/estructura de hosting y documentar backup y restauración. Entrega: inventario, riesgos y bloqueos. | Acceso autorizado, materiales y confirmación de datos; no modificar producción. | En curso: repo, plan, retrato, logo y cotejo visual resueltos; rol/stack de Disoca confirmados. Faltan acceso al hosting, document root, backup/restauración y validaciones operativas. |
| 1. Contenido | 40-60 min | Redactar inglés primero y español natural; propuesta, servicios, experiencia y CTAs con fuentes. | Usuario valida afirmaciones, privacidad y recursos publicables. | Textos EN/ES escritos en `src/content/copy.ts`; revisión editorial final pendiente. Disoca es enlace externo en v1. |
| 2. Pencil local | 60-90 min | Portada, referencias de caso, fundador y motion boards en escritorio/móvil. | Aprobación visual registrada en el handoff. | Diseño v1 aprobado y exportado; archivo vigente en `design-preview/pencil-design-new-leadweb.pen`. |
| 3. Construcción | 120-180 min | Astro SSG, contenido tipado, idiomas, componentes, responsive y animación. | Diseño aprobado; continuar por bloques pequeños. | Base, cabecera, hero, `Stats`, Work/DISOCA, Expertise, Founder, Process, Contact, CTA fijo WhatsApp y barra inferior completados localmente. La franja replica los tres datos de escritorio y la síntesis móvil; Work conserva el navegador enmarcado, Expertise mantiene la lista de servicios, Founder presenta el retrato y la biografía de la referencia con una imagen limpia, más cuadrada, borde neón, elevación/sombra, caption con margen/padding proporcional; Process conserva el recorrido de tres pasos de Pencil con H2/lista ordenada, `div` introductorio y aire responsive; Contact incorpora alternativas, LinkedIn/Instagram más cercanos, espacio adicional antes de ubicación, formulario responsive y grupo de servicio alineado; el CTA se revela desde Stats, mantiene el borde orbital de marca con icono/anillo turquesa y queda libre de solapamientos sobre el cierre; `BottomBar` aporta copyright y “With love from VE to USA.”. Continúan Footer ampliado y el resto de la portada. |
| 4. Integraciones | 45-75 min | Integrar Formspree, metadatos, sitemap, redirecciones propuestas, privacidad y medición solo si se aprueba. Entrega: integración probada y decisiones registradas. | Tras aprobación de diseño y disponibilidad de estructura; puede solaparse con etapa 3. Prueba real coordinada con propietario. | Parcial: Contact apunta al endpoint Formspree y maneja el ciclo de interfaz; faltan prueba coordinada, confirmación de recepción, privacidad, metadatos, redirecciones y medición. |
| 5. QA | 60-90 min | Ejecutar tests, revisión manual, capturas y mediciones; resolver fallos P0 y comprobar migración en entorno compatible. Entrega: informe con todos los resultados y excepciones. | Build e integraciones listos; aprobación del resultado y autorización para publicar. | Pendiente. |
| 6. Publicación | 30-45 min | Respaldar, subir contenido de `dist` al document root real, preservar configuración y verificar sitio desplegado. Entrega: acta de despliegue, smoke tests y rollback verificable. | Acceso Namecheap, backup probado y autorización explícita del usuario. | Pendiente; no autorizada por la creación de este plan. |
| 7. Poslanzamiento | Ventanas de seguimiento | Revisar migración e indexación a 72 h; contenido útil a 2 semanas; medición comercial y mejoras a 30-90 días. Entrega: incidencias, métricas disponibles y prioridades. | Sitio publicado, accesos de medición y datos suficientes; nuevas acciones requieren alcance acordado. | Pendiente. |

Cada etapa debe registrar responsable, fecha, estado, entregable/ruta, verificación realizada, aprobación y bloqueos. No marcar como terminada una etapa únicamente porque existe un boceto o un archivo.

## 9. Presupuestos y criterios de aceptación

### Rendimiento

Presupuestos iniciales por carga de página, medidos sobre transferencia comprimida cuando aplique y sin caché caliente:

| Recurso | Presupuesto |
| --- | --- |
| JavaScript total inicial | ≤ 80 KB |
| CSS inicial | ≤ 35 KB |
| Fuentes necesarias inicialmente | ≤ 100 KB |
| Imagen principal del hero, si existe | ≤ 200 KB |
| Transferencia total de la primera pantalla | ≤ 600 KB, incluyendo HTML, estilos, scripts, fuentes, imágenes y terceros cargados inicialmente |

Evitar fuentes/pesos innecesarios, precargas indiscriminadas y scripts de terceros sin aprobación. El hero geométrico no necesita convertirse en video o escena 3D. Toda excepción al presupuesto requiere medición, justificación y acuerdo; el PNG de marca debe conservarse sin forzar un vector inexistente.

- Ejecutar tres mediciones PSI por cada URL clave, tanto en móvil como en escritorio, sobre el sitio público desplegado. Incluir `/`, `/es/`, casos publicados representativos y páginas con diferencias relevantes de recursos o interacción; fijar la lista antes del QA.
- Guardar los tres resultados de cada combinación URL/dispositivo, fecha y contexto; no seleccionar únicamente la mejor ejecución. Meta de mediana de rendimiento ≥ 90 y objetivo de 95 para margen; investigar cualquier caída, variabilidad importante o corrida bajo 90.
- Usar Lighthouse local antes del despliegue como diagnóstico, no como sustituto de medir la URL final. No detectar Lighthouse ni servir una experiencia artificialmente reducida al auditor.
- Core Web Vitals de campo: percentil 75 de LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1. Requieren datos de usuarios y una ventana suficiente; si no existen, declarar que no hay evidencia de campo todavía.
- Lighthouse no demuestra el INP de campo; TBT puede ayudar al diagnóstico, pero no reemplaza INP. Separar los resultados de laboratorio de los de campo.
- No garantizar una puntuación SEO de 100 ni tratar una puntuación automatizada como prueba suficiente de calidad o posicionamiento.

### Pruebas funcionales y accesibilidad

- Build reproducible con versión Node fijada y lockfile; comprobación TypeScript y ausencia de errores críticos de build o consola.
- Playwright para navegación, cambio de idioma, rutas de casos, enlaces de contacto, menú móvil, formulario y estados de error/éxito con mocks.
- axe como apoyo automatizado y revisión manual de teclado, orden y visibilidad del foco, contraste, nombres accesibles, anuncios de estado, zoom y reduced motion.
- Anchos principales aprobados por el usuario: **390, 768, 1024 y 1440 px**. Mantener pruebas intermedias y menores (por ejemplo 360/320 px). Son anchos de revisión; los breakpoints CSS dependen del contenido. Partir de móvil, añadir cambios en 768/1024 cuando sean necesarios y usar 1440 como referencia/límite de contenedor. La cabecera cambia a navegación completa en 1024 px. Revisar zoom y navegadores representativos; evitar desbordamientos o contenido perdido.
- Usar WCAG 2.2 AA como objetivo de revisión, no declarar certificación de accesibilidad por pasar axe.
- Probar formulario real una vez por idioma con coordinación y recepción confirmada por el propietario. Si solo se confirma aceptación de Formspree, registrar entrega como pendiente.
- Verificar enlaces, HTTP 200 de rutas válidas, HTTP 404 de inexistentes, redirecciones sin bucles, canonical, hreflang, sitemap y anclas antiguas.
- Guardar capturas de escritorio/móvil, informes automatizados, resultados manuales y excepciones en documentación de QA durante la implementación. No generar reportes ficticios ni subir capturas con datos personales.

### Seguridad y revisión final

- No exponer secretos, credenciales, archivos de entorno, datos personales no autorizados para publicación, PDF de LinkedIn ni backups en el repositorio público o en el document root. Los datos profesionales de contacto de este plan sí están autorizados para el sitio.
- Aplicar cabeceras de seguridad compatibles con el hosting y el sitio. Diseñar y probar CSP para scripts reales, estilos y los mecanismos `form-action`/`connect-src` que Formspree necesite; no bloquear el formulario con una política copiada sin validar.
- Revisar dependencias y errores de integración sin asumir que un sitio estático carece de superficie de riesgo.
- Confirmar que producción no contiene `noindex`, canonical de staging, enlaces localhost ni reglas de robots que bloqueen inadvertidamente el sitio.
- Auditar el contenido realmente desplegado, no solo el build local o las capturas de Pencil.

## 10. Publicación en Namecheap y rollback

El hosting Namecheap ya recibe un build estático. No migrar DNS, nameservers ni registros MX; preservar la operación del correo y la configuración existente.

1. Identificar el document root efectivo del dominio en el hosting y la configuración Apache real; no asumir que cualquier carpeta `public_html` es la correcta.
2. Inventariar archivos actuales, `.htaccess`, redirects, rutas especiales y dependencias del hosting. Crear backup fechado fuera del directorio público y verificar que puede restaurarse.
3. Preparar un build aprobado. Subir el **contenido de `dist`** al document root validado, no una carpeta `dist` adicional salvo configuración explícita del hosting.
4. Preservar archivos de configuración y servicios ajenos; revisar cualquier eliminación o sustitución. No hacer una limpieza global ni una regla blanket rewrite que convierta todas las rutas inválidas en la portada con HTTP 200.
5. Instalar únicamente redirecciones y manejo de 404 revisados para ese entorno. Probar especialmente `THE_REQUEST`, `DirectoryIndex`, `/`, `/es/`, `/index.html` y `/index-en.html`.
6. Ejecutar smoke tests sobre HTTPS en el dominio real: ambas lenguas, casos, privacidad, 404, recursos, contacto, redirecciones y robots/sitemap. Ejecutar las mediciones PSI acordadas y conservar resultados.
7. Si aparecen bloqueos P0 como sitio inaccesible, bucles, rutas críticas rotas o pérdida de contacto, restaurar el backup y configuración anteriores con autorización operativa acordada. Verificar la restauración y documentar el incidente antes de reintentar.

Registrar fecha, build publicado, archivos de configuración afectados, ubicación privada del backup, procedimiento de rollback y pruebas finales. Los backups nunca deben quedar descargables desde la web.

## 11. Poslanzamiento

### Primeras 72 horas

- Revisar disponibilidad, errores, redirecciones, solicitudes 404, formulario y recepción real de contactos.
- Verificar propiedad de GSC si está autorizado, enviar sitemap e inspeccionar URLs relevantes; registrar limitaciones si no hay acceso.
- Seguir el cambio de idioma de la raíz, indexación y canonical elegida por Google sin prometer indexación inmediata o recuperación automática.
- Comparar datos disponibles con el baseline y corregir incidencias técnicas antes de ampliar contenido.

### A las 2 semanas

- Proponer páginas de servicios solo con intención y contenido propio suficientes, evidencia real y versiones lingüísticas coherentes.
- Publicar artículos útiles únicamente si existen temas, experiencia y capacidad editorial reales; no abrir un blog vacío.
- Obtener enlaces legítimos mediante relaciones y proyectos autorizados, no paquetes de enlaces, directorios ficticios ni páginas duplicadas por ciudad.

### A los 30-90 días

- Evaluar consultas orgánicas, visitas si hay analítica aprobada, interacciones con casos y contactos aceptados frente a contactos realmente recibidos y cualificados.
- Priorizar mejoras de copy, evidencia, servicios y fricción del formulario según datos; distinguir clics de ventas y evitar atribución no demostrada.
- No lanzar pruebas A/B sin muestra suficiente ni declarar ganadores con pocos contactos. Usar revisión cualitativa y cambios secuenciales documentados cuando el volumen sea bajo.
- Revisar CWV de campo solo si ya existe cobertura suficiente; ajustar metas y backlog según evidencia, sin garantías de ranking o conversión.

## 12. Fuera de la primera versión

- Blog vacío, CMS, base de datos, autenticación y paneles sin una necesidad aprobada.
- Chatbot, escenas 3D pesadas, laboratorio de efectos extenso y dependencias visuales desproporcionadas.
- Páginas duplicadas por ciudad o contenido masivo generado para simular cobertura local.
- Migración de DNS/MX, cambio de hosting, compras o suscripciones no aprobadas.
- Nuevos casos, testimonios, clientes, métricas o garantías sin evidencia y permiso.

## 13. Registro y reglas para agentes futuros

Leer este plan antes de actuar y revisar el estado real de archivos, Git y GitHub. No asumir que el workspace sigue vacío: el usuario y otros agentes pueden trabajar en paralelo. No revertir cambios ajenos. Si existe un conflicto directo de edición o un remoto que apunte a otro repositorio, informar y pedir instrucciones sin reemplazarlo.

Usar herramientas Pencil para documentos `.pen`; nunca leerlos ni editarlos por filesystem. Continuar Astro conforme al diseño aprobado, por bloques pequeños y verificables. No hacer commits, push o publicaciones sin permiso explícito. No modificar configuración global/local de Git ajena al remoto autorizado ni incorporar secretos en documentación o logs públicos.

No repetir investigación ya disponible sin necesidad; separar siempre dato confirmado, hipótesis, pendiente y resultado medido. Registrar las etapas con sus salidas reales y bloqueos, no con promesas.

Las filas siguientes conservan la secuencia histórica. Las notas iniciales de aprobación pendiente, ruta antigua o autorización limitada al plan quedaron superadas por las entradas de continuidad y el handoff vigente.

| Fecha | Frente | Estado y salida | Pendiente / bloqueo |
| --- | --- | --- | --- |
| 2026-09-06 | Inspección inicial | Workspace contenía únicamente `.git`; sin commits y sin remotos. GitHub no encontraba el repo objetivo; cuenta autenticada `ramon-zerpa`. | Volver a inspeccionar antes de nuevas operaciones por trabajo paralelo. |
| 2026-09-06 | Repositorio y plan | Creado repo público `ramon-zerpa/leadweb-dev`; agregado `origin` al destino previsto tras verificar ausencia de remotos. GitHub sigue vacío, sin commits ni push; `PLAN-LEADWEB.md` permanece local. | La actualización actual solo modifica este Markdown; no autoriza cambios en Git ni otros archivos. |
| 2026-09-06 | Materiales confirmados | Usuario confirma el retrato exacto `generated-image.png`, recibido/leído a 1024x1024, y el logo maestro `LWD Transparent Logo.png`, leído a 400x400 con transparencia y el mismo símbolo. Rutas completas en sección 2. | Revisar recortes y uso visual final; las rutas y el maestro ya no son bloqueos. |
| 2026-09-06 | Exportaciones de diseño | Según actualización recibida, Pencil exportó `design-assets/ZGJdX.png` como retrato y `design-assets/rRfF3.png` como logo dentro del workspace. Esta edición no modifica esas copias. | Cotejar visualmente ambas copias con sus fuentes al terminar el diseño. |
| 2026-09-06 | Disoca | Proyecto más reciente del usuario; confirmados diseño y desarrollo con Astro, con crédito Leadweb coincidente en el footer. Usuario autoriza el uso en boceto al aportar el proyecto. | Permiso final del cliente, recursos publicables, detalle editorial y métricas no comprobados. No atribuir indicadores de su negocio al desarrollo ni inferir clientes de Florida; tiene operaciones en varios países de América Latina. |
| 2026-09-06 | Preparación | Inventario actualizado con fuentes locales, exportaciones y confirmaciones de Disoca; etapa 0 sigue en curso, no terminada. | Hosting, document root, backup/restauración, cotejo visual final y demás validaciones pendientes de etapa 0. |
| 2026-09-06 | Diseño | En curso por el agente principal en `/C:/Users/user/.pencil/documents/81739a65-4f78-49f6-8622-9ed4d5e0df48/pencil-new.pen`, accesible exclusivamente por MCP. Desktop `WRA6V` en progreso, no aprobado. Esta actualización no accede ni modifica el `.pen`. | Completar escritorio/móvil y motion boards, validar visualmente fuentes y obtener aprobación explícita del usuario. |
| 2026-09-06 | Implementación, QA y publicación | Pendientes; no ejecutados por la tarea administrativa de este plan. | Aprobación del diseño, datos necesarios, accesos y autorización de despliegue. |
| 2026-09-06 | Revisión tras corte de conexión | Confirmados 10 tableros de diseño y uno de referencias en Pencil, 10 vistas WebP, PDF de revisión y las dos copias de assets. La propuesta v1 incluye portada y caso EN en escritorio/móvil, estados y cabeceras ES. | Aprobación visual; traducción completa de páginas y estados, política de privacidad y validación editorial para publicación. |
| 2026-09-06 | Cierre visual v1 | Cotejados retrato y logo; revisados layouts, copias y recortes. Corregidos contrastes secundarios. Solo quedan recortes intencionales de capturas. Entrega documentada en `DESIGN-HANDOFF.md`. | No se realizaron pruebas funcionales, mediciones PageSpeed ni verificación de accesibilidad en navegador. |
| 2026-09-06 | GitHub verificado | `ramon-zerpa/leadweb-dev` existe y es público; permanece vacío. Documentación y exportaciones son archivos locales sin commit. | No se ha realizado commit ni push; requerir autorización antes de publicarlos. |
| 2026-09-06 | Continuidad confirmada | El usuario confirma Astro iniciado y autoriza actualizar los Markdown y continuar con una etapa acotada. Diseño v1 aprobado según handoff; Pencil vigente confirmado por MCP dentro de `design-preview/`. | Sin commits, push ni publicación. |
| 2026-09-06 | Base de implementación | Bloque completado: layout global, estilos base y muestra mínima. Build y tipos sin errores; navegador en cuatro anchos y variantes EN/ES verificados. Corregida colisión de redirects `.html` en el build; reglas de Apache pendientes. | Siguiente bloque: cabecera responsive. Resultados y límites en `HANDOFF-IMPLEMENTACION.md`; sitio completo pendiente. |
| 2026-09-06 | Responsive y cabecera | Usuario aprueba 390/768/1024/1440 como anchos principales. Nav implementado y verificado en EN/ES, teclado, enlaces y cambio de idioma mediante rutas temporales retiradas. Build final sin errores. | Siguiente bloque: hero. Activar destinos del Nav al construir sus secciones/páginas. Sin commit, push ni publicación. |
| 2026-09-06 | Primera versión del hero | Hero EN integrado; componente ES verificado mediante ruta temporal retirada. Transición de 800 ms, teclado, anchos principales y adicionales, movimiento reducido simulado y scripts bloqueados comprobados. Build final de una página sin errores; hero JS de 1.360 bytes minificados. | Usuario pide permanecer en el hero y elevar el efecto WOW. Remotion en evaluación, sin adopción. No avanzar otras secciones; cierre visual, PageSpeed y sitio completo pendientes. Sin commit, push ni publicación. |
| 2026-09-06 | Nueva propuesta de movimiento | Usuario autoriza probar entrada expresiva con ambiente posterior y fondo ligado al puntero. Implementados 2,4 s de secuencia, flotación/luz, repetición y pausa, adaptación móvil y movimiento reducido. Build final sin errores; hero JS 6.195 bytes minificados, sin dependencias nuevas. Pruebas y límites en sección 13 del handoff técnico. | Valoración visual del usuario pendiente. Permanecer en el hero; sin Remotion, cambios en Pencil, commits, push ni publicación. |
| 2026-09-06 | Titular typewriter | Por solicitud del usuario, última línea con escritura/borrado y cursor: “Win trust.”, “Get leads.”, “Sell more.”; tres frases ES preparadas. Pausa/repetición compartidas, reserva de altura y fallback accesible. Ciclos, suspensión, movimiento reducido simulado y 320/390/768/1024/1440 verificados. Build de una página sin errores; typewriter inline de 1.428 bytes, sin dependencias nuevas. Detalles y límites en sección 14 del handoff técnico. | Valorar el hero antes de avanzar. Sin cambios en Pencil, commits, push ni publicación. |
| 2026-09-06 | Firma de marca y fondo | Usuario valora positivamente el typewriter. Implementada firma “Lead Web” a 0,75rem y `</Dev_>` más grueso, del mismo ancho y con degradado turquesa–azul, centrada con el logo. Revisada en cinco anchos y menú móvil; build sin errores. Diagnóstico y propuestas para los cortes de luz registrados en sección 15 del handoff técnico. | Elegir/refinar solución del fondo y valorar la firma. Pausa/detención debe conservarse; repetición es opcional. Sin cambios en Pencil, commits, push ni publicación. |
| 2026-09-06 | Fondo y neón | Firma aprobada; usuario autoriza fondo amplio/desvanecido y pausa única. Añade partículas de neón más visibles en CTA superior/badge y corrige la luz a circular. Implementado con CSS/SVG y control compartido, sin dependencias. Navegador EN/ES, pausa, recorrido continuo, reduced motion simulado y fallback comprobados. Build final: 15 archivos, cero errores y una página. Detalles en sección 16 del handoff técnico. | Revisión visual del resultado; permanecer en el hero. Sin cambios en Pencil, commits, push ni publicación. |
| 2026-09-06 | Brillo difuso y degradado de marca | Usuario aporta video del chat de Pencil para sustituir el borde que parecía un “gusanito”; añade guion bajo titilante y extensión del degradado aprobado. Implementados contornos finos con halo difuso CSS, firma con cursor sin desplazamientos y typewriter con degradado. Movimiento continuo, pausa/reanudación, movimiento reducido simulado, menú móvil y EN/ES en 320/390/768/1024/1440 comprobados. Build final: 15 archivos, cero errores y una página. Detalles en sección 17 del handoff técnico. | Nueva valoración visual pendiente; permanecer en el hero. Sin cambios en Pencil, commits, push ni publicación. |
| 2026-09-06 | Hover y typewriter 700 | Usuario valora muy positivamente el brillo/degradado anterior. Se aplican hover turquesa al menú y al idioma alternativo, barra vertical con espacios visuales iguales y peso 700 real en el typewriter. EN conserva tamaño; línea ES un 2 % menor solo en escritorio para mantener una línea. Responsive EN/ES, hover, idioma actual y menú móvil comprobados. Build: 15 archivos, cero errores y una página. Sección 18 del handoff técnico. | Permanecer en header/hero; sin cambios en Pencil, commits, push ni publicación. |
| 2026-09-06 | Favicon y primer checkpoint | Usuario solicita favicon con el logo, firma más cerca y commit/push. Favicon PNG/ICO derivado del maestro; gap de marca a 4/8 px. Recursos servidos con HTTP 200, alineación y responsive verificados; build de una página sin errores. Checkpoint autorizado del proyecto completo en `master`/`origin`. Sección 19 del handoff técnico. | Pausa acordada para continuar después. Publicación en hosting y demás secciones pendientes. |
| 2026-09-06 | Escena única y eyebrow | Usuario descarta el interés por la segunda vista Structure. Retirado el rótulo “01 / Structure → Experience”; escena ampliada hasta 628 px y columna derecha mayor desde 1024 px. Eyebrow EN actualizado a “WEBSITES ENGINEERED FOR FLORIDA BUSINESSES” y 4 px más cerca del H1. Responsive 320/390/768/1024/1440 y build verificados. Sección 20 del handoff técnico. | Permanecer en hero; no se autorizó commit/push ni despliegue para este ajuste. |
| 2026-09-06 | Franja de experiencia | Tras la autorización de avanzar, se implementa `Stats.astro` bajo el hero. Usa los datos centralizados, `dl`, título de sección para tecnologías de asistencia y hooks estables. Escritorio conserva 13+, “Since 2015 / U.S. collaboration” y VE / FL; 768–1023 px los apila en tres columnas; móvil usa los dos datos y etiquetas concisas de la maqueta. Build sin errores; detalles en la sección 21 del handoff técnico. | Siguiente bloque: Work. Sin commit/push ni despliegue autorizados para estos cambios locales. |
| 2026-09-06 | Trabajo seleccionado / DISOCA | Tras la siguiente autorización, `Work.astro` reproduce el bloque Selected work desde los frames Pencil `rXUQC` y `lxDdj`, sin modificar el `.pen`. Usa una sección H2, artículo H3, navegador enmarcado y `Picture` con variantes AVIF/WebP diferidas de la previsualización local. Work del header y “Explore my work” enlazan al bloque; el caso abre `https://disoca.com/` con atributos seguros. Build sin errores; detalles en la sección 22 del handoff técnico. | Siguiente bloque: Expertise. Sin commit/push ni despliegue autorizados para estos cambios locales. |
| 2026-09-06 | Expertise / Servicios | `Expertise.astro` reproduce los frames Pencil `fRzH5` y `xlhDV`, sin modificar el `.pen`: superficie oscura, introducción editorial y lista de cuatro servicios. Usa H2, lista con H3 por servicio, números/flechas decorativos y CSS responsive sin JavaScript. Expertise del header ya enlaza al bloque. Build sin errores; detalles en la sección 23 del handoff técnico. | Siguiente bloque: Founder. Sin commit/push ni despliegue autorizados para estos cambios locales. |
| 2026-09-07 | Navegación interna y checkpoint | Los enlaces a Work, Expertise y “Explore my work” desplazan con suavidad, conservan la URL sin hash y respetan movimiento reducido. La autorización explícita del usuario cubre commit y push de todos los cambios locales pendientes tras la verificación. | Siguiente bloque: Founder. Despliegue, DNS y correo continúan fuera de alcance. |
| 2026-09-07 | Founder / Ramón Zerpa | `Founder.astro` reproduce los frames Pencil `pth2H` y `WM6UC` sin modificar el `.pen`: retrato local servido con `Picture` en AVIF/WebP, caption, H2, biografía, formación y enlace seguro a LinkedIn. About ya apunta a la sección y reutiliza el scroll sin hash tanto en escritorio como en menú móvil. Se revisó visualmente en 1440, 1024, 768 y 390 px; `npm run build` pasó con 20 archivos y cero diagnósticos. | Siguiente bloque: Process. Sin autorización de commit/push para Founder ni despliegue. |
| 2026-09-07 | Retrato dinámico / Founder | Por aprobación expresa, el retrato suma revelado editorial de una sola vez, barrido diagonal de marca, halo turquesa–azul ambiental y foco circular con puntero preciso. Es una pauta distinta de la escena del hero, CSS/Web Animations API sin Remotion ni dependencias. La sección contiene los halos para no crear desbordamiento horizontal en móvil. `npm run build` pasó con 21 archivos y cero diagnósticos; CUA comprobó la entrada/foco en 1440 px, la composición en 1024/768/390 px y la ausencia de overflow. | Siguiente bloque: Process. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Marco de cristal / Founder | Por aprobación expresa y referencias de Windows Live Messenger, el retrato se convierte en un objeto de interfaz: bisel prismático, reflejos internos, arista clara y el contorno de neón turquesa/cian/azul ya aprobado en hero. Reutiliza `NeonBorder` a 9 s, sin Remotion ni dependencias; no reproduce el verde ni la interfaz retro. Conserva la entrada editorial, el foco del puntero y la ausencia de overflow. `npm run build` pasó con 21 archivos y CUA verificó marco, órbita, puntero y responsive. | Siguiente bloque: Process. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Process / Clear by design | Tras autorizar el siguiente bloque, `Process.astro` reproduce los frames Pencil `zJRVO` y `IfhHN` sin modificar el `.pen`: H2, lista ordenada con tres H3, pasos numerados y superficie paper. Desde 1024 px usa encabezado dividido y tres columnas; en 768/390 px se apila. `npm run build` pasó con 22 archivos y CUA comprobó 1440/1024/768/390 px sin overflow ni errores de consola. | Siguiente bloque: Contact. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Refinamiento de Founder y Process | Por solicitud del usuario, se retiran vidrio, reflejos, aura, barrido y foco de puntero del retrato. Solo queda `NeonBorder` de 8 s directamente en la imagen. El H2 de Process usa ancho intrínseco desde 1024 px para mantener “A clear process. No black box.” en una línea. Build con 21 archivos y CUA en 1440/1024/768/390 px confirmaron el resultado sin overflow. | Siguiente bloque: Contact. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Retrato más cuadrado y hover | Founder pasa a relación `1 / 1.08` para reducir su altura, el halo de `NeonBorder` aumenta a 8 px y se separa 2 px para mayor presencia. En hover de puntero preciso y sin movimiento reducido, la foto sube 8 px, escala 1,2 % y proyecta sombra inferior. Build con 21 archivos; CUA confirmó el hover en 1440 px y sin overflow en 1024/768/390 px. | Siguiente bloque: Contact. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Aire de Founder y Contact | Se aumenta a 1,25 rem el espacio entre retrato y caption. `Contact.astro` reproduce `y2H57q`, `a897h` y los estados `z8NPQ` sin cambiar Pencil: dos columnas desde 1024 px, pila menor, alternativas email/WhatsApp, campos accesibles y acción Formspree con fallback nativo. Header y hero ya apuntan a Contact sin hash. Build con 22 archivos; CUA comprobó 1440/1024/768/390 px sin overflow, consola limpia y foco de destino tras CTA. No se envió un formulario real. | Siguiente bloque: Footer. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Servicio y WhatsApp fijo | El `fieldset` de “What do you have in mind?” elimina su padding implícito de 12 px y recupera 10 px entre label y radios, igualando los demás campos. `StickyWhatsApp.astro` suma el enlace `wa.me` autorizado en una pieza fija con icono propio, borde orbital/neón y degradado turquesa–cian–azul, sin verde; se vuelve no interactiva al entrar Contact. Build con 23 archivos; CUA comprobó 1440/1024/768/390 px sin overflow, alineación exacta a 390 px, ocultamiento en Contact y consola limpia. No se abrió WhatsApp ni se envió formulario. | Siguiente bloque: Footer. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Caption, redes y CTA persistente | Founder recibe `margin-top: 1rem` y `padding: 0 2% 0 2%` en su caption a todos los anchos. Contact muestra LinkedIn e Instagram después de correo/WhatsApp, con destinos seguros. El CTA fijo deja de ocultarse y conserva interacción dentro de Contact. Build con 23 archivos; CUA confirmó 1440/1024/768/390 px sin overflow, valores de caption, dos enlaces sociales, CTA visible/activo y consola limpia. No se abrieron destinos externos ni se envió formulario. | Siguiente bloque: Footer. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | CTA desde Stats y barra inferior | El CTA de WhatsApp adopta un disco `#0b1e21` con borde/icono turquesa y se oculta durante el hero; aparece al cruzar `Stats` y continúa hasta el cierre. `BottomBar.astro` incorpora copyright y `// Turning coffee into clean code and ideas into momentum.`, con dos columnas desde 768 px y área segura para el CTA en móvil. Las redes de Contact quedan 0,5 rem más cerca de sus alternativas. Build con 24 archivos; CUA verificó 1440/1024/768/390 px sin overflow, CTA oculto en hero, visible desde Stats, cierre sin solapamiento y consola limpia. No se abrieron destinos externos ni se envió formulario. | Siguiente bloque: Footer ampliado. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Semántica y microajustes | Process elimina su `header` interno: conserva H2 y lista ordenada dentro de un `div` neutro, con 32–40 px de aire superior en móvil/tablet. Contact suma 0,5 rem antes de la ubicación. El CTA usa una marca sólida/anillo blancos de 26/48 px, conservando el borde orbital de marca. BottomBar pasa a “With love from VE to USA.” sin prefijo. Se reinicia el servidor para purgar CSS retenido; build con 24 archivos y CUA en 1440/1024/768/390 confirma semántica, espaciado, sin overflow y sin solapamiento. | Siguiente bloque: Footer ampliado. Sin autorización de commit/push ni despliegue. |
| 2026-09-07 | Icono turquesa y release | Por solicitud del usuario, la marca sólida y el anillo interior del CTA vuelven al turquesa del logo; se conserva el disco ink de 48 px y el borde orbital. Build de 24 archivos, `git diff --check` y CUA a 390 px pasan; el usuario autoriza commit y push de todas las entregas locales verificadas. | Crear checkpoint y sincronizar con `origin/master`; sin despliegue al hosting. |

Actualizar este registro al cerrar cada etapa con fecha, entregable, verificaciones, aprobación y bloqueos concretos. Ante falta de evidencia o acceso, describir la limitación en vez de declarar una etapa completada.
