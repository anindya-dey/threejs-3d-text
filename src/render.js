import { Clock } from 'three';

const clock = new Clock()

export const render = (renderer, scene, camera, controls) => {
    const elapsedTime = clock.getElapsedTime();

    const animate = () => {
        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera);
        
        // Call animate again for next frame
        requestAnimationFrame(animate);
    };
      
    animate();
}
