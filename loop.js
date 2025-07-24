window.onload = () => {
  const canvas = document.getElementById("loopCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 500;
  canvas.height = 500;

  let time = 0;

  function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const spiralArcs = 120;
  const spacing = 2; // space between spiral loops

  for (let i = 0; i < spiralArcs; i++) {
    const angle = i * 0.15 + time;
    const spiralRadius = i * spacing * 0.4;

    const x = centerX + Math.cos(angle) * spiralRadius;
    const y = centerY + Math.sin(angle) * spiralRadius;

    ctx.beginPath();
    ctx.strokeStyle = "#79a8c6";
    ctx.lineWidth = 2;

    // Each arc is small, creating the illusion of flow
    ctx.arc(x, y, 20, angle, angle + Math.PI / 12);
    ctx.stroke();
  }

  time += 0.02;
  requestAnimationFrame(draw);
}

  draw();
};
