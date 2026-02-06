
import rope from "../assets/icon.mp4"
export default function Rope() {

  return (
    <div className="rope-area">
      <div
        className="rope"
        style={{ transform: `translateX(0px)` }}
      >
        <video autoPlay loop muted src={rope}></video>
      </div>
    </div>
  );
}
