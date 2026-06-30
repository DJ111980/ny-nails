const fs = require("node:fs");
const path = require("node:path");

const galleries = {
  manicuraIdeas: "assets/images/manicuras/ideas-diseno",
  manicuraTrabajos: "assets/images/manicuras/trabajos-realizados",
  pedicuraSemipermanenteIdeas:
    "assets/images/pedicuras/semipermanentes/ideas-diseno",
  pedicuraSemipermanenteTrabajos:
    "assets/images/pedicuras/semipermanentes/trabajos-realizados",
  pedicuraTradicionalIdeas:
    "assets/images/pedicuras/tradicionales/ideas-diseno",
  pedicuraTradicionalTrabajos:
    "assets/images/pedicuras/tradicionales/trabajos-realizados",
};

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const outputFile = path.join("scripts", "gallery-data.js");

function normalizePath(filePath) {
  return filePath.replaceAll(path.sep, "/");
}

function getGalleryImages(folder) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    return [];
  }

  return fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((item) => item.isFile())
    .map((item) => item.name)
    .filter((fileName) => allowedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
    .map((fileName) => normalizePath(path.join(folder, fileName)));
}

const galleryData = Object.fromEntries(
  Object.entries(galleries).map(([galleryName, folder]) => [
    galleryName,
    getGalleryImages(folder),
  ])
);

const fileContent = `window.NYNailsGallery = ${JSON.stringify(galleryData, null, 2)};\n`;

fs.writeFileSync(outputFile, fileContent, "utf8");
