import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";
import Front from "./Front";

export default function App() {
  return (
    <Suspense fallback={<>LOADING...</>}>
      <Canvas>
        <Scene />
      </Canvas>
      <Front />
    </Suspense>
  );
}
