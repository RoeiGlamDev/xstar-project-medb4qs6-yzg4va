import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // pink color
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(...position);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.position.y += 0.01  Math.sin(Date.now()  0.001);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      ref.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [position]);

  return <div ref={ref} className="absolute inset-0 z-10" />;
};

const FloatingElements: React.FC = () => {
  const elements = [
    [-1, 0, -5],
    [1, 0, -5],
    [0, 1, -5],
  ];

  return (
    <div className="relative w-full h-full">
      {elements.map((position, index) => (
        <FloatingElement key={index} position={position} />
      ))}
    </div>
  );
};

const FloatingElementsComponent: React.FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to luxery dark AirBNB</h1>
      <p className="text-xl mb-8">Experience elegance and sophistication in technology-driven accommodations.</p>
      <FloatingElements />
      <div className="mt-8">
        <motion.div
          className="bg-pink-500 text-black px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.button>
      </div>
    </motion.section>
  );
};

export default FloatingElementsComponent;