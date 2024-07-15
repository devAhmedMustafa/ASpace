import * as THREE from "three"
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import VMath from "../../utils/engines/VMath";

export default function AnimatedCamera({position=[0,0,0], scale=1}){
    const { camera } = useThree();
    let length = VMath.MultiplyByScaler([-1.6, 0.2, 1.6], scale)
    if (position[0] == 0){
        length = [0, 200, 0];
    }
    const targetPosition = position?VMath.AddVectors(position, length):[100, 10, 100];

    useEffect(() => {
        camera.near = 0.1; 
        camera.far = 1000000; 
        camera.updateProjectionMatrix();
    }, [camera]);

    useFrame(() => {
        camera.lookAt(position[0], position[1], position[2]);
        camera.position.lerp(new THREE.Vector3(...targetPosition), 0.5);
    });

    return null;
}