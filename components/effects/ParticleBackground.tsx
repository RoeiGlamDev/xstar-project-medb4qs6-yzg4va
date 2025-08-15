import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const particles: THREE.Points = createParticles();
    scene.add(particles);
    
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    animate();

    function createParticles(): THREE.Points {
      const particleCount = 5000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i  3] = (Math.random() - 0.5)  10;
        positions[i  3 + 1] = (Math.random() - 0.5)  10;
        positions[i  3 + 2] = (Math.random() - 0.5)  10;

        const color = i % 2 === 0 ? new THREE.Color(0xff00ff) : new THREE.Color(0x000000);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true, transparent: true });
      return new THREE.Points(geometry, material);
    }

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <canvas id="particle-canvas" className="absolute inset-0"></canvas>
      <motion.div 
        className="text-pink-500 text-5xl font-bold z-10" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to luxery dark AirBNB
      </motion.h1>
      <motion.div 
        className="text-white text-lg z-10 mt-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience high-end technology in a luxurious dark setting. Book your stay at the most elegant properties with luxery dark AirBNB.
      </motion.p>
    </div>
  );
};

export default ParticleBackground;