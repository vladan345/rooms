/* eslint-disable react/no-unknown-property */
import { useRef, useLayoutEffect } from "react";
import { useGLTF, PerspectiveCamera, Sparkles } from "@react-three/drei";

// import * as THREE from "three";
// import { useControls } from "leva";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  const model = useGLTF("./room.glb");

  const camera = useRef();

  useLayoutEffect(() => {
    const { nodes } = model;
    const tl = gsap.timeline();
    tl.to(camera.current.position, {
      z: 22,
      scrollTrigger: {
        trigger: "#site",
        scrub: 1,
      },
    });
    gsap.to(nodes.Icosphere.rotation, {
      y: 10,

      scrollTrigger: {
        trigger: "#site",
        scrub: 1,
      },
    });
    gsap.to(nodes.Cone.rotation, {
      z: 10,

      scrollTrigger: {
        trigger: "#site",
        scrub: 1,
      },
    });
    gsap.to(nodes.Cube001.rotation, {
      y: -10,
      scrollTrigger: {
        trigger: "#site",
        scrub: 1,
      },
    });
    gsap.to(nodes.Cube006.rotation, {
      z: Math.PI * 3.65,
      scrollTrigger: {
        trigger: "#site",
        scrub: 1,
      },
    });

    console.log(nodes);
  }, []);

  // const { x, y, z } = useControls("Camera position", {
  //   x: { value: 0, min: -20, max: 20, step: 0.01 },
  //   y: { value: 1, min: -20, max: 20, step: 0.01 },
  //   z: { value: -9.5, min: -20, max: 20, step: 0.01 },
  // });

  return (
    <>
      <color args={["#181e00"]} attach="background" />
      <ambientLight intensity={1} />

      <PerspectiveCamera
        makeDefault
        fov={80}
        near={0.1}
        far={200}
        position={[0, 1, -7]}
        rotation-y={Math.PI}
        ref={camera}
      />

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

      <Sparkles
        size={2}
        scale={[8, 8, 8]}
        position-y={2}
        position-z={23}
        speed={0.2}
        count={300}
      />
    </>
  );
}
