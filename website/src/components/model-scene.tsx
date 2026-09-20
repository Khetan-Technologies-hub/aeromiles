"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

type SceneProps = {
  /** GLB/glTF path under public/ (Draco-compressed OK). Omit for the placeholder. */
  src?: string;
  autoRotate?: boolean;
  enableZoom?: boolean;
  /** Uniform scale of the model (e.g. larger for a hero backdrop). */
  scale?: number;
};

/** Real-model path: loads a GLB (Draco decoder served locally from /draco/). */
function GltfModel({ src }: { src: string }) {
  const { scene } = useGLTF(src, "/draco/");
  return <primitive object={scene} />;
}

/**
 * Procedural placeholder aircraft (brand-toned) so the viewer renders in dev
 * without a binary asset. Replaced by real GLB models via `src` (PRD O11).
 */
function PlaceholderModel() {
  const steel = "#c9d7e8"; // light body — reads on the navy hero
  const blue = "#1b8ee6";
  const saffron = "#ff7a1a"; // small tricolour accent
  return (
    <group rotation={[0.2, 0.6, 0]}>
      {/* fuselage */}
      <mesh>
        <capsuleGeometry args={[0.28, 1.8, 8, 16]} />
        <meshStandardMaterial color={steel} metalness={0.6} roughness={0.35} />
      </mesh>
      {/* nose cone */}
      <mesh position={[0, 1.15, 0]}>
        <coneGeometry args={[0.28, 0.6, 16]} />
        <meshStandardMaterial color={blue} metalness={0.5} roughness={0.3} />
      </mesh>
      {/* main wings */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[2.6, 0.06, 0.5]} />
        <meshStandardMaterial color={blue} metalness={0.4} roughness={0.4} />
      </mesh>
      {/* tailplane */}
      <mesh position={[0, -0.95, 0]}>
        <boxGeometry args={[1.1, 0.05, 0.28]} />
        <meshStandardMaterial color={blue} metalness={0.4} roughness={0.4} />
      </mesh>
      {/* vertical stabiliser (saffron accent) */}
      <mesh position={[0, -0.85, 0.24]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.05, 0.5, 0.45]} />
        <meshStandardMaterial color={saffron} metalness={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function ModelScene({
  src,
  autoRotate = true,
  enableZoom = false,
  scale = 1,
}: SceneProps) {
  return (
    <Canvas
      camera={{ position: [4, 2, 4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <directionalLight
        position={[-5, -2, -5]}
        intensity={0.5}
        color="#1b8ee6"
      />
      <Suspense fallback={null}>
        <Center>
          <group scale={scale}>
            {src ? <GltfModel src={src} /> : <PlaceholderModel />}
          </group>
        </Center>
      </Suspense>
      <OrbitControls
        makeDefault
        autoRotate={autoRotate}
        autoRotateSpeed={0.8}
        enablePan={false}
        enableZoom={enableZoom}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
