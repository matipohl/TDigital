var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

var score = 0;
var lives = 3;

var pacman = {
    x: 11,
    y: 12
}

var ghost = {
    x: 11,
    y: 1,
    movement: {
        0: 0.25,
        1: 0.25,
        2: 0.25,
        3: 0.25
    }
}

function drawWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += '\n<div class="row">';
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += '<div class="brick"></div>';
            } else if (world[i][j] == 1) {
                output += '<div class="coin"></div>';
            } else if (world[i][j] == 0) {
                output += '<div class="empty"></div>';
            } else if (world[i][j] == 3) {
                output += '<div class="cherry"></div>';
            }
        }
        output += '\n</div>';
    }
    document.getElementById("world").innerHTML = output;
}

function displayPacman() {
    var distance = 20;
    document.getElementById("pacman").style.top = pacman.y * distance + "px";
    document.getElementById("pacman").style.left = pacman.x * distance + "px";
}

function displayGhost() {
    var distance = 20;
    document.getElementById("ghost").style.top = ghost.y * distance + "px";
    document.getElementById("ghost").style.left = ghost.x * distance + "px";
}

function displayScore() {
    document.getElementById("score").innerHTML = score
}

function displayLives() {
    document.getElementById("lives").innerHTML = lives
}

document.onkeydown = function(e) {
    if (e.key == "ArrowRight" && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
        document.getElementById("pacman").style.transform = "rotate(180deg)";
        if (pacman.y == ghost.y && pacman.x == ghost.x) {
            lives--;
            displayLives();
        }
    } else if (e.key == "ArrowLeft" && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
        document.getElementById("pacman").style.transform = "rotate(0deg)";
        if (pacman.y == ghost.y && pacman.x == ghost.x) {
            lives--;
            displayLives();
        }

    } else if (e.key == "ArrowUp" && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
        document.getElementById("pacman").style.transform = "rotate(90deg)";
        if (pacman.y == ghost.y && pacman.x == ghost.x) {
            lives--;
            displayLives();
        }
    } else if (e.key == "ArrowDown" && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
        document.getElementById("pacman").style.transform = "rotate(270deg)";
        if (pacman.y == ghost.y && pacman.x == ghost.x) {
            lives--;
            displayLives();
        }
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        drawWorld();
        score += 10;
        displayScore();
    } else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        drawWorld();
        score += 50;
        displayScore();
    }
    displayPacman();
}

setInterval(function ghostMovement() {
    let dir = getRandomInt(0, 4);
    if (dir == 0 && world[ghost.y][ghost.x + 1] != 2) {
        ghost.x++;
    } else if (dir == 1 && world[ghost.y][ghost.x - 1] != 2) {
        ghost.x--;
    } else if (dir == 2 && world[ghost.y - 1][ghost.x] != 2) {
        ghost.y--;
    } else if (dir == 3 && world[ghost.y + 1][ghost.x] != 2) {
        ghost.y++;
    }
    displayGhost();

}, 100);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//loading
drawWorld();
displayPacman();
displayGhost();
displayScore();
displayLives();