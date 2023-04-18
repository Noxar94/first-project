import selfie from "./images/img1.jpg"; //img
import "../styles/home.css"; //css
import { Link } from "react-router-dom"; // Link instead of a

export default function Home() {
  return (
    <div className="content">
      <div className="content-left">
        <img className="selfie" src={selfie} alt="" />
      </div>

      <div className="content-right">
        <h2>Hello There and welcome to my site!</h2>
        <p>
          My name is Jonatan Lundmark. <br />
          i'm 28 y/o and i live in Skara.
          <br />
          I live with my girlfriend and our two dogs! <br />
        </p>
        <h3 className="titel-button">
          Want to know a little more about me ? <br />
          click below:
        </h3>
        <button className="home-button">
          <Link to="/About">About</Link>
        </button>
      </div>
    </div>
  );
}
