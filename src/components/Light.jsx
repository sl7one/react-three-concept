import React from 'react'

export default function Light() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 6, 0]} intensity={0.5} />
      <pointLight color="yellow" position={[0, 5, 0]} intensity={100} />
      <pointLight color="greenyellow" position={[0, -5, 0]} intensity={100} />
      <pointLight color="orange" position={[-5, 0, 0]} intensity={100} />
      <pointLight color="red" position={[5, 0, 0]} intensity={100} />
      <pointLight color="pink" position={[0, 0, 5]} intensity={100} />
      <pointLight color="blue" position={[0, 0, -5]} intensity={100} />
    </>
  );
}
