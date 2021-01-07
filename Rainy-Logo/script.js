const backgroundImage = new Image();
backgroundImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAE5CAIAAADpwkW3AAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTExVDIzOjA5OjMxLTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMS0wMlQxNDo1OTo1OC0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMS0wMlQxNDo1OTo1OC0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZjhkY2Y2Zi01Y2Q3LWJhNDctYjFhYS0zZWFmMjFkMTgwOWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MjkwNGZiYi0yM2ZjLTBlNDQtYjk5MS05MjY4YjYyY2IwZjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMmU2YWI0Mi01NGE3LTdmNGQtOWRlOC04ZmY1YmNkNWEyOWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyZTZhYjQyLTU0YTctN2Y0ZC05ZGU4LThmZjViY2Q1YTI5YSIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0xMVQyMzowOTozMS0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRmOGRjZjZmLTVjZDctYmE0Ny1iMWFhLTNlYWYyMWQxODA5ZSIgc3RFdnQ6d2hlbj0iMjAyMS0wMS0wMlQxNDo1OTo1OC0wNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjopgl8AABWDSURBVHic7d3LeeM6toZhVD818sAhVAAOwinUxOF46MgchANQCB543AP05mZTEoXLAtYF3/ucweldVRIJgD8XFyXx19vftwQAiOU/2hsAAJBHuANAQIQ7AAREuANAQIQ7AAREuANAQIQ7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";


backgroundImage.addEventListener("load", function () {
    const canvas = document.getElementById("canvas-1");
    const ctx = canvas.getContext("2d");

    /* Change Depending On Image Size (width,height) */
    canvas.width = 500;
    canvas.height = 313;

    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 6000;

    let mappedImage = [];

    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue) {
        return Math.sqrt(
            (red * red) * 0.299 + (green * green) * 0.587 + (blue * blue) * 0.114) / 100;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update() {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    init();

    function animate() {
        //ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});