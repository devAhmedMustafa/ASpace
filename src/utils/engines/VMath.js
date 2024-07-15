export default class VMath{
    
    static unitVector = [1, 1, 1];
    static zeroVector = [0, 0, 0];
    static upVector = [0, 1, 0];

    static AddVectors(...vectors){
        let result = [0,0,0]

        for(let i = 0; i < vectors.length; i++){

            result[0] += vectors[i][0]
            result[1] += vectors[i][1]
            result[2] += vectors[i][2]
        }

        result = this.Precise(result, 12);
        // console.log(result)

        return result;
    }

    static Distance(v1, v2){
        const d = Math.sqrt(
            Math.pow(v1[0] - v2[0], 2) +
            Math.pow(v1[1] - v2[1], 2) +
            Math.pow(v1[2] - v2[2], 2)
        )
        return parseFloat(d.toFixed(12))
    }

    static MultiplyByScaler(v, c){
        return [v[0] * c, v[1] * c, v[2] * c]
    }

    static DotProduct(v1, v2){
        return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    }

    static CorrespondMultiplication(...vectors){

        let result = [1,1,1]

        for(let i = 0; i < vectors.length; i++){
            result[0] *= vectors[i][0]
            result[1] *= vectors[i][1]
            result[2] *= vectors[i][2]
        }

        return result;
    }

    static Magnitude(v){
        return Math.sqrt(
            Math.pow(v[0], 2) +
            Math.pow(v[1], 2) +
            Math.pow(v[2], 2)
        )
    }

    static GetAngle2D(p1, p2){
        const x = p2[0]-p1[0];
        const z = p2[2]-p1[2];

        let angle = Math.atan(z/x);
        if (x < 0 && z < 0) angle += Math.PI;
        else if (x < 0) angle += Math.PI;
        else if (z < 0) angle += Math.PI*2;
        
        return parseFloat(angle).toFixed(12);
    }

    static Negative(v){
        return [-v[0], -v[1], -v[2]]
    }

    static Normalize(v){
        const magnitude = this.Magnitude(v)
        return [v[0] / magnitude, v[1] / magnitude, v[2] / magnitude]
    }

    static Precise(v, p){
        return [parseFloat(v[0].toFixed(p)), parseFloat(v[1].toFixed(p)), parseFloat(v[2].toFixed(p))]
    }

}