class BalaCanhao {
    constructor(x, y) {
        var options = {
            isStatic: true
        };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
    }
    atirar() {
        var novoAngulo = canhao.angle - 28;
        novoAngulo = novoAngulo * (3.14 / 180)
        var v = p5.Vector.fromAngle(novoAngulo);
        v.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: v.x * (180 / 3.14),
            y: v.y * (180 / 3.14)
        });
    }

    display() {
        var pos = this.body.position;
        push();

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }


}