"use client";

import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Card,
  Carousel,
  Container,
  Heading,
  Icon,
  Inline,
  Markdown,
  Section,
  Stack,
  Text,
} from "@tefi/design-system";

const markdown1 = `
================================================================================
# Funcionalidad 1: Control Deslizante del Timeline (Slider)
================================================================================

## Nivel 1: Requerimiento del Cliente
Necesito una vista en la que el usuario deslice un control hacia la derecha o izquierda para avanzar o retroceder en los años del timeline, con la intención de actualizar el contenido que muestra la vista correspondiente.

## Nivel 2: Especificación de Usuario
> **Como** visitante del sitio web,  
> **quiero** hacer clic o arrastrar un indicador a lo largo de una línea de tiempo horizontal,  
> **para** explorar cronológicamente la historia de David Aravena viendo cómo se actualizan al instante las fotos y los textos según el año seleccionado.

## Nivel 3: Especificación Técnica
* **Componente:** \`TimelineSlider\` que implementa un elemento nativo \`<input type="range">\`.
* **Estado:** Hook \`useState\` para controlar \`selectedYear\`.
* **Arquitectura:** El estado se aloja en el componente contenedor \`TimelineView\`. Desarrollo en React puro (JavaScript JSX, sin TypeScript).

## Nivel 4: Flujo
1. El usuario arrastra el control del \`<input type="range">\`.
2. La acción dispara el evento nativo \`onChange\`.
3. La función manejadora captura el valor mediante \`evento.target.value\`.
4. Se convierte el valor capturado a número entero.
5. Se invoca \`setSelectedYear(nuevoAño)\` para actualizar el estado del contenedor.
6. React detecta la mutación de estado, re-renderiza, filtra la información por el año correspondiente y propaga los datos actualizados a la interfaz.

## Nivel 5: Pseudocódigo
\`\`\`text
Definir funcion handleYearChange(evento):
    nuevoAño = convertir_a_numero(evento.target.value)
    setSelectedYear(nuevoAño)

// Dentro del retorno del componente TimelineSlider:
<input 
    type="range" 
    value={selectedYear} 
    onChange={handleYearChange} 
/>
\`\`\`


================================================================================
# Funcionalidad 2: Actualización del Contenido (Galería de Imágenes y Texto)
================================================================================

## Nivel 1: Requerimiento del Cliente
Cada vez que se seleccione una época distinta en el timeline, la sección inferior de la pantalla debe actualizarse de forma automática e inmediata para mostrar la información correspondiente a ese año de la vida de David Aravena. Esta sección debe incluir fotografías y texto narrativo.

## Nivel 2: Especificación de Usuario
> **Como** visitante del sitio web,  
> **quiero** ver que las imágenes y la historia cambian al instante al seleccionar o soltar un año en el timeline,  
> **para** explorar el relato de esa época con las fotos organizadas en una galería a un lado y el texto explicativo al otro de manera clara y ordenada.

## Nivel 3: Especificación Técnica
* **Componente:** Componente funcional \`EraContent.jsx\`.
* **Props:** Recibe la prop \`datosEpoca\` con el formato \`{ year, title, content, images: [] }\`.
* **Estructura de Datos:** Colección de URLs en el archivo local \`timelineData.js\` para renderizar múltiples fotos.
* **Arquitectura Visual:** Distribución mediante CSS Grid o Flexbox en dos columnas: una para el mapeo iterativo de imágenes y otra para la inyección de texto.

## Nivel 4: Flujo
1. El estado \`selectedYear\` en el componente padre (\`TimelineView\`) cambia debido a la interacción del usuario con el slider.
2. El componente padre busca en la colección local (\`timelineData.js\`) el objeto de la historia que coincide con el nuevo año.
3. El componente padre inyecta este nuevo objeto a través de la prop \`datosEpoca\` hacia el componente hijo \`EraContent\`.
4. \`EraContent\` recibe las nuevas props e inicia el re-renderizado.
5. Toma el arreglo \`datosEpoca.images\` y ejecuta un método \`.map()\` para generar un elemento \`<img>\` en el DOM por cada fotografía.
6. Toma los strings \`datosEpoca.title\` y \`datosEpoca.content\` y reemplaza el texto de los nodos HTML correspondientes (\`<h2>\` y \`<p>\`).
7. El navegador actualiza la pantalla.

## Nivel 5: Pseudocódigo
\`\`\`text
Componente EraContent (recibe props: datosEpoca):

    Si datosEpoca es nulo o indefinido:
        Retornar ( Parrafo: "Selecciona un año para ver la historia..." )

    Retornar (
        Contenedor_Grid_Dos_Columnas:
            
            // Columna Izquierda: Galería de fotos
            Contenedor_Galeria:
                Iterar sobre datosEpoca.images usando map(imagenUrl, indice):
                    Retornar (
                        Imagen:
                            propiedad key = indice
                            propiedad src = imagenUrl
                            propiedad alt = "Recuerdo de " + datosEpoca.year
                    )
            
            // Columna Derecha: Texto de la historia
            Contenedor_Texto:
                Titulo_Principal: (texto = datosEpoca.title)
                Parrafo_Historia: (texto = datosEpoca.content)
    )
\`\`\`
`;

const markdown2 = ``;

function MarkdownFileLabel() {
  return (
    <Box
      background="primary"
      text="inverse"
      radius="md"
      inside="xs"
    >
      <Inline
        align="center"
        gap="xs"
      >
        <Icon name="fileCode" />

        <Text
          color="inverse"
          weight="medium"
        >
          MD
        </Text>
      </Inline>
    </Box>
  );
}

function MarkdownCard({
  children,
}: {
  children: string;
}) {
  return (
    <Card>
      <Card.Body>
        <Box
          maxHeight="320"
          scroll="vertical"
          scrollbar="hidden"
          dragScroll
        >
          <Inline justify="end">
            <MarkdownFileLabel />
          </Inline>

          <Markdown>
            {children}
          </Markdown>
        </Box>
      </Card.Body>
    </Card>
  );
}

export default function FrontendPage() {
  const router = useRouter();

  return (
    <Container>
      <Section>
        <Inline justify="start">
          <Button
            variant="link"
            onClick={() => router.back()}
          >
            <Icon name="arrowLeft" />
            <Text>Volver</Text>
          </Button>
        </Inline>
      </Section>

      <Stack gap="md">
        <Stack gap="xs">
          <Heading>
            Mi trabajo como frontend
          </Heading>

          <Text>
            Yo no escribo codigo. Escribo contexto. Puedo dirigir a una inteligencia artificial paso a paso mediante mi metodología de 5 niveles para que sea capaz de construir y mantener una interfaz web diseñada para resolver una parte de tu proyecto o negocio.
          </Text>
        </Stack>

        <Carousel controls="outside">
          <Card>
            <Card.Header>
              <Heading>
                Proyecto Timeline
              </Heading>

              <Text>
              Este contexto tiene los 5 niveles necesarios para que una IA pueda generar una línea de tiempo interactiva que muestra informacion correspondiente a la fecha (año) seleccionada por el usuario.
              </Text>
            </Card.Header>

            <Card.Body>
              <MarkdownCard>
                {markdown1}
              </MarkdownCard>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <Heading>
                Proyecto Tefi Design System
              </Heading>

              <Text>
                Este es el contexto necesario para que una IA pueda dar diseño (color y forma) a una pagina web haciendo uso de una configuracion diseñada a pedido por el cliente.
              </Text>
            </Card.Header>

            <Card.Body>
              <MarkdownCard>
                {markdown2}
              </MarkdownCard>
            </Card.Body>
          </Card>
        </Carousel>
      </Stack>
    </Container>
  );
}
