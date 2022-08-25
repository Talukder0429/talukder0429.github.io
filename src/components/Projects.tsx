import so3 from "../images/so3.png";
import plot from "../images/plot.png";
import gmd from "../images/gmd.png";

const Card = (props: {
  img: string;
  repo: string;
  title: string;
  stack: string;
}) => {
  return (
    <div
      className="card rounded-2xl scale-95 hover:scale-100 transition-transform"
      style={{
        backgroundImage: `linear-gradient(transparent, #2E3642), url(${props.img})`,
      }}
    >
      <a
        href={props.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full p-4 flex flex-col justify-end"
      >
        <h2>{props.title}</h2>
        <span className="text-lg italic">{props.stack}</span>
      </a>
    </div>
  );
};

function Projects() {
  return (
    <div id="projects" className="py-4">
      <h1>Recent Projects</h1>
      <div className="flex flex-wrap justify-center gap-y-2">
        <Card
          img={so3}
          repo="https://github.com/Talukder0429/so3ic"
          title="SO3 Crafting Calculator"
          stack="PERN stack | TypeScript"
        />
        <Card
          img={plot}
          repo="https://github.com/Talukder0429/matplotlib_legend_checkbox"
          title="Subplot Visibility Toggle"
          stack="Python | Matplotlib"
        />
        <Card
          img={gmd}
          repo="https://github.com/Talukder0429/guessmydrawing-io"
          title="GuessMyDrawing.io"
          stack="JavaScript | Socket.IO"
        />
      </div>
    </div>
  );
}

export default Projects;
