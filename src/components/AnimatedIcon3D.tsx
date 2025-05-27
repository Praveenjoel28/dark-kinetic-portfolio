
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";
import { motion } from "framer-motion";

interface AnimatedMeshProps {
  type: "sphere" | "box" | "torus";
  color: string;
  position: [number, number, number];
}

const AnimatedMesh = ({ type, color, position }: AnimatedMeshProps) => {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const renderMesh = () => {
    switch (type) {
      case "sphere":
        return <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position} />;
      case "box":
        return <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position} />;
      case "torus":
        return <Torus ref={meshRef} args={[0.4, 0.2, 16, 32]} position={position} />;
      default:
        return <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position} />;
    }
  };

  return (
    <>
      {renderMesh()}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </>
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
        
        <mesh>
          <AnimatedMesh type="sphere" color="#00d4ff" position={[-1, 0, 0]} />
        </mesh>
        <mesh>
          <AnimatedMesh type="box" color="#b77dff" position={[1, 0, 0]} />
        </mesh>
        <mesh>
          <AnimatedMesh type="torus" color="#ff6b9d" position={[0, 1, 0]} />
        </mesh>
      </Canvas>
    </motion.div>
  );
};

export default AnimatedIcon3D;
