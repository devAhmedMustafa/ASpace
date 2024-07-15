import mercury_img from "@assets/Images/mercury.png"
import venus_img from "@assets/Images/venus.png"
import earth_img from "@assets/Images/earth.png"
import mars_img from "@assets/Images/mars.png"
import jupiter_img from "@assets/Images/jupiter.png"
import saturn_img from "@assets/Images/saturn.png"
import uranus_img from "@assets/Images/uranus.png"
import neptune_img from "@assets/Images/neptune.png"
import sun_img from "@assets/Images/sun.png"

import "./Navigator.css"
import { useContext } from "react"
import { FocusContext } from "../../utils/contexts/Contexts"

export default function Navigator(){

    return (
        <div className="w-full flex justify-center items-center fixed bottom-4 left-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <nav className="bg-neutral-100 border-4 border-neutral-200 z-50 px-6 py-2 rounded-full flex justify-center items-center">
                
                <Anchor asset={sun_img} name="Sun"/>

                <Anchor asset={mercury_img} name="Mercury" />
                <Anchor asset={venus_img} name="Venus" />
                <Anchor asset={earth_img} name="Earth" />
                <Anchor asset={mars_img}  name="Mars"/>
                <Anchor asset={jupiter_img} name="Jupiter" />
                <Anchor asset={saturn_img} name="Saturn" />
                <Anchor asset={uranus_img} name="Uranus" />
                <Anchor asset={neptune_img} name="Neptune" />

            </nav>
        </div>
    )
}

function Anchor({asset, name="..."}){

    const [focus, setFocus] = useContext(FocusContext)

    return (
        <button onClick={()=>{setFocus(name)}} className="w-8 h-8 xl:w-16 xl:h-16 flex justify-center items-center relative planet_icon">
            <img className="w-[80%] hover:w-full transition-all" src={asset} alt="" />
            <h1 className="absolute -top-3 text-mg bg-white rounded-full px-2 py-1 opacity-0 transition-all duration-300">{name}</h1>
        </button>
    )
}