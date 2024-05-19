document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width=300
    canvas.height=300

    function draw(n) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.beginPath()
         ctx.lineWidth=2;
         ctx.strokeStyle="black"
        const dotPositions = {
            1: [[100, 100]],
            2: [[50, 50], [150, 150]],
            3: [[50, 50], [100, 100], [150, 150]],
            4: [[50, 50], [50, 150], [150, 50], [150, 150]],
            5: [[50, 50], [50, 150], [100, 100], [150, 50], [150, 150]],
            6: [[50, 50], [50, 100], [50, 150], [150, 50], [150, 100], [150, 150]]
        };

        dotPositions[n].forEach(pos => {
            ctx.beginPath();
            ctx.arc(pos[0], pos[1], 10, 0, Math.PI * 2, true);
            ctx.fill();
        });
    }

    function roll() {
        const numb = Math.floor(Math.random() * 6) + 1;
        draw(numb);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            roll();
        }
    });

     roll();
});