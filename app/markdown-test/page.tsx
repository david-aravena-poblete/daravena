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
## Funcionalidad 1: Control Deslizante del Timeline (Slider)
**Nivel 1: Requerimiento del Cliente**
Al mover el elemento a la derecha se avanza en la vida de David Aravena y al mover el elemento hacia la izquierda se va a los años anteriores. Al cambiar de época en el timeline debe cambiar el contenido.

**Nivel 2: Especificación de Usuario**
Al hacer clic y arrastrar el indicador del timeline horizontal, la imagen y el texto principal se actualizan instantáneamente para mostrar la historia de ese año específico. La interacción debe sentirse fluida.

**Nivel 3: Especificación Técnica**
* **Componente:** Se requiere un componente \`TimelineSlider\` que contenga un \`<input type="range">\`. 
* **Estado:** Su evento \`onChange\` modificará un estado local llamado \`selectedYear\` (creado con el hook \`useState\`).
* **Arquitectura:** Este estado estará alojado en el componente padre \`TimelineView\`. Se hará en React puro, sin TypeScript.

**Nivel 4: Flujo**
1. El usuario arrastra el control del \`<input type="range">\`.
2. Esa acción dispara el evento \`onChange\`.
3. Una función manejadora captura la información de esa acción extrayendo el valor (\`evento.target.value\`).
4. La función convierte ese valor a un formato de número entero.
5. Se envía ese número a la función \`setSelectedYear()\` para actualizar el estado.
6. React detecta el cambio, vuelve a renderizar, filtra la información por el nuevo año y la envía al componente visual para que actualice la pantalla.

**Nivel 5: Pseudocódigo**
\'\'\'text
Definir funcion handleYearChange(evento):
    nuevoAño = convertir_a_numero(evento.target.value)
    setSelectedYear(nuevoAño)

// Dentro del retorno del componente TimelineSlider:
<input 
    type="range" 
    value={selectedYear} 
    onChange={handleYearChange} 
/>
\'\'\'


## Funcionalidad 2: Actualización del Contenido (Galería de Imágenes y Texto)

**Nivel 1: Requerimiento del Cliente**
Cada vez que se seleccione una época distinta en el timeline, la sección inferior de la pantalla debe actualizarse de forma automática e inmediata para mostrar la información correspondiente a ese año de la vida de David Aravena. Esta sección debe incluir fotografías y texto narrativo.

**Nivel 2: Especificación de Usuario**
Como lector del blog, cuando suelto el control del timeline en un año nuevo, quiero ver que las imágenes y la historia cambian al instante. Las fotografías deben verse ordenadas (como una galería o cuadrícula a un lado) y al otro lado el texto debe ser fácil de leer.

**Nivel 3: Especificación Técnica**
* **Componente:** Se creará un componente funcional llamado \`EraContent.jsx\`.
* **Props:** Recibirá una prop llamada \`datosEpoca\` con la estructura: \`{ year, title, content, images: [] }\`. 
* **Estructura de Datos:** El campo de imágenes será un arreglo de URLs en el archivo \`timelineData.js\` para renderizar múltiples fotos.
* **Arquitectura Visual:** El componente utilizará flexbox o CSS Grid para dividir la vista en dos columnas: una para el mapeo iterativo de imágenes y otra para la inyección de texto.

**Nivel 4: Flujo**
1. El estado \`selectedYear\` en el componente padre (\`TimelineView\`) cambia debido a la interacción del usuario con el slider.
2. El componente padre busca en la base de datos local (\`timelineData.js\`) el objeto de la historia que coincide con el nuevo año.
3. El componente padre inyecta este nuevo objeto a través de la prop \`datosEpoca\` hacia el componente hijo \`EraContent\`.
4. \`EraContent\` recibe las nuevas props e inicia el re-renderizado.
5. Toma el arreglo \`datosEpoca.images\` y ejecuta un método \`.map()\` para generar un elemento \`<img>\` en el DOM por cada fotografía.
6. Toma los strings \`datosEpoca.title\` y \`datosEpoca.content\` y reemplaza el texto de los nodos HTML correspondientes (\`<h2>\` y \`<p>\`).
7. El navegador actualiza la pantalla.

**Nivel 5: Pseudocódigo**
\'\'\'text
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
\'\'\'
`;

const markdown2 = `
# Uso de Tefi Design System

Este documento contiene las reglas generales para utilizar los componentes y capacidades del sistema de diseño.

## Componentes

Los componentes deben mantener una responsabilidad clara y favorecer la composición.

- Layout
- Surface
- Typography
- Interaction
`;

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

export default function MarkdownTestPage() {
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
            Documentación del proyecto
          </Heading>

          <Text>
            Ya no escribo codigo. Ahora escribo contexto. Desarrollo y mantengo cada indicacion o idea que la IA debe mantener en su memoria mientras dure la sesion en la que trabajas con ella. Cada aspecto de la pagina web que se pueda describir con palabras, lo documento dandole un formato o estructura que le facilite a una ia aprenderlo.
          </Text>
        </Stack>

        <Carousel controls="outside">
          <Card>
            <Card.Header>
              <Heading>
                Proyecto Timeline
              </Heading>

              <Text>
                Este es el contexto necesario para crear un componente el cual muestre mi historia profesional atravez de un slider con el cual puedo elegir el año del que quiero saber su informacion.
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
                Uso de Tefi Design System
              </Heading>

              <Text>
                Documentación sobre el uso de los componentes y capacidades del sistema de diseño.
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
