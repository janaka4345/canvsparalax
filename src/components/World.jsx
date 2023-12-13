import { Suspense } from "react";
import Canvas1 from "./Canvas1";
import Canvas2 from "./Canvas2";
export default function World(props) {
  console.log("rendered");
  return (
    <>
      {/* <Canvas1 /> */}
      <Suspense fallback={<h1>loading</h1>}>
        <Canvas2 />
      </Suspense>
    </>
  );
}
