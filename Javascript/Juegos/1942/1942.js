var hero = {
    x: 300,
    y: 500
}

var enemies = [
    { type: "enemy1", x: 50, y: 50 },
    { type: "enemy2", x: 150, y: 50 },
    { type: "enemy1", x: 250, y: 50 },
    { type: "enemy2", x: 350, y: 50 },
    { type: "enemy1", x: 450, y: 50 },
    { type: "enemy2", x: 550, y: 50 },
    { type: "enemy1", x: 650, y: 50 }
];

function displayHero() {
    document.getElementById('hero').style['top'] = hero.y + "px";
    document.getElementById('hero').style['left'] = hero.x + "px";
}

function displayEnemies() {
    var output = '';
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].type == "enemy1") {
            output += "<div class='enemy1' style='top:" + enemies[i].y + "; left:" +
                enemies[i].x + ";'></div>"
        } else if (enemies[i].type == "enemy2") {
            output += "<div class='enemy2' style='top:" + enemies[i].y + "; left:" +
                enemies[i].x + ";'></div>"
        }
    }
    document.getElementById('enemies').innerHTML = output;
}

function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].y += 3
    }
}

function gameLoop() {
    displayHero()
    moveEnemies();
    displayEnemies();
}

setInterval(gameLoop, 100);


document.onkeydown = function(a) {
    if (a.key == "ArrowLeft") {
        hero.x -= 5;
    } else if (a.key == "ArrowRight") {
        hero.x += 5;
    } else if (a.key == "ArrowUp") {
        hero.y -= 5
    } else if (a.key == "ArrowDown") {
        hero.y += 5;
    }
    displayHero();
}
displayHero();
displayEnemies();