class OpponentCar {
    constructor() {
        this.width = 50;
        this.height = 100;
        this.x = random(roadWidth - this.width);
        this.y = -this.height;
        this.speed = 4;
        this.imageIndex = floor(random(npcCarImages.length)); // Вибираємо випадковий індекс зображення
    }

    move() {
        this.y += this.speed * speed;
    }

    display() {
        image(npcCarImages[this.imageIndex], this.x, this.y, this.width, this.height);
    }
}