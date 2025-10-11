import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";

/** Loads and renders a GLB from /public */
function GLB({ url, rotation = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF(url);
  return (
    <group rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// (Optional) Preload a common default; change to your real filename if you want
useGLTF.preload("/lumiaabstract.glb");

export default function ModelCanvas({
  url = "/lumiaabstract.glb",   // <-- set to your actual file in /public
  rotation = [0, 0.25, 0],
  scale = 1,
  interactive = true,     // set true to allow drag rotation
}) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 35 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 5]} intensity={1.1} />

      <Suspense fallback={null}>
        <Center>
          <GLB url={url} rotation={rotation} scale={scale} />
          <ContactShadows position={[0, -0.9, 0]} opacity={0.2} blur={1.8} far={3} />
          <Environment preset="studio" />
        </Center>
      </Suspense>

      {interactive ? <OrbitControls enableZoom={true} /> : null}
    </Canvas>
  );
}
