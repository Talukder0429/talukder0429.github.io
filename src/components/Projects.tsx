import { project } from "../content";
import screenshot from "../images/so3-calculator.png";
import Prompt from "./Prompt";

const Projects = () => (
  <section id="projects" className="flex flex-col gap-6 pb-16 sm:pb-24">
    <Prompt>ls projects/</Prompt>
    <a
      href={project.url}
      className="group grid grid-cols-1 gap-6 rounded-xl border border-line p-6 text-fg hover:border-accent hover:text-fg hover:no-underline md:grid-cols-2"
    >
      <img
        src={screenshot}
        alt="The calculator showing a 95% success chance and conflicting prices for Atomic Gauntlets"
        width={1120}
        height={1400}
        loading="lazy"
        className="h-56 w-full rounded-md bg-card object-cover object-center sm:h-64"
      />
      <div className="flex flex-col gap-2.5">
        <h3 className="m-0 text-[22px] font-semibold text-accent group-hover:underline">
          {project.title}
        </h3>
        <p className="m-0 text-body">{project.description}</p>
        <div className="font-mono text-sm text-muted">
          {project.stack.join(" · ")}
        </div>
      </div>
    </a>
  </section>
);

export default Projects;
