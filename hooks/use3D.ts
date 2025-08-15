import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Interface for the 3D element properties specific to luxery dark AirBNB
 */
interface LuxeryDarkAirBNBProps {
  color: string; // Color of the 3D object
  position: THREE.Vector3; // Position of the 3D object in the scene
}

/
 * Custom hook to create a 3D interactive element for luxery dark AirBNB
 * @param props - Properties of the 3D element
 * @returns {THREE.Mesh} - The created 3D Mesh object
 */
export const use3D = (props: LuxeryDarkAirBNBProps): THREE.Mesh => {
  const meshRef = useRef<THREE.Mesh | null>(null);
  
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to black

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create geometry and material for the 3D element
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: props.color });
    const mesh = new THREE.Mesh(geometry, material);
    
    // Set position of the mesh
    mesh.position.copy(props.position);
    scene.add(mesh);
    meshRef.current = mesh;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      if (meshRef.current) {
        scene.remove(meshRef.current);
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
      }
      document.body.removeChild(renderer.domElement);
    };
  }, [props]);

  return meshRef.current as THREE.Mesh;
};

/
 * Example usage of the use3D hook in a component
 */
const HouseILComponent = () => {
  const color = 0xff69b4; // Pink color specific to luxery dark AirBNB
  const position = new THREE.Vector3(0, 0, 0);

  // Create the 3D mesh using the custom hook
  const mesh = use3D({ color: color, position: position });

  return null; // Return null as the rendering is handled in the hook
};

export default HouseILComponent;