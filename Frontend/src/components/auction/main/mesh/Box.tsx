import React, { useRef, useEffect } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

interface BlockProps {
  position: [number, number, number];
}

const Box: React.FC<BlockProps> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null);

  const blockTexture = useLoader(
    THREE.TextureLoader,
    "/auction/material/grid.png"
  );
  blockTexture.wrapS = THREE.RepeatWrapping;
  blockTexture.wrapT = THREE.RepeatWrapping;
  blockTexture.repeat.x = 1;
  blockTexture.repeat.y = 1;

  useEffect(() => {
    if (mesh.current) {
      mesh.current.name = "block";
    }
  }, []);

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[30, 30, 40]} />
      <meshStandardMaterial map={blockTexture} side={THREE.BackSide}/>
    </mesh>
  );
};

export default Box;
