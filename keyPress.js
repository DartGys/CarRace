function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        player.setDir(-1);
    } else if (keyCode === RIGHT_ARROW) {
        player.setDir(1);
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        player.setDir(0);
    }
}