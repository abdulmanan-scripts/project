import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface ThreeSceneProps {
  className?: string;
  animation?: 'float' | 'rotate' | 'pulse' | 'wave';
  color?: string;
  size?: number;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  className = '', 
  animation = 'float',
  color = '#5D3FD3',
  size = 1
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const meshRef = useRef<THREE.Mesh>();
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create 3D object based on animation type
    let geometry: THREE.BufferGeometry;
    switch (animation) {
      case 'float':
        geometry = new THREE.SphereGeometry(size, 32, 32);
        break;
      case 'rotate':
        geometry = new THREE.BoxGeometry(size * 1.5, size * 1.5, size * 1.5);
        break;
      case 'pulse':
        geometry = new THREE.OctahedronGeometry(size, 0);
        break;
      case 'wave':
        geometry = new THREE.TorusGeometry(size, size * 0.4, 16, 100);
        break;
      default:
        geometry = new THREE.SphereGeometry(size, 32, 32);
    }

    const material = new THREE.MeshPhongMaterial({ 
      color: color,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    meshRef.current = mesh;

    // GSAP Animations
    const setupAnimation = () => {
      if (!mesh) return;

      switch (animation) {
        case 'float':
          gsap.to(mesh.position, {
            y: 0.5,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          });
          gsap.to(mesh.rotation, {
            y: Math.PI * 2,
            duration: 8,
            ease: "none",
            repeat: -1
          });
          break;

        case 'rotate':
          gsap.to(mesh.rotation, {
            x: Math.PI * 2,
            y: Math.PI * 2,
            z: Math.PI * 2,
            duration: 6,
            ease: "none",
            repeat: -1
          });
          break;

        case 'pulse':
          gsap.to(mesh.scale, {
            x: 1.3,
            y: 1.3,
            z: 1.3,
            duration: 1.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          });
          gsap.to(mesh.rotation, {
            y: Math.PI * 2,
            duration: 4,
            ease: "none",
            repeat: -1
          });
          break;

        case 'wave':
          gsap.to(mesh.rotation, {
            x: Math.PI * 2,
            duration: 10,
            ease: "none",
            repeat: -1
          });
          gsap.to(mesh.position, {
            x: 1,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
          break;
      }
    };

    setupAnimation();

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current || !mesh) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      gsap.to(mesh.rotation, {
        x: y * 0.3,
        y: x * 0.3,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
      if (material) {
        material.dispose();
      }
    };
  }, [animation, color, size]);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '200px' }}
    />
  );
};

export default ThreeScene;