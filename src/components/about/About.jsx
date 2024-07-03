import "./about.scss";
const About = () => {
  return (
    <main>
      <div className="about">
        <div className="iconContainer">
          <div className="icons">
            <div className="item">
              <img src="/sign.png" alt="" />
            </div>
            <div className="item">
              <img src="/internet.png" alt="" />
            </div>
            <div className="item">
              <img src="/about.png" alt="" />
            </div>
            <div className="item">
              <img src="/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="myDes">
            <p>
              I'm a frontend developer with a knack for creating dynamic and
              visually appealing web applications. Skilled in frontend
              technologies, I build responsive, user-friendly interfaces and
              integrate APIs for efficient solutions. Always eager to learn and
              innovate, I thrive on solving complex problems and bringing
              creative ideas to life.
            </p>
          </div>
          <div className="nameDes">
            <i>~ Bhuwan Thapa</i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
