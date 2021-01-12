/*Inspiration:  */

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Change canvas size when window scales
addEventListener('resize', function (e) {
    canvas.width = innerWidth,
        canvas.height = innerHeight
});

//Variable to store particles in
let particleArray;

//Mouse cords
const mouse = {
    x: null,
    y: null,
    radius: 100
}

//Apply mouse cords to mouse object above 
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    mouse.radius = 160;
});


ctx.fillStyle = 'white';
ctx.font = '50px Brush Script MT';
ctx.fillText('<3 You', 0, 35);
ctx.fillText('Kelsea', 10, 75);
const imageData = ctx.getImageData(0, 0, window.innerWidth, window.innerHeight);

//Custom Particle object
class Particle {
    //Values specific to particle
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.weight = (Math.random() * 6) + 1;
    }
    //What particle looks like
    draw() {
        ctx.fillStyle = 'pink';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    //How particles interact
    update() {
        //How far the mouse is from X and Y
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let newDirectionX = dx / distance;
        let newDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = newDirectionX * force * this.weight;
        let directionY = newDirectionY * force * this.weight;
        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 50;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 1;
            }
        }
    }
}

//Adding Particles to array to be used in animate loop below
function init() {
    particleArray = [];
    for (let y = 0, y2 = imageData.height; y < y2; y++) {
        for (let x = 0, x2 = imageData.width; x < x2; x++) {
            if (imageData.data[(y * 4 * imageData.width) + (x * 4) + 3] > 128) {
                let positionX = x + 40;
                let positionY = y + 12;
                particleArray.push(new Particle(positionX * 7.2, positionY * 10));
            }
        }
    }
}
init();

//Draw canvas for every frame
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
    }
    requestAnimationFrame(animate);
}
animate();