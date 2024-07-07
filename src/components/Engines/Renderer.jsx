import { useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import Rigidbody from "./Rigidbody";
import { SetTransformContext, TransformProvider } from "../../utils/contexts/Contexts";


export default function Renderer({position, scale, rotation, asset}){
    
    const MeshRef = useRef();
    const {scene, animations} = useGLTF(asset)

    const [transform, setTransform] = useState({
        position: position?position:[0,0,0],
        scale: scale?scale: [1,1,1],
        rotation: rotation?rotation: [0,0,0]
    })

    return (
        <mesh ref={MeshRef} position={transform.position} rotation={transform.rotation} scale={transform.scale}>
            <primitive object={scene}></primitive>

            <TransformProvider value={transform}>
                <SetTransformContext.Provider value={setTransform}>

                    <Rigidbody/>

                </SetTransformContext.Provider>
            </TransformProvider>
        </mesh>
    )
}