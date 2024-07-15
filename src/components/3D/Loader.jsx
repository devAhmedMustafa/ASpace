import "./Loader.css"
import { Html } from "@react-three/drei"

export default function Loader(){
    return (
        <Html>

        <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </Html>

    )
}