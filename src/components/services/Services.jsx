import { useRef } from "react";
import "./services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique </b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>
            Business.
          </h1>
          <button>
            <a href="#Portfolio">What I Did?</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
