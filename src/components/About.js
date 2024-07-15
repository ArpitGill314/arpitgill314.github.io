import "./About.css";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="AboutContent">
        <div className="AboutLeftContent">
          <h1>About me</h1>
          <p>
            I'm a computer science student at the University of Cincinnati with
            an interest in software development and artifical intelligence. I'm
            actively working on honing my skills such as Python, Javascript, and
            React and expanding my skillset with other technologies. I look
            forward to potentially applying my skills at a co-op during the fall
            2024 season. In my free time, I enjoy relaxing with my friends and
            family.
          </p>
        </div>
        <div className="AboutMiddleSpacer"></div>
        <div className="AboutRightContent">
          <img
            src="/ProfilePicture.jpeg"
            alt="Arpit Gill's beautiful face"
            id="profilepic"
          />
        </div>
      </div>
      <div className="Header">
        <h2>Here's me...</h2>
      </div>
      <div className="BottomContent">
        <div className="BottomItem" id="about1">
          <p>Celebrating my dad's birthday with my family</p>
          <img src="/AboutPic1.jpeg" id="aboutpic1" alt="Me and my family" />
        </div>
        <div className="BottomItem" id="about2">
          <p>At an event with my friends</p>
          <img src="/AboutPic2.jpeg" id="aboutpic2" alt="Me and my friends" />
        </div>
        <div className="BottomItem" id="about3">
          <p>Getting gains with my friend</p>
          <img src="/AboutPic3.jpeg" id="aboutpic3" alt="Me and my friend" />
        </div>
      </div>
    </div>
  );
};

export default About;
