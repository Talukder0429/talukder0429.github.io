function About() {
  return (
    <div id="about" className="py-4">
      <h1>About Me</h1>
      <ul className="flex flex-col gap-4">
        <li>
          I always look forward to getting on my road bike and hitting the
          trails during good weather.
        </li>
        <li>
          I love gaming with friends, sticking mostly to board games and video
          games.
        </li>
        <li>
          Deep interest in all things astrophysics, with one of my all time
          favorite games being{" "}
          <a
            href="https://www.kerbalspaceprogram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KSP
          </a>
          .
        </li>
        <li>
          Bit of a computer hardware enthusiast; I try to keep up-to-date on the
          latest ongoings in the industry.
        </li>
      </ul>
    </div>
  );
}

export default About;
