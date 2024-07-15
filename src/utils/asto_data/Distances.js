const ratio = 12
const width = 30

export function Distance(planet){
    return (Distances[planet] * ratio)+width;
}

const Distances = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1,
    Mars: 1.52,
    Jupiter: 5.2,
    Saturn: 9.58, 
    Uranus: 19.2,
    Neptune: 24.1,
    earthMoon: -2.4,
    phobosMoon: -2.476,
    deimosMoon: -2.455,

}