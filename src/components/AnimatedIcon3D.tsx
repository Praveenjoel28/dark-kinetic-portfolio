
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

interface AnimatedMeshProps {
  type: "sphere" | "box" | "torus";
  color: string;
  position: [number, number, number];
}

const AnimatedMesh = ({ type, color, position }: AnimatedMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case "sphere":
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case "box":
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case "torus":
        return <torusGeometry args={[0.4, 0.2, 16, 32]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.2} 
      />
    </mesh>
  );
};

interface AnimatedIcon3DProps {
  className?: string;
}

const AnimatedIcon3D = ({ className = "" }: AnimatedIcon3DProps) => {
  return (
    <motion.div
      className={`w-32 h-32 ${className}`}
      initial={{ scale: 0, rotateY: 0 }}
      animate={{ scale: 1, rotateY: 360 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#b77dff" />
        
        <AnimatedMesh type="sphere" color="#00d4ff" position={[-1, 0, 0]} />
        <AnimatedMesh type="box" color="#b77dff" position={[1, 0, 0]} />
        <AnimatedMesh type="torus" color="#ff6b9d" position={[0, 1, 0]} />
      </Canvas>
    </motion.div>
  );
};

export default AnimatedIcon3D;
