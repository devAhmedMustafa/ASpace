import VMath from "./VMath";

export default class Physics{

    static gravitationalConstant = 6.6743 * Math.pow(10, -2);
    static RadEdges = [0, Math.PI/2, Math.PI, Math.PI*3/2]

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

    static ForceDirection(p1, p2, force){
        return VMath.MultiplyByScaler(VMath.AddVectors(p2, VMath.Negative(p1)), force);
    }

    static OrbitalMovement(center, position, speed, delta){
        // const r = VMath.Distance(center, position);
        const r = position
        let angle = Date.now() * speed;
        const prec = 20;

        const newPosition = [
            center[0] + r * parseFloat(Math.cos(angle).toFixed(prec)),
            center[1],
            center[2] + r * parseFloat(Math.sin(angle).toFixed(prec))
        ];

        return newPosition;
    }

    static OrbitalMovementVelocity(center, position, speed, delta){
        const r = VMath.Distance(center, position);

        const angle = VMath.GetAngle2D(center, position);

        const v = [
            -Math.sin(angle).toFixed(12),
            0, 
            Math.cos(angle).toFixed(12)
        ]

        return VMath.MultiplyByScaler(v, 0.001*speed)
    }

}