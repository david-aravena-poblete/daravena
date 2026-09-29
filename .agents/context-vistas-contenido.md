# Vistas de Contenido: Frontend, Testing, Contexto

Las 3 vistas (`/frontend`, `/testing`, `/contexto`) son páginas estáticas con **código repetido intencionalmente**. Cada archivo es independiente. No comparten componentes.

## Archivos

- `app/frontend/page.tsx` → componente `FrontendPage`
- `app/testing/page.tsx` → componente `TestingPage`
- `app/contexto/page.tsx` → componente `ContextoPage`

Se enlazan desde las tarjetas de la landing (`app/page.tsx`).

## Estructura de cada archivo

```
1. Variables de contenido (markdown estático)
2. Componentes auxiliares (MarkdownFileLabel + MarkdownCard)
3. Componente de página exportado
```

### 1. Variables de contenido

```tsx
const markdown1 = `...markdown aquí...`;
const markdown2 = `...markdown aquí...`;
```

Cada variable alimenta un slide del Carousel. Se pueden agregar más (`markdown3`, etc.).

**Los backticks dentro del markdown deben escaparse:** `\`código\`` en vez de `` `código` ``.

### 2. Componentes auxiliares

`MarkdownFileLabel` — etiqueta visual "MD" en la esquina de cada card.

`MarkdownCard` — envuelve el markdown en una `Card` con scroll vertical (max 320px), scrollbar oculto y drag-scroll.

Se repiten textualmente en los 3 archivos.

### 3. Componente de página

```
Container
├── Section → Botón "Volver" (router.back)
└── Stack
    ├── Stack → Heading + Text (encabezado de la vista)
    └── Carousel (controls="outside")
        ├── Card (slide 1)
        │   ├── Card.Header → Heading + Text (título/descripción del ejemplo)
        │   └── Card.Body → MarkdownCard con {markdown1}
        └── Card (slide 2)
            ├── Card.Header → Heading + Text
            └── Card.Body → MarkdownCard con {markdown2}
```

## Qué cambia entre las 3 vistas

- El contenido de `markdown1` y `markdown2`
- El nombre del componente exportado
- El `Heading` y `Text` del encabezado
- El `Heading` y `Text` de cada `Card.Header`

Todo lo demás es idéntico.
