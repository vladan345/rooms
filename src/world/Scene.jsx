import { useGLTF, Stars } from "@react-three/drei";
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
        <Bloom mipmapBlur luminanceThreshold={1.1} intensity={1} />
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
      <pointLight intensity={5} position-y={2} position-z={27} position-x={1} />
      {/* <mesh position={[0, 1, 30]}>
        <sphereGeometry args={[2.4, 20, 20]} />
        <meshLambertMaterial color={[0.2, 0.2, 0.2]} />
      </mesh> */}
      <mesh position={[0, 1, 31]}>
        <sphereGeometry args={[3, 20, 20]} />
        <meshBasicMaterial color={[5, 5, 2]} />
      </mesh>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}
