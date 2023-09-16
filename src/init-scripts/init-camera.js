import { PerspectiveCamera } from 'three';

export const initCamera = (size) => {
    const camera = new PerspectiveCamera(55, size.width / size.height, 0.1, 100);
    camera.position.set(0, 0, 5)
    return camera;
};
