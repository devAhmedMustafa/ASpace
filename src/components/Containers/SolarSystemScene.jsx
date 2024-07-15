import sunScene from "@assets/3D/Sun_1.glb"

import MercuryScene from "@assets/3D/mercury_nasa.glb"
import VenusScene from "@assets/3D/venus_nasa.glb"
import EarthScene from '@assets/3D/Earth_nasa.glb'
import MarsScene from "@assets/3D/mars_s.glb"
import JupiterScene from "@assets/3D/jupiter_s.glb"
import SaturnScene from "@assets/3D/saturn_nasa.glb"
import UranusScene from "@assets/3D/uranus_nasa.glb"
import NeptuneScene from "@assets/3D/neptune_s.glb"

import spaceScene from "@assets/3D/night_sky.glb"

import moonScene from '@assets/3D/moon_nasa.glb'
import phobosScene from "@assets/3D/phobos.glb"
import deimosScene from "@assets/3D/deimos.glb"

import { useEffect, useState, useRef, useContext } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CentersContext, FocusContext } from "../../utils/contexts/Contexts"
import Renderer from "../Engines/Renderer"
import Rigidbody from "../Engines/Rigidbody"
import OrbitalPhysics from "../Engines/OrbitalPhysics"
import { Scale } from "../../utils/asto_data/Scales"
import OrbitalBody from "../3D/OrbitalBody"
import Bloom from "../Shaders/Bloom"
import AnimatedCamera from "../3D/AnimatedCamera"

export default function SolarSystemScene(){

    const [centers, setCenters] = useState({});
    const [focus] = useContext(FocusContext)

    return (
    <Canvas className='w-full h-screen bg-black' camera={{near: 0.01, far: 100000}}>

        <AnimatedCamera position={centers[focus]}scale={Scale(focus)*1000}/>

        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={6000} />

        {/* <Controls/> */}

        <CentersContext.Provider value={[centers, setCenters]}>

            <Renderer asset={spaceScene} scale={500} info={{name: "background"}}>
                <Rigidbody rotationSpeed={[.01, .01, 0]}>

                </Rigidbody>
            </Renderer>

            {/* Sun */}
            <Bloom>
                <Renderer asset={sunScene} position={[0,0,0]} scale={Scale("Sun")} info={{name: "Sun"}}>
                    <Rigidbody rotationSpeed={[0, 1, 0]}/>
                </Renderer>
            </Bloom>

            <OrbitalBody asset={MercuryScene} center={centers.Sun} name={"Mercury"}/>
            <OrbitalBody asset={VenusScene} center={centers.Sun} name={"Venus"}/>
            <OrbitalBody asset={EarthScene} center={centers.Sun} name={"Earth"}/>
            <OrbitalBody asset={MarsScene} center={centers.Sun} name={"Mars"}/>
            <OrbitalBody asset={JupiterScene} center={centers.Sun} name={"Jupiter"}/>
            <OrbitalBody asset={SaturnScene} center={centers.Sun} name={"Saturn"}/>
            <OrbitalBody asset={UranusScene} center={centers.Sun} name={"Uranus"}/>
            <OrbitalBody asset={NeptuneScene} center={centers.Sun} name={"Neptune"}/>

            <OrbitalBody asset={moonScene} center={centers.Earth} name={"earthMoon"}/>
            <OrbitalBody asset={phobosScene} center={centers.Mars} name={"phobosMoon"}/>
            <OrbitalBody asset={deimosScene} center={centers.Mars} name={"deimosMoon"}/>

        </CentersContext.Provider>
        

    </Canvas>
    )
}

function Controls(){
    const {
      camera,
      gl: {domElement},
    } = useThree();
  
    return <OrbitControls args={[camera, domElement]}/>
}

