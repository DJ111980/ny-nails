# NY Nails

Página web estática para un catálogo visual de manicura y pedicura. No usa backend, base de datos, formularios, login ni dependencias externas.

## Estructura

- `index.html`: contenido y menús principales.
- `styles/styles.css`: colores, diseño responsive y estilos visuales.
- `scripts/main.js`: navegación simple entre pantallas.
- `scripts/generate-gallery-data.js`: genera automáticamente la lista de imágenes.
- `scripts/gallery-data.js`: archivo generado con las imágenes encontradas.
- `assets/images/manicuras/ideas-diseno/`: referencias para manicura.
- `assets/images/manicuras/trabajos-realizados/`: fotos de trabajos de manicura.
- `assets/images/pedicuras/ideas-diseno/`: referencias para pedicura.
- `assets/images/pedicuras/trabajos-realizados/`: fotos de trabajos de pedicura.

## Cómo abrir el proyecto localmente

Después de agregar o quitar imágenes, ejecuta:

```bash
node scripts/generate-gallery-data.js
```

Luego abre el archivo `index.html` en el navegador. También puedes usar la extensión Live Server de VS Code si prefieres revisar cambios con recarga automática.

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
   - **Build command**: `node scripts/generate-gallery-data.js`
   - **Build output directory**: `/`
6. Guarda y despliega.

## Cómo cambiar el nombre del negocio

En `index.html`, busca `NY Nails` y reemplázalo por el nombre nuevo. También puedes cambiar el texto del título de la pestaña en la etiqueta `<title>`.

## Cómo cambiar textos principales

En `index.html`, edita los títulos, subtítulos y nombres de botones. Los textos visibles están organizados dentro de cada sección para que sea fácil encontrarlos.

## Cómo cambiar fotos de cada galería

Guarda las nuevas imágenes en la carpeta que corresponda. No tienes que editar el HTML para cada foto.

Carpetas recomendadas:

- Ideas de manicura: `assets/images/manicuras/ideas-diseno/`
- Trabajos de manicura: `assets/images/manicuras/trabajos-realizados/`
- Ideas de pedicura: `assets/images/pedicuras/ideas-diseno/`
- Trabajos de pedicura: `assets/images/pedicuras/trabajos-realizados/`

Formatos aceptados:

- `.jpg`
- `.jpeg`
- `.png`
- `.webp`
- `.gif`

Cuando Cloudflare Pages despliegue el sitio, ejecutará `node scripts/generate-gallery-data.js` y actualizará automáticamente la galería con las imágenes que encuentre en esas carpetas.

Si quieres revisar los cambios localmente antes de subirlos, ejecuta:

```bash
node scripts/generate-gallery-data.js
```

Cada imagen se abre a pantalla completa al tocarla. Para salir de esa vista, usa el botón **Volver** de la página o el botón atrás del celular.

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
