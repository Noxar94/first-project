import selfie from "./images/img1.jpg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="content">
      <div className="content-left">
        <img className="selfie" src={selfie} alt="" />
      </div>

      <div className="content-right">
        <h2>Hello There</h2>
        <p>
          My name is Jonatan Lundmark. <br />
          i'm 28 y/o and i live in Skara.
          <br />
          I live with my girlfriend and our two dogs! <br />
        </p>
      </div>
    </div>
  );
}
