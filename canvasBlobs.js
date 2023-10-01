const ctx = canvas.getContext("2d");
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;

const mouse = {
    x: null,
    y: null
};

class Ball {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dx = Math.random() * 2 - 1;
        this.dy = Math.random() * 2 - 1;
        this.radius = Math.random() * 25 + 25;
        this.color = `rgb(${Math.random() * 200 + 55}, ${Math.random() * 200 + 55}, ${Math.random() * 200 + 55})`;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < this.radius) {
            this.dx *= -1;
            this.x = this.radius;
        }
        if (this.x > canvas.width - this.radius) {
            this.dx *= -1;
            this.x = canvas.width - this.radius;
        }
        if (this.y < this.radius) {
            this.dy *= -1;
            this.y = this.radius;
        }
        if (this.y > canvas.height - this.radius) {
            this.dy *= -1;
            this.y = canvas.height - this.radius;
        }
    }

    render() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

const balls = [...new Array(100)].map(() => new Ball());

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.update();
        ball.render();
    });
}, 10);

canvas.addEventListener("mousemove", e => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
});
