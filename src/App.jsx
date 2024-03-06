import "./App.css";
import { Canvas } from "@react-three/fiber";

import Test from "./world/Test";
function App() {
  return (
    <>
      <Canvas id="canvas" shadows>
        <Test />
      </Canvas>
      <div style={{ background: "lighblue", height: "100vh" }}></div>
      <div id="site" style={{ background: "lighblue", height: "500vh" }}></div>
      <div className="content"></div>
      <div
        className="hero"
        style={{ background: " rgba(24, 30, 78, 1)", height: "100vh" }}
      >
        <h2> One for all.</h2>
        <h1> All for AI</h1>
      </div>
    </>
  );
}

export default App;
