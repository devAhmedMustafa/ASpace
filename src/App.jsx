import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Renderer from './components/Engines/Renderer'

import marsScene from "@assets/3D/mars.glb"
import spaceScene from "@assets/3D/space.glb"
import earthScene from '@assets/3D/earth.glb'

function App() {

  return (
    <section className='w-screen h-screen relative'>
      <Canvas className='w-full h-screen bg-black' camera={{near: 0.1, far: 1000}}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={10} />
        
        <Renderer asset={spaceScene} scale={20} position={[20,20,30]} rotation={[-Math.PI/2,1,0]} />
        <Renderer asset={earthScene} scale={0.01}/>

      </Canvas>
    </section>
  )
}

export default App
