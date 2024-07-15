const ratio = 0.0001

export function RotationSpeed(planet){
    return RotationSpeeds[planet] * ratio;
}

const RotationSpeeds = {
    Mercury: 10.83,
    Venus: 6.52,
    Earth: 1574,
    Mars: 866,
    Jupiter: 4583,
    Saturn: 3840, 
    Uranus: 1794,
    Neptune: 919,

    earthMoon: 58.2,
    phobosMoon: 12,
    deimosMoon: 20,

}