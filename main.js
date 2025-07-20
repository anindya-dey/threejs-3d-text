import './style.css';
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Clock,
  TextureLoader,
  MeshMatcapMaterial,
  Mesh,
  TorusGeometry
} from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader';
import { TextGeometry } from 'three/addons/geometries/TextGeometry';
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
camera.position.set(-2, 1, 3)
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Textures
const textureLoader = new TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/8.png')

// 3D Text
const fontLoader = new FontLoader();
fontLoader.load(
  '/fonts/helvetiker_regular.typeface.json',
  (font) => {
    // Material
    const material = new MeshMatcapMaterial({ matcap: matcapTexture });

    // Geometry
    const textGeometry = new TextGeometry(
      'Anindya Dey',
      {
        font,
        size: 0.5,
        height: 0.2,
        depth: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
      }
    );
    textGeometry.center();

    const text = new Mesh(textGeometry, material);
    scene.add(text);

    const donutGeometry = new TorusGeometry(0.3, 0.2, 32, 64);

    for(let i = 0; i < 300; i++) {
      const donut = new Mesh(donutGeometry, material);

      donut.position.x = (Math.random() - 0.5) * 30;
      donut.position.y = (Math.random() - 0.5) * 30;
      donut.position.z = (Math.random() - 0.5) * 30;

      donut.rotation.x = Math.random() * Math.PI
      donut.rotation.y = Math.random() * Math.PI

      donut.scale.x = donut.scale.y = donut.scale.z = Math.random()

      scene.add(donut);
    }
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
