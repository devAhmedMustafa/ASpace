import { useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState, useContext } from "react"
import Rigidbody from "./Rigidbody";
import { SetTransformContext, TransformProvider, CentersContext } from "../../utils/contexts/Contexts";


export default function Renderer({position, scale, rotation, asset, children, info}){
    
    const MeshRef = useRef();
    const {scene, animations} = useGLTF(asset)

    const [centers, setCenters] = useContext(CentersContext);

    const [transform, setTransform] = useState({
        position: position?position:[0,0,0],
        scale: scale?scale: [1,1,1],
        rotation: rotation?rotation: [.1,0,0]
    })

    useEffect(()=>{
        setCenters(prev=> ({...prev, [info?.name]: transform.position}));
    }, [transform])

    return (
        <group ref={MeshRef} position={transform.position} rotation={transform.rotation} scale={transform.scale}>
            <mesh >
                <primitive object={scene}></primitive>

                <TransformProvider value={transform}>
                    <SetTransformContext.Provider value={setTransform}>

                        {children}

                    </SetTransformContext.Provider>
                </TransformProvider>
            </mesh>
        </group>
    )
}