export default class VMath{
    static AddVectors(...vectors){
        let result = [0,0,0]

        for(let i = 0; i < vectors.length; i++){

            result[0] += vectors[i][0]
            result[1] += vectors[i][1]
            result[2] += vectors[i][2]
        }

        return result;
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
}