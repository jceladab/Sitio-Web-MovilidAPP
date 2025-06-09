// views/transportView.js
let currentView = null;

export function renderTransportView(imagePath, transportType) {
  const content = document.getElementById('content');

  if (currentView === transportType) {
    // Si ya está visible, colapsa la vista
    content.innerHTML = '';
    currentView = null;
  } else {
    // Mostrar nueva vista
    content.innerHTML = '';
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Vista del transporte';
    img.classList.add('preview-image');
    content.appendChild(img);
    currentView = transportType;
  }
}
