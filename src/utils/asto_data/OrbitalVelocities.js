const ratio = 0.000001

export function OrbitalVelocity(planet){
    return OrbitalVelocities[planet] * ratio;
}

const OrbitalVelocities = {
    Mercury: 47.9,
    Venus: 35.0,
    Earth: 29.8,
    Mars: 24,
    Jupiter: 13.1,
    Saturn: 9.69, 
    Uranus: 6.81,
    Neptune: 5.43,

    earthMoon: 43.683,
    phobosMoon: 60.2,
    deimosMoon: 32,
    
}