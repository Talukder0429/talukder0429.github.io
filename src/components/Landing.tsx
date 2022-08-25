function Landing() {
  return (
    <div className="h-full w-fit mx-auto flex flex-col justify-center">
      <div style={{ fontSize: "clamp(1rem, 5vw, 2rem)", opacity: "90%" }}>
        Hello, I'm
      </div>
      <div
        className="typewriter font-mono text-secondary"
        style={{ fontSize: "clamp(2rem, 10vw, 4rem)" }}
      >
        Arnob Talukder.
      </div>
      <div style={{ fontSize: "clamp(1.5rem, 7.5vw, 3rem)", opacity: "80%" }}>
        A Software Engineer,
      </div>
      <div style={{ fontSize: "clamp(1rem, 5vw, 2rem)", opacity: "70%" }}>
        Based in Toronto, ON.
      </div>
      <div className="flex justify-between">
        <a href="#about" className="text-lg w-fit py-4">
          About Me &darr;
        </a>
        <a href="#contact" className="text-lg w-fit py-4">
          Contact Me &#8650;
        </a>
      </div>
    </div>
  );
}

export default Landing;
