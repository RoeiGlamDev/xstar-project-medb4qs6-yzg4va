import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    // Initialize any necessary Three.js functionality here
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <motion.div
        className="absolute top-5 left-5 text-pink-500 text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.div>
      <Canvas>
        <OrbitControls />
        {/ Add your 3D models and scene setup here /}
        <ambientLight intensity={0.5} color="#ff69b4" />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        {/ Example of a simple geometry for demonstration /}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ff69b4" />
        </mesh>
      </Canvas>
      <motion.div
        className="absolute bottom-5 right-5 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience the elegance of <span className="text-pink-500">luxery dark AirBNB</span>
      </motion.div>
    </div>
  );
};

export default Scene;