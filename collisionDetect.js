function isCollision(car1, car2) {
    return (
        car1.x < car2.x + car2.width - 3 &&
        car1.x + car1.width - 3 > car2.x &&
        car1.y < car2.y + car2.height - 3 &&
        car1.y + car1.height - 3 > car2.y
    );
}