import pic from "../assets/pic.jpg";

function Hero() {
  return (
    <div id="home" className="hero">
      <h1>Hello, I'm Magdalene Precious Osei</h1>
      <p>Frontend Developer | React Specialist|System Analyst</p>
      <img className="picture" src={pic} alt="Profile picture" />

      
    </div>
  );
}

export default Hero;

