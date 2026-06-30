const views = document.querySelectorAll("[data-view]");
const navigationButtons = document.querySelectorAll("[data-target]");
const closeViewerButton = document.querySelector("[data-close-viewer]");
const viewerImage = document.querySelector(".image-viewer__image");

let currentView = "inicio";
let previousView = "inicio";

function showView(viewName) {
  views.forEach((view) => {
    view.hidden = view.dataset.view !== viewName;
  });

  currentView = viewName;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openImageViewer(image) {
  previousView = currentView;
  viewerImage.src = image.src;
  viewerImage.alt = image.alt;
  showView("visorImagen");

  if (window.location.hash !== "#imagen") {
    history.pushState({ viewer: true }, "", "#imagen");
  }
}

function closeImageViewer() {
  if (currentView !== "visorImagen") {
    return;
  }

  if (window.location.hash === "#imagen") {
    history.back();
    return;
  }

  showView(previousView);
  viewerImage.removeAttribute("src");
  viewerImage.alt = "";
}

function createGalleryCard(imagePath, galleryName) {
  const card = document.createElement("article");
  const button = document.createElement("button");
  const image = document.createElement("img");

  card.className = "gallery-card";
  button.className = "gallery-button";
  button.type = "button";
  image.src = imagePath;
  image.alt = galleryName;
  image.loading = "lazy";

  button.addEventListener("click", () => openImageViewer(image));

  button.appendChild(image);
  card.appendChild(button);

  return card;
}

function renderGalleries() {
  const galleryData = window.NYNailsGallery || {};

  document.querySelectorAll("[data-gallery]").forEach((gallery) => {
    const galleryKey = gallery.dataset.gallery;
    const images = galleryData[galleryKey] || [];

    gallery.innerHTML = "";

    if (images.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "gallery-empty";
      emptyMessage.textContent = gallery.dataset.emptyMessage;
      gallery.appendChild(emptyMessage);
      return;
    }

    images.forEach((imagePath) => {
      gallery.appendChild(
        createGalleryCard(imagePath, gallery.getAttribute("aria-label") || "Imagen de galería")
      );
    });
  });
}

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.target);
  });
});

closeViewerButton.addEventListener("click", closeImageViewer);

window.addEventListener("popstate", () => {
  if (currentView === "visorImagen") {
    showView(previousView);
    viewerImage.removeAttribute("src");
    viewerImage.alt = "";
  }
});

renderGalleries();
