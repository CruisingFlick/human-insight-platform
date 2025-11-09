import React, { useRef } from 'react';
import { useGLTF, Text } from '@react-three/drei';

function SpineModel({ onSelectRegion }) {
  const spineRef = useRef();
  
  const handleL3Click = () => {
    onSelectRegion('L3-L4 Left Side');
  };

  return (
    <group ref={spineRef}>
      {/* Placeholder for spine model */}
      <mesh position={[0, 0, 0]} onClick={handleL3Click}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      
      {/* L3-L4 Label */}
      <Text
        position={[0.8, 0, 0]}
        fontSize={0.1}
        color="white"
        anchorX="left"
        anchorY="middle"
      >
        L3-L4 Region
      </Text>
    </group>
  );
}

export default SpineModel;
