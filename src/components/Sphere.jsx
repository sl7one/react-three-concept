import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Sphere() {
  const ref = useRef();
  useFrame((state, delta) => {
    const speed =0.025;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh scale={10} ref={ref}>
      <icosahedronGeometry args={[1, 5]} />
      <meshBasicMaterial color="#333333" side={2} wireframe  />
    </mesh>
  );
}
