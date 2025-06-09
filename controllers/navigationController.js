// controllers/navigationController.js
import { renderTransportView } from '../views/transportView.js';
import { getTransportImage } from '../models/transportModel.js';

export const controller = {
    goTo(option) {
        const imagePath = getTransportImage(option);
        renderTransportView(imagePath, option);
    }
};

window.navigateTo = controller.goTo;
