/*Inspiration: New Year*/

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

const gravity = 0.05;
const friction = 0.978;

class Firework {
    constructor(x, y, radius, velocity, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: velocity.x,
            y: velocity.y
        };
        this.opacity = 1
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.y += gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.x += Math.random();
        this.x -= Math.random();
        this.opacity -= 0.003;
    }
}

class FireworkProjectile {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height;
        this.radius = 5;
    }

    update() {
        this.draw();
        if (this.y != 0) {
            this.y -= canvas.height * 0.003 / 2;
        }
        if (this.y <= 0) {
            this.y = canvas.height - 10;
        }
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}


const fireworkArray = [];
const fireworkTrails = [];

function init() {
    const particleCount = 40
    const power = 12;
    let radians = (Math.PI * 2) / particleCount
    for (let i = 0; i < particleCount; i++) {
        fireworkTrails.push(new FireworkProjectile(
            //X
            canvas.width / 2,
            //Y
            canvas.height,
            //Radius
            5
        ));
    }

    for (let i = 0; i < particleCount; i++) {
        fireworkArray.push(new Firework(
            //X
            canvas.width / 2,
            //Y
            canvas.height / 2,
            //Radius
            5,
            //Velocity 
            {
                x: Math.cos(radians * i) * (Math.random() * power / 1.8),
                y: Math.sin(radians * i) * (Math.random() * power / 1.8)
            },
            //Color
            `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        ));
    }
}
//init();

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let j = 0; j < fireworkTrails.length; j++) {
        if (fireworkArray[j].opacity > 0) {
            fireworkTrails[j].update();
        } else {
            fireworkTrails.splice(j, 1);
        }
    }

    if (fireworkArray.length > 0) {
        for (let i = 0; i < fireworkArray.length; i++) {
            if (fireworkArray[i].opacity >= 0) {
                console.log(fireworkArray[i].opacity);
                fireworkArray[i].update();
            } else {
                fireworkArray.splice(i, 1);
            }
        }

    } else {
        init();
    }

}
animate();