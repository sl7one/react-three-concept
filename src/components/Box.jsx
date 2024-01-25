import { useFrame, useLoader } from "@react-three/fiber";
import React, { forwardRef, useRef } from "react";
import { TextureLoader } from "three";

const Box = forwardRef(
  ({ scale = 1.5, color = "white", position = [0, 0, 0], ...props }, ref) => {
    const [texture] = useLoader(TextureLoader, ["1.jpg"]);
    const localRef = useRef();

    useFrame((state, delta) => {
      const speed = 0.05;
      localRef.current.rotation.x += delta * speed;
      // localRef.current.rotation.y += delta * speed;
      // localRef.current.rotation.z += delta * speed;
    });



    return (
      <group ref={ref}>
        <mesh ref={localRef} scale={scale} position={position} {...props}>
          <boxGeometry />
          <meshPhysicalMaterial
            color={color}
            position={position}
            transmission={1}
            reflectivity={1}
            metalness={0.35}
            thickness={6}
            clearcoat={1}
            clearcoatRoughness={0.5}
            specularIntensity={1}
            roughness={0.5}
            roughnessMap={texture}
            side={0}
          />
        </mesh>
      </group>
    );
  }
);

export default Box;
