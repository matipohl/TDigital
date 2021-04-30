var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

var score = 0;

var pacman = {
    x: 11,
    y: 12
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

function displayScore() {
    document.getElementById("score").innerHTML = score
}

document.onkeydown = function(e) {
    if (e.key == "ArrowRight" && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
    } else if (e.key == "ArrowLeft" && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
    } else if (e.key == "ArrowUp" && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
    } else if (e.key == "ArrowDown" && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        drawWorld();
        score += 10;
        displayScore();
    }
    displayPacman();
}


//loading
drawWorld();
displayPacman();
displayScore();