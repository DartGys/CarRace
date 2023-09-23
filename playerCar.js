class PlayerCar {
    constructor(initialSpeed) {
        this.width = 50;
        this.height = 100;
        this.x = roadWidth / 2 - this.width / 2;
        this.y = roadHeight - this.height - 20;
        this.speed = initialSpeed + 1.5; // Початкова швидкість гравця
        this.xdir = 0;
    }

    move() {
        this.x += this.xdir * this.speed * speed;
        this.x = constrain(this.x, 0, roadWidth - this.width);
    }

    display() {
        image(carImage, this.x, this.y, this.width, this.height);
    }

    setDir(dir) {
        this.xdir = dir;
    }
}