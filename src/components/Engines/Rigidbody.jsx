import { useContext, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { BodyContext, SetTransformContext, TransformContext } from "../../utils/contexts/Contexts";
import Physics from "../../utils/engines/Physics";
import VMath from "../../utils/engines/VMath";

export default function Rigidbody({children, rotationSpeed=[0, .4, 0]}){

    const [transform, setTransform] = [
        useContext(TransformContext),
        useContext(SetTransformContext),
    ]

    const [velocity, setVelocity] = useState([0, 0, 0]);
    const [acceleration, setAcceleration] = useState([0, 0, 0])
    const [mass, setMass] = useState(1);

    const [angularVelocity, setAngularVelocity] = useState(rotationSpeed);
    const [angularAcceleration, setAngularAcceleration] = useState([0, 0, 0]);
    
    useEffect(()=>{
    }, [])

    useFrame((_, delta)=>{

        // setTransform({
        //     position: Physics.ApplyVelocity(transform.position, velocity, delta),
        //     rotation: Physics.ApplyVelocity(transform.rotation, angularVelocity, delta),
        //     scale: transform.scale
        // })

        setTransform((prev)=>({
            ...prev,
            rotation: Physics.ApplyVelocity(transform.rotation, angularVelocity, delta),
        }))

        // setVelocity(VMath.AddVectors(velocity, VMath.MultiplyByScaler(acceleration, delta)));
        setAngularVelocity(VMath.AddVectors(angularVelocity, VMath.MultiplyByScaler(angularAcceleration, delta)))
        // console.log(transform.position)
    })

    return (
        <BodyContext.Provider value={{
            mass: mass,
            velocity: velocity,
            acceleration: acceleration,
            angularVelocity: angularVelocity,
            angularAcceleration: angularAcceleration,
            setVelocity: setVelocity,
            setAcceleration: setAcceleration,
            setAngularVelocity: setAngularVelocity,
            setAngularAcceleration: setAngularAcceleration,
        }}>

            {children}

        </BodyContext.Provider>
    )
}