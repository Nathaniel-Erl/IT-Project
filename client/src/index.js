import ReactDOM from "react-dom";
import "./styles.css";
import profile from "./images/profile.png";
import badge1 from "./images/badge1.png";
import badge2 from "./images/badge2.png";
import badge3 from "./images/badge3.png";
import badge4 from "./images/badge4.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <root>
    {/* nav bar */}
    <nav class="topnav">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </nav>

    {/* user */}
    <user>
      <profile>
        <img src={profile} alt="profile" />
        <name>Test123</name>
      </profile>
      <badgeGroup>
        <p>Badges</p>
        <badges>
          <img src={badge1} alt="badge1" />
          <img src={badge2} alt="badge2" />
          <img src={badge3} alt="badge3" />
          <img src={badge4} alt="badge4" />
        </badges>
      </badgeGroup>
    </user>
    <h1>Hello, world!</h1>
  </root>
);
