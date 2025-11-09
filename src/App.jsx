import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpineModel from './components/SpineModel';

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpineModel onSelectRegion={setSelectedRegion} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 100
      }}>
        <h3>Human Insight Platform (HIP)</h3>
        <p>Click on the spine to select a region</p>
        {selectedRegion && <p>Selected: {selectedRegion}</p>}
      </div>
    </div>
  );
}

export default App;
