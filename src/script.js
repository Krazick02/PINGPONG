
let bX = 300;
let bY = 200;
let ballSpeed = 5;
let ballSpeedY = 4;

let player1 = 0;
let player2 = 0;

let gameOver = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    p1 = new Paddle(true)
    p2 = new Paddle(false)
}
function draw() {
    background(25);

    p1.draw()
    p2.draw()


    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("PUNTAJE    " + player1 + ' - ' + player2 , 150, 40);

    ellipse(bX, bY, 20, 20);

    if (!gameOver) {
        bX += ballSpeed;
        bY += ballSpeedY;

        if (bY < 10 || bY > height - 20) {
            ballSpeedY *= -1;
        }
        if (bX < 0 || bX > width) {
            bX = width / 2;
            bY = height / 2;
            if (ballSpeed > 0) {
                player1++;
            } else {
                player2++;
            }
        }

        if ( bX - 10 < 20 + 10 && bY > p1.y && bY < p1.y + p1.h ) {
            ballSpeed *= -1;
        }

        if ( bX + 10 > width - 20 - 10 && bY > p2.y && bY < p2.y + p1.h ) {
            ballSpeed *= -1;
        }
    }


    if (keyIsDown(87) && p1.y > 0) {
        p1.y -= 10;
    }
    if (keyIsDown(83) && p1.y + p1.h < height) {
        p1.y += 10;
    }


    if (keyIsDown(UP_ARROW) && p2.y > 0) {
        p2.y -= 10;
    }
    if (keyIsDown(DOWN_ARROW) && p2.y + p1.h < height) {
        p2.y += 10;
    }

    if (player1 >= 5) {
        textSize(34);
        textAlign(CENTER);
        fill(100, 100, 100);
        text('EL GANADOR ES PLAYER1', width / 2, height / 2);
        gameOver = true;
    } else if (player2 >= 5) {
        textSize(34);
        textAlign(CENTER);
        fill(100, 100, 100);
        text('EL GANADOR ES PLAYER2', width / 2, height / 2);
        gameOver = true;
    }
}