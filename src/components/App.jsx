import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Suspense } from "react";
import Front from "./Front";
import { Container } from "./Container";

export default function App() {
  return (
    <Container>
      <Suspense fallback={<>LOADING...</>}>
        <Canvas>
          <Scene />
        </Canvas>
        <Front />
      </Suspense>
    </Container>
  );
}
