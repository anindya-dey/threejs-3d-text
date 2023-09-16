import { WebGLRenderer } from 'three';

export const initRenderer = (size, canvas) => {
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(size.width, size.height)
    return renderer;
};
