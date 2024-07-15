import { useFrame } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { BodyContext, SetTransformContext, TransformContext } from "../../utils/contexts/Contexts";
import Physics from "../../utils/engines/Physics";
import VMath from "../../utils/engines/VMath";

export default function OrbitalPhysics({center, r, speed=0.0001}){

    const [transform, setTransform] = [useContext(TransformContext), useContext(SetTransformContext)];
    const {velocity, setVelocity} = useContext(BodyContext);

    useEffect(()=>{
        if (center)
            console.log(VMath.GetAngle2D(center, transform.position) * 180 / Math.PI);
    }, [])

    useFrame((_, delta)=>{

        // Orbital Movement around center
        if (center){
            // setVelocity(Physics.OrbitalMovement(center, transform.position, 300, delta))
            setTransform({
                ...transform,
                position: Physics.OrbitalMovement(center, r, speed, delta)
            })
        }

        // console.log(velocity)
    })
}