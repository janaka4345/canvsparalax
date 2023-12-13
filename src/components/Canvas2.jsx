import { Suspense } from "react";
import useCanvas from "./useCanvas";
const backgroundImageUrls = [
  "./layer-1.png",
  "./layer-2.png",
  "./layer-2.png",
  "./layer-3.png",
  "./layer-4.png",
  "./layer-5.png",
];
/// thereis a  jump when adjusting speed try to fix
export default function Canvas2(props) {
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
  return image;
});
let gamespeed = 15;
let x = 0;
const draw = (ctx, frameCount, ratio) => {
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  backgroundImages.forEach((image, i) => {
    // gamespeed = gamespeed * image.speed;

    ctx.drawImage(
      image,
      x + 0,
      0,
      image.width * ratio,
      ctx.canvas.height * ratio,
    );
    ctx.drawImage(
      image,
      x + image.width,
      0,
      image.width * ratio,
      ctx.canvas.height * ratio,
    );
  });
  x -= gamespeed;
  x < -2400 ? (x = 2400 + x - gamespeed) : null;
};
