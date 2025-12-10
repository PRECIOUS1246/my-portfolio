import pic from "../assets/pic.jpg";

function Hero() {
  return (
    <div id="home" className="hero">
      <h1>Hello, I'm Magtech</h1>
      <p>Frontend Developer | React Specialist</p>
      <img className="picture" src={pic} alt="Profile picture" />

      
    </div>
  );
}

export default Hero;

