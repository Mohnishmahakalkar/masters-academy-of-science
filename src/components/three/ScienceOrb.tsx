import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.2 + mouse.x * 0.8;
      globeRef.current.rotation.x = mouse.y * 0.4;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[0.95, 64, 64]} />
      <meshStandardMaterial
        color="#0E7C86"
        roughness={0.35}
        metalness={0.2}
        emissive="#0B4F57"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const ScienceOrb = () => {
  return (
    <div className="h-[360px] w-[min(380px,80vw)] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card">
      <Canvas camera={{ position: [0, 0.1, 3.1], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 4]} intensity={1.1} />
        <pointLight position={[-3, -2, -3]} intensity={0.6} color="#2cc2b3" />
        <mesh position={[0, 0, -0.02]}>
          <sphereGeometry args={[1.02, 32, 32]} />
          <meshStandardMaterial color="#f2a019" transparent opacity={0.08} />
        </mesh>
        <Globe />
      </Canvas>
    </div>
  );
};

export default ScienceOrb;
