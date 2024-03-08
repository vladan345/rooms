import { useGLTF, Sparkles } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export default function Scene() {
  const model = useGLTF("./room.glb");

  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={5} intensity={0.5} />
      </EffectComposer>
      <ambientLight intensity={1} />

      <primitive object={model.scene}></primitive>
      <pointLight castShadow intensity={20} position-y={4} color="blue" />
      <pointLight
        color="lightgreen"
        intensity={20}
        position-y={4}
        position-z={4.6}
      />
      <pointLight intensity={20} position-y={4} position-z={8} />
      <pointLight intensity={20} position-y={4} position-z={20} />
      <mesh position={[0, 1, 30]}>
        <sphereGeometry args={[2, 10, 10]} />
        <meshBasicMaterial color={[10, 8, 5]} />
      </mesh>
      <Sparkles
        size={2}
        scale={[8, 8, 8]}
        position-y={2}
        position-z={23}
        speed={0.2}
        count={300}
        opacity={0.1}
      />
    </>
  );
}
