import { useContext, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { SetTransformContext, TransformContext } from "../../utils/contexts/Contexts";
import Physics from "../../utils/engines/Physics";
import VMath from "../../utils/engines/VMath";

export default function Rigidbody(){

    const [transform, setTransform] = [
        useContext(TransformContext),
        useContext(SetTransformContext),
    ]

    const [velocity, setVelocity] = useState([0, 0, 0]);
    const [acceleration, setAcceleration] = useState([0, 0, 0])
    const [mass, setMass] = useState(1);

    const [angularVelocity, setAngularVelocity] = useState([0, 0, 0]);
    const [angularAcceleration, setAngularAcceleration] = useState([0, 0, 0]);
    
    useEffect(()=>{
    }, [])

    useFrame((_, delta)=>{

        setTransform({
            position: Physics.ApplyVelocity(transform.position, velocity, delta),
            rotation: Physics.ApplyVelocity(transform.rotation, angularVelocity, delta),
            scale: transform.scale
        })

        setVelocity(VMath.AddVectors(velocity, VMath.MultiplyByScaler(acceleration, delta)));
        setAngularVelocity(VMath.AddVectors(angularVelocity, VMath.MultiplyByScaler(angularAcceleration, delta)))
        
    })
}