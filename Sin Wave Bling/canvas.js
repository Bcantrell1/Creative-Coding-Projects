const canvas = document.getElementById('canvas-1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const strokeColor = {
    h: 200,
    s: 50,
    l: 50
}

const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.01
};
let increment = wave.frequency;

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.04)';

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let index = 0; index < canvas.width; index++) {
        ctx.lineTo(index / 2 * increment, wave.y + Math.sin(index * wave.length + increment) * wave.amplitude * 3.8);
        ctx.lineTo(index / 2 * increment, wave.y + Math.sin(index * -wave.length + increment) * wave.amplitude * 4.9);
    }
    ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${
        strokeColor.s
      }%, ${strokeColor.l}%)`;

    if (increment > wave.frequency * canvas.width) {
        increment = 0;
    }
    ctx.stroke();
    increment += wave.frequency
}
animate();