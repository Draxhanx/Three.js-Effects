
import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./syle.css"
import { OrbitControls } from '@react-three/drei'
import Cyl from'./cyl'

const App = () => {
  return <>
  <Canvas camera={{fov:30}}>
     <mesh>
      <OrbitControls  enableZoom={false} />
      <ambientLight/>
     <Cyl />
     </mesh>

      
  </Canvas>
 
  </> 
}

export default App