import "./App.css";
import { useRef, useEffect, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./world/Experience";

function App() {
  return (
    <main>
      <Canvas
        id="canvas"
        shadows
        camera={{
          fov: 80,
          near: 0.1,
          far: 200,
          position: [0, 1, -7],
          rotation: [0, Math.PI, 0],
        }}
      >
        <Experience />
      </Canvas>
      <div className="w-screen h-[500vh] first flex justify-center items-center"></div>
      <div className="w-screen h-[500vh] second"></div>
      <div className="w-screen h-[500vh] third"></div>
      {/* <div style={{ background: "lighblue", height: "100vh" }}></div>
      <div id="site" style={{ background: "lighblue", height: "500vh" }}></div>
      <div className="content"></div>
      <div
        className="hero"
        style={{ background: " rgba(24, 30, 78, 1)", height: "100vh" }}
      >
        <h2> One for all.</h2>
        <h1> All for AI</h1>
      </div> */}
    </main>
  );
}

export default App;
