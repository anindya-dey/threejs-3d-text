import './style.css';
import { Scene, WebGLRenderer, PerspectiveCamera, Clock } from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

// Size
const size = {
  width: window.innerWidth,
  height: window.innerHeight
};

// Scene
const scene = new Scene();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Camera
const camera = new PerspectiveCamera(55, size.width / size.height, 0.1, 100);
camera.position.set(0, 0, 5)
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// 3D Text
const fontLoader = new FontLoader();
fontLoader.load(
  '/textures/fonts/helvetiker_regular.typeface.json',
  (font) => {
    console.log(font)
  }
)

// Renderer
const renderer = new WebGLRenderer({ canvas });
renderer.setSize(size.width, size.height);

// Handle Window Resize
window.addEventListener('resize', (e) => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  // Update camera
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

const clock = new Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera);

  // Call animate again for next frame
  requestAnimationFrame(animate);
};

animate();
