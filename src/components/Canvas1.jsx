import useCanvas from "./useCanvas";
const backgroundImageUrls = [
  "./layer-1.png",
  "./layer-2.png",
  "./layer-2.png",
  "./layer-3.png",
  "./layer-4.png",
  "./layer-5.png",
];

export default function Canvas1(props) {
  const canvasRef = useCanvas(draw);

  return (
    <>
      <canvas id="canvas1" ref={canvasRef}></canvas>
    </>
  );
}
const backgroundImages = backgroundImageUrls.map((url, i) => {
  const image = new Image();
  image.src = url;
  const speed = i + 1;
  return { image, speed };
});

const draw = (ctx, frameCount, ratio) => {
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  backgroundImages.forEach((image) => {
    ctx.drawImage(
      image.image,
      (-frameCount * image.speed) % image.image.width,
      0,
      image.image.width * ratio,
      ctx.canvas.height * ratio,
    );
    ctx.drawImage(
      image.image,
      image.image.width + ((-frameCount * image.speed) % image.image.width),
      0,
      image.image.width * ratio,
      ctx.canvas.height * ratio,
    );
  });
};
