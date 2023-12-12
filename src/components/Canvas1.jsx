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
// console.log(backgroundImages);
const draw = (ctx, frameCount, ratio) => {
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  backgroundImages.forEach((image) => {
    ctx.drawImage(
      image.image,
      (frameCount * image.speed) % image.image.width,
      0,
      ctx.canvas.width * ratio,
      ctx.canvas.height * ratio,
      0,
      0,
      ctx.canvas.width * ratio,
      ctx.canvas.height * ratio,
    );
  });
  // backgroundImages.forEach((image) => {
  //   ctx.drawImage(
  //     image.image,
  //     ((frameCount * image.speed) % image.image.width) +
  //       image.image.width -
  //       520,
  //     0,
  //     ctx.canvas.width * ratio,
  //     ctx.canvas.height * ratio,
  //     0,
  //     0,
  //     ctx.canvas.width * ratio,
  //     ctx.canvas.height * ratio,
  //   );
  // });
};
