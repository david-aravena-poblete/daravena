# Implementación técnica: `/soy-frontend`

- Ruta y archivo: `app/soy-frontend/page.tsx`.
- La página usa `Section`, `Container`, `Stack`, `Heading` y `Text` de `@tefi/design-system`.
- Un arreglo `projects` contiene título, descripción y URL para Timeline, Tefi Design System y Aprender a leer. Un `map` muestra cada proyecto como `article` en una lista vertical.
- Cada artículo muestra título y descripción y luego un `iframe` con `title`, `loading="lazy"`, ancho completo, `height: 100vh` y `scrolling="no"`.
- La card de desarrollo web en `app/page.tsx` enlaza a esta ruta.
- Los iframes son de otros orígenes: la página no puede medir su DOM. `100vh` y `scrolling="no"` no garantizan que el contenido remoto completo quepa; se requiere que el sitio remoto adapte su altura, envíe su altura con `postMessage` validado, o que la vista se sirva desde el mismo origen.
