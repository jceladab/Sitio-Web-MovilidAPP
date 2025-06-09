// models/transportModel.js
export function getTransportImage(transportType) {
    const images = {
        metro: 'public/images/metro.png',
        metroplus: 'public/images/metroplus.png',
        rutas: 'public/images/rutas.png',
        metrocable: 'public/images/metrocable.png',
    };
    return images[transportType] || '';
}
