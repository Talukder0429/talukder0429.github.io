import { about, stack } from "../content";
import Prompt from "./Prompt";

const About = () => (
  <>
    <section aria-label="Stack" className="flex flex-col gap-4 pb-16 sm:pb-24">
      <Prompt>echo $STACK</Prompt>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0 font-mono text-[15px]">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-line-strong px-3 py-1.5"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>

    <section id="about" className="flex flex-col gap-4 pb-16 sm:pb-24">
      <Prompt>cat about.txt</Prompt>
      <p className="m-0 max-w-[720px] text-body">{about}</p>
    </section>
  </>
);

export default About;
