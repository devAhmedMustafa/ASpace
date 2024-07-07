import VMath from "./VMath";

export default class Physics{

    static gravitationalConstant = 6.6743 * Math.pow(10, -11);

    static ApplyVelocity(position, velocity, delta){
        return VMath.AddVectors(position, VMath.MultiplyByScaler(velocity, delta));
    }

    static ApplyForce(mass, force){
        return VMath.MultiplyByScaler(force, 1/mass);
    }

    static GetInertia(mass, radius){
        return 0.4 * mass * radius * radius;
    }

    static GravitationalForce(m1, m2, r){
        return (this.gravitationalConstant)*(m1*m2)/Math.pow(r,2);
    }

}