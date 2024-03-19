import useWindowResize from "./test";

export default function UseWindowResizaTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Use Window resize</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
