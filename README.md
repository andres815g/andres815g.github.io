# Un detalle para ti — página de mensajes diarios

Sitio web estático, adaptable a celular y computadora. No necesita instalar programas ni mantener un servidor encendido. La lista conserva todos los mensajes que agregues al archivo `entries.js`.

## 1. Probar en tu computadora

1. Descomprime `lirios_y_gerberas.zip`.
2. Abre la carpeta `lirios_y_gerberas`.
3. Haz doble clic en `index.html`.
4. Se abrirá en tu navegador. Para probar imágenes y audio, usa rutas de archivos dentro de la carpeta del proyecto.

La página usa una fuente de Google Fonts si hay conexión; sin internet utilizará fuentes de respaldo. Para que tu novia la vea desde cualquier lugar, sí necesitarás publicarla en un servicio de alojamiento.

## 2. Publicar gratis con GitHub Pages

1. Crea una cuenta en https://github.com si todavía no tienes una.
2. Crea un repositorio nuevo. Puedes llamarlo `un-detalle-para-ti`.
3. En la configuración del repositorio, selecciona que sea público (GitHub Pages gratuito requiere un repositorio público en este caso).
4. Sube **el contenido** de esta carpeta al repositorio: `index.html`, `styles.css`, `entries.js`, `app.js`, `README.md` y la carpeta `assets`.
5. Abre **Settings → Pages**.
6. En “Build and deployment”, selecciona “Deploy from a branch”; elige `main` y `/ (root)`, y guarda.
7. Espera a que GitHub publique el sitio. La dirección aparecerá en esa misma sección, normalmente con formato `https://tu-usuario.github.io/un-detalle-para-ti/`.
8. Comparte esa dirección con ella. Podrá abrirla desde su teléfono usando datos móviles o Wi-Fi.

## 3. Cómo publicar una frase nueva cada día

Abre `entries.js` con el Bloc de notas o cualquier editor de texto. Agrega un objeto nuevo al principio de `ENTRIES`, separado del anterior por una coma.

Ejemplo:

```js
const ENTRIES = [
  {
    date: "2026-11-12",
    title: "Un nuevo día contigo",
    text: "Hoy quería recordarte lo importante que eres para mí.",
    author: "Con cariño",
    image: "",
    audio: ""
  },
  // Conserva debajo las entradas anteriores
];
```

- `date`: día de publicación, con formato `AAAA-MM-DD`.
- `title`: título que aparecerá en la lista.
- `text`: poema o frase. Puedes escribir varias líneas usando `\n`.
- `author`: firma opcional.
- `image`: ruta opcional de una imagen.
- `audio`: ruta opcional de un archivo de audio.

Guarda el archivo y vuelve a subir `entries.js` al repositorio (abre el archivo en GitHub, pulsa el lápiz, pega el contenido actualizado y confirma el cambio). En unos instantes la página se actualizará. **No borres las entradas anteriores**: así se mantiene el historial.

## 4. Agregar una imagen

1. Copia la imagen a `assets/imagenes/`.
2. En la entrada correspondiente, escribe por ejemplo:
   `image: "assets/imagenes/flores.jpg",`
3. Sube tanto la imagen como el archivo `entries.js` actualizado a GitHub.

Usa imágenes JPG, PNG o WebP optimizadas para web. Evita subir fotografías privadas que no quieras que sean públicas: cualquier persona que conozca la dirección del sitio podría verlas.

## 5. Agregar una canción o audio

La página puede reproducir archivos de audio que tengas permiso para publicar. Copia un archivo MP3 a `assets/audio/` y en la entrada escribe, por ejemplo:

`audio: "assets/audio/cancion.mp3"`

Después sube el MP3 y `entries.js` a GitHub. Ten en cuenta que no debes subir canciones comerciales protegidas por derechos de autor sin autorización. Una alternativa es añadir un enlace a una canción en una plataforma de música; esta primera versión reproduce archivos de audio alojados junto al sitio.

## 6. Consejos

- Publica una entrada nueva por fecha. Si agregas dos entradas con la misma fecha, ambas aparecerán en el historial, pero el bloque destacado mostrará la primera que encuentre.
- La lista se ordena automáticamente de la fecha más reciente a la más antigua.
- El sitio es público y no tiene contraseña ni panel privado: es ideal si solo compartirás el enlace con ella, pero no es una página secreta. No incluyas datos personales sensibles.
- Para que los cambios aparezcan, actualiza los archivos en GitHub; editar una copia en tu computadora no cambia por sí sola la página publicada.
- Si el navegador muestra una versión antigua, espera un poco o recarga la página.

## Archivos principales

- `index.html`: estructura de la página.
- `styles.css`: diseño, colores y flores.
- `entries.js`: mensajes y fechas; este será el archivo que más actualizarás.
- `app.js`: ordenamiento y comportamiento de la lista.
- `assets/imagenes/`: imágenes.
- `assets/audio/`: audios.
