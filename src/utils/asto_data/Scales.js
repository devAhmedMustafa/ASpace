const ratio = 0.001

export function Scale(planet){
    return Scales[planet] * ratio;
}

const Scales = {
    Mercury: 0.5616,
    Venus: 0.85711,
    Earth: 1,
    Mars: 0.45059,
    Jupiter: 13.33197,
    Saturn: 7.59155,
    Uranus: 6.08103,
    Neptune: 5.7358,
    Sun: 50.01761,
    earthMoon: 0.25,
    phobosMoon: 3,
    deimosMoon: 2,

}