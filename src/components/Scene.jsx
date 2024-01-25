import React, { useContext, useEffect, useRef } from "react";
import Sphere from "./Sphere";
import Box from "./Box";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Light from "./Light";
import { GlobalContext } from "../context/context";
import gsap from "gsap";

export default function Scene() {
  const refBoxGroup = useRef();
  const boxRefs = useRef([]);
  const { data } = useContext(GlobalContext);
  const three = useThree();

  useEffect(() => {
    const defaults = {
      duration: 2.5,
      ease: "power4.out",
    };
    gsap.to(three.camera.position, {
      x: data.camera.position.x,
      y: data.camera.position.y,
      z: data.camera.position.z,
      ...defaults,
    });

    gsap.to(refBoxGroup.current.position, {
      x: data.mesh.position.x,
      y: data.mesh.position.y,
      z: data.mesh.position.z,
      ...defaults,
    });

    gsap.to(refBoxGroup.current.rotation, {
      x: data.mesh.rotation.x,
      y: data.mesh.rotation.y,
      z: data.mesh.rotation.z,
      ...defaults,
    });
  }, [data]);

  const boxItems = [
    {
      onClick: () => {},
      scale: 3,
      color: "#ffea2c",
      position: [0, 0, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2,
      color: "#f8bdac",
      position: [-2.9, 0, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#def8ac",
      position: [3, 0, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2.2,
      color: "#ace0f8",
      position: [2.5, 3, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2.2,
      color: "#acb3f8",
      position: [0, 3.2, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#f8acac",
      position: [0, -3.1, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#b1f8ac",
      position: [-2.5, -3.2, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#eef8ac",
      position: [2.6, -3, 0],
    },
    {
      onPointerEnter: () => {},
      scale: 2,
      color: "#f8acf7",
      position: [-2.9, 0, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#def8ac",
      position: [3, 0, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.2,
      color: "#ace0f8",
      position: [2.5, 3, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.3,
      color: "#dfacf8",
      position: [-2.8, 3, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.2,
      color: "#acb3f8",
      position: [0, 3.2, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#00c694",
      position: [0, -3.1, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#eef8ac",
      position: [2.6, -3, 3],
    },
    {
      onPointerEnter: () => {},
      scale: 2,
      color: "#cd2c00",
      position: [-2.9, 0, -3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#def8ac",
      position: [3, 0, -3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.3,
      color: "#dfacf8",
      position: [-2.8, 3, -3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.2,
      color: "#acb3f8",
      position: [0, 3.2, -3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#acf8e5",
      position: [0, -3.1, -3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#ff9be9",
      position: [-2.5, -3.2, -3],
    },
    {
      onPointerEnter: () => {},
      scale: 2.1,
      color: "#eef8ac",
      position: [2.6, -3, -3],
    },
  ];

  return (
    <>
      <Light />
      <group>
        <Sphere />
        <group
          ref={refBoxGroup}
          // position={[mx, my, mz]}
          // rotation={[mrx, mry, mrz]}
          position={[4, 0, 0]}
          rotation={[0, Math.PI / 5, 0]}
        >
          {boxItems.map((props, idx) => (
            <Box key={idx} ref={(el) => boxRefs.current.push(el)} {...props} />
          ))}
        </group>
      </group>
      <OrbitControls />
    </>
  );
}
