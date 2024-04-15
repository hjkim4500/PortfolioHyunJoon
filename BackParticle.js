// Get canvas & context

function setupCanvas(canvas) {
    var context = canvas.getContext("2d");
    const canvasParent = canvas.parentNode;
    let canvasWidth = canvasParent.clientWidth;
    let canvasHeight = canvasParent.clientHeight;
    var particles = [];
    var numParticles = 100;

    for (var i = 0; i < numParticles; i++) {
        particles.push(new createParticle());
    }
    function resize() {
        canvasWidth = canvasParent.clientWidth;
        canvasHeight = canvasParent.clientHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.width = canvasWidth + "px";
        canvas.style.height = canvasHeight + "px";
    }
    function createParticle() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.velocityX = Math.random() * 5;
        this.velocityY = Math.random() * 5;
        this.radius = Math.random() * 3;
        this.color = "white";
    }
    function draw() {
        // Moving this BG paint code insde draw() will help remove the trail of the particle
        // But the BG paint shouldn't blend with the previous frame
        context.globalCompositeOperation = "source-over";
        // Reduce the opacity of the BG paint to give the final touch
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        for (var i = 0; i < particles.length; i++) {
            context.beginPath();
            context.arc(
                particles[i].x,
                particles[i].y,
                particles[i].radius,
                0,
                2 * Math.PI
            );
            context.fillStyle = "cyan";
            context.fill();
            context.stroke();

            // Move particles by their velocity
            particles[i].x += particles[i].velocityX;
            particles[i].y += particles[i].velocityY;

            if (particles[i].x >= canvasWidth || particles[i].x <= 0)
                particles[i].velocityX = -particles[i].velocityX;
            if (particles[i].y >= canvasHeight || particles[i].y <= 0)
                particles[i].velocityY = -particles[i].velocityY;
        }
    }
    setInterval(draw, 33);
    window.addEventListener("resize", resize);
    resize();
}
for (let i = 1; i <= 4; i++) {
    const canvasId = `Backcanvas${i}`;
    const canvas = document.getElementById(canvasId);
    if (canvas) {
        setupCanvas(canvas);
    }
}
// Canvas properties

// Initialise particles

// Randomise creation and placement of particle
