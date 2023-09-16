import './style.css';

import { resizeHandler } from './src/handlers/resize-handler';
import { initCamera } from './src/init-scripts/init-camera';
import { initCanvas } from './src/init-scripts/init-canvas';
import { initRenderer } from './src/init-scripts/init-renderer';
import { initScene } from './src/init-scripts/init-scene';
import { initSize } from './src/init-scripts/init-size';
import { getCube } from './src/objects/cube';
import { render } from './src/render';
import { initControls } from './src/init-scripts/init-orbit-controls';

const size = initSize();
const scene = initScene();
const canvas = initCanvas();
const renderer = initRenderer(size, canvas);

const camera = initCamera(size);
scene.add(camera);

const controls = initControls(camera, canvas);

/**
 * Objects
*/
const cube = getCube();
scene.add(cube);

window.addEventListener('resize', resizeHandler(size, camera, renderer));

render(renderer, scene, camera, controls)
