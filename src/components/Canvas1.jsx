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
  console.log("renderedcanvas1");
  const canvasRef = useCanvas(draw);

  return (
    <>
      <canvas id="canvas1" ref={canvasRef}></canvas>
    </>
  );
}
const backgroundImages = backgroundImageUrls.map((url) => {
  const image = new Image();
  image.src = url;
  return image;
});
console.log(backgroundImages);
const draw = (ctx, frameCount, ratio) => {
  console.log(ctx.canvas.width, ctx.canvas.height);
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  backgroundImages.forEach((image) => {
    ctx.drawImage(
      image,
      0,
      0,
      ctx.canvas.width * ratio,
      ctx.canvas.height * ratio,
      0,
      0,
      ctx.canvas.width * ratio,
      ctx.canvas.height * ratio,
    );
  });
};
