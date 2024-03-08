import { useRef, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import Scene from "./Scene";

import { useControls } from "leva";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { camera } = useThree();

  // const { railPosition } = useControls("Camera position", {
  //   railPosition: { value: -7, min: -7, max: 30 },
  // });
  // camera.position.z = railPosition;
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.to(camera.position, {
      scrollTrigger: {
        trigger: ".first",
        start: "top top",
        end: "center center",
        scrub: 2,
        immediateRender: false,
        snap: true,
      },
      z: 3.1,
    })
      .to(camera.position, {
        scrollTrigger: {
          trigger: ".second",
          start: "top bottom",
          end: "center center",
          scrub: 2,
          immediateRender: false,
          snap: true,
        },
        z: 10,
      })
      .to(camera.position, {
        scrollTrigger: {
          trigger: ".third",
          start: "top bottom",
          end: "center center",
          scrub: 2,
          immediateRender: false,
          snap: true,
        },
        z: 19.8,
      });
  });
  return (
    <>
      <color args={["#181e00"]} attach="background" />

      <Scene />
    </>
  );
}
