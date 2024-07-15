import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import * as THREE from "three"

export default function Bloom({ children }) {
    const { gl, scene, camera, size } = useThree();
    const composer = useRef();
    const aspect = size.width / size.height;
    
    useEffect(() => {
      const renderPass = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(size.width, size.height),
        1.5, // strength
        1, // radius
        0 // threshold
      );
  
      composer.current = new EffectComposer(gl);
      composer.current.addPass(renderPass);
      composer.current.addPass(bloomPass);
  
      gl.setClearColor(0x000000);
    }, [gl, scene, camera, size]);
  
    useFrame(() => composer.current.render(), 1);
  
    return (
        <>
        {children}
        </>
    );
}