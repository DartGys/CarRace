let player;
let opponents = [];
let roadWidth = 400;
let roadHeight = 600;
let speed = 1;
let speedIncreaseInterval = 300;

function setup() {
    createCanvas(roadWidth, roadHeight);
    player = new PlayerCar(speed);
    frameRate(60);
}

function draw() {
    background(100);

    player.move();
    player.display();

    for (let i = opponents.length - 1; i >= 0; i--) {
        opponents[i].move();
        opponents[i].display();

        // Перевірка на зіткнення з гравцем
        if (isCollision(player, opponents[i])) {
            gameOver();
        }

        // Видалення опонента поза видимою областю
        if (opponents[i].y > roadHeight) {
            opponents.splice(i, 1);
        }
    }

    // Додавання нових опонентів
    if (frameCount % (60 / Math.round(speed)) === 0) {
        let opponent = new OpponentCar();
        opponents.push(opponent);
    }

    textSize(16);
    fill(0);
    text(`Швидкість: ${Math.round(speed * (speed * 5) + 60)} km/h`, 10, 20);

    if (frameCount % speedIncreaseInterval === 0) {
        speed += 0.2;
    }
}