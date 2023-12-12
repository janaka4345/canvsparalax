import Canvas1 from "./Canvas1";
export default function World(props) {
  console.log("rendered");
  return (
    <>
      <div className="canvasdiv">
        <Canvas1 />
      </div>
    </>
  );
}
