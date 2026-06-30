# NY Nails

Página web estática para un catálogo visual de manicura y pedicura. No usa backend, base de datos, formularios, login ni dependencias externas.

## Estructura

- `index.html`: contenido y menús principales.
- `styles/styles.css`: colores, diseño responsive y estilos visuales.
- `scripts/main.js`: navegación simple entre pantallas.
- `assets/images/manicuras/ideas-diseno/`: referencias para manicura.
- `assets/images/manicuras/trabajos-realizados/`: fotos de trabajos de manicura.
- `assets/images/pedicuras/ideas-diseno/`: referencias para pedicura.
- `assets/images/pedicuras/trabajos-realizados/`: fotos de trabajos de pedicura.

## Cómo abrir el proyecto localmente

Abre el archivo `index.html` en el navegador. También puedes usar la extensión Live Server de VS Code si prefieres revisar cambios con recarga automática.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube estos archivos y carpetas al repositorio:
   - `index.html`
   - `README.md`
   - `styles/`
   - `scripts/`
   - `assets/`
3. Confirma que `index.html` quede en la raíz del repositorio.

## Cómo desplegar en Cloudflare Pages

1. Entra a Cloudflare.
2. Ve a **Workers & Pages**.
3. Elige **Create application**.
4. Selecciona **Pages** y conecta tu repositorio de GitHub.
5. En configuración del proyecto usa:
   - **Framework preset**: None / Ninguno
   - **Build command**: dejar vacío
   - **Build output directory**: `/`
6. Guarda y despliega.

## Cómo cambiar el nombre del negocio

En `index.html`, busca `NY Nails` y reemplázalo por el nombre nuevo. También puedes cambiar el texto del título de la pestaña en la etiqueta `<title>`.

## Cómo cambiar textos principales

En `index.html`, edita los títulos, subtítulos y nombres de botones. Los textos visibles están organizados dentro de cada sección para que sea fácil encontrarlos.

## Cómo cambiar fotos de cada galería

Guarda las nuevas imágenes en la carpeta que corresponda y actualiza la ruta `src` de cada etiqueta `<img>` en `index.html`.

Carpetas recomendadas:

- Ideas de manicura: `assets/images/manicuras/ideas-diseno/`
- Trabajos de manicura: `assets/images/manicuras/trabajos-realizados/`
- Ideas de pedicura: `assets/images/pedicuras/ideas-diseno/`
- Trabajos de pedicura: `assets/images/pedicuras/trabajos-realizados/`

Ejemplo:

```html
<img
  src="assets/images/manicuras/ideas-diseno/nueva-foto.jpg"
  alt="Idea de diseño para manicura"
/>
```

Para agregar más imágenes, copia una tarjeta completa `<article class="gallery-card">...</article>` dentro de la galería correspondiente y cambia solo la ruta de la imagen. No es necesario poner título ni descripción por cada foto.

## Cómo cambiar colores principales

En `styles/styles.css`, modifica los valores dentro de `:root`.

Los más importantes son:

- `--color-background`: fondo general.
- `--color-primary`: color principal.
- `--color-primary-dark`: color principal oscuro.
- `--color-accent`: detalle dorado suave.
- `--color-text`: color del texto.

## Nota sobre las imágenes actuales

Las imágenes incluidas son recursos de muestra para que el sitio quede listo y se pueda revisar completo desde el primer despliegue. Para publicar el catálogo real, reemplázalas por fotos propias del negocio y por referencias autorizadas para uso web.
