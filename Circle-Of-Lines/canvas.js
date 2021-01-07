/*Inspiration:  https://fyprocessing.tumblr.com/image/103704831919*/

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: null,
    y: null
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x,
        mouse.y = event.y
    //console.log(mouse.x, mouse.y)
})

class Circle {
    constructor(x, y, radius) {
        this.x = x,
            this.y = y,
            this.radius = radius
    }
    update() {
        this.draw();
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    }
}

let circle1;

function init() {
    circle1 = new Circle(canvas.width / 2, canvas.height / 2, canvas.height / 3);
}
init();

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle1.update();
    for (let i = 0; i < 360; i++) {
        const staticX = circle1.x + circle1.radius * Math.sin(90 * Math.PI / 180);
        const x = circle1.x + circle1.radius * Math.sin(i * Math.PI / 180);
        const y = circle1.y + circle1.radius * Math.cos(i * Math.PI / 180);
        context.beginPath();
        context.moveTo(staticX, canvas.height / 2);
        context.lineTo(x, y);
        context.stroke();
    }
}
animate();