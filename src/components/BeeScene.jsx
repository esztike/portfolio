import "./BeeScene.css";

function BeeScene() {
  return (
    <div className="bee-scene" aria-hidden="true">
      <div className="bee-scene-inner">
        <div className="bee-wrapper">
          <img src="/bee.svg" alt="" className="bee" width="64" height="64" />
        </div>
        <div className="daisy-wrapper">
          <img
            src="/daisy.svg"
            alt=""
            className="daisy"
            width="80"
            height="107"
          />
        </div>
      </div>
    </div>
  );
}

export default BeeScene;
