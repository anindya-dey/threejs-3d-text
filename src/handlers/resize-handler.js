export const resizeHandler = (size, camera, renderer) => {
    return (e) => {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
    
        // Update camera
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
    
        // Update renderer
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
};
