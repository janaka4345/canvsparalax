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
const backgroundImages = backgroundImageUrls.map((url, i) => {
  const image = new Image();
  // console.log(image);
  image.src = url;
  const speed = i * 2;
  return { image, speed };
});
const xt = 1;
let frameCountN = 0;
console.log(backgroundImages);
const draw = (ctx, frameCount, ratio) => {
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  ctx.drawImage(
    backgroundImages[4].image,
    (frameCountN * xt) % backgroundImages[4].image.width,
    0,
    ctx.canvas.width * ratio,
    ctx.canvas.height * ratio,
  );
  ctx.drawImage(
    backgroundImages[5].image,
    backgroundImages[4].image.width +
      ((frameCountN * xt) % backgroundImages[5].image.width),
    0,
    ctx.canvas.width * ratio,
    ctx.canvas.height * ratio,
  );
  // backgroundImages.forEach((image) => {
  //   ctx.drawImage(
  //     image.image,
  //     -(frameCountN * image.speed) % image.image.width,
  //     0,
  //     ctx.canvas.width * ratio,
  //     ctx.canvas.height * ratio,
  //   );
  //   ctx.drawImage(
  //     image.image,
  //     1000 - ((frameCountN * image.speed) % image.image.width),
  //     0,
  //     ctx.canvas.width * ratio,
  //     ctx.canvas.height * ratio,
  //   );
  // });
  // backgroundImages.forEach((image) => {
  //   ctx.drawImage(
  //     image.image,
  //     0,
  //     0,
  //     ctx.canvas.width * ratio,
  //     ctx.canvas.height * ratio,
  //     -((frameCountN * image.speed) % image.image.width) + image.image.width,
  //     0,
  //     ctx.canvas.width * ratio,
  //     ctx.canvas.height * ratio,
  //   );
  // });
  frameCountN--;
};
