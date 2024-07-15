import Rigidbody from "../Engines/Rigidbody"
import Renderer from "../Engines/Renderer"
import OrbitalPhysics from "../Engines/OrbitalPhysics"
import { Distance } from "../../utils/asto_data/Distances"
import { Scale } from "../../utils/asto_data/Scales"
import { OrbitalVelocity } from "../../utils/asto_data/OrbitalVelocities"
import { RotationSpeed } from "../../utils/asto_data/RotationSpeeds"
import VMath from "../../utils/engines/VMath"

export default function OrbitalBody({asset, name, center}){

    return(
        <Renderer asset={asset} position={[Distance(name),0,0]} scale={Scale(name)} info={{name: name}}>

                <Rigidbody rotationSpeed={VMath.MultiplyByScaler([0, 1, 0],RotationSpeed(name))}>
                    <OrbitalPhysics r={Distance(name)} center={center} speed={OrbitalVelocity(name)} />
                </Rigidbody>

        </Renderer>
    )
}