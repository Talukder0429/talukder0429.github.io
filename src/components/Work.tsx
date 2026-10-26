import { jobs } from "../content";
import Prompt from "./Prompt";

const Work = () => (
  <section id="work" className="flex flex-col gap-10 pb-16 sm:pb-24">
    <Prompt>cat work.log</Prompt>
    {jobs.map((job, i) => (
      <article
        key={job.title}
        className={`grid grid-cols-1 gap-6 border-t-2 pt-6 md:grid-cols-3 ${i === 0 ? "border-accent" : "border-line-strong"}`}
      >
        <div className="flex flex-col gap-1">
          <div className="font-mono text-[15px] text-muted">{job.dates}</div>
          <h3 className="m-0 text-[22px] font-semibold">{job.title}</h3>
          <div className="text-accent">{job.company}</div>
          {job.note && <div className="text-[15px] text-muted">{job.note}</div>}
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          {job.groups.map((group) => (
            <div key={group.label ?? job.title}>
              {group.label && (
                <div className="font-mono text-[15px]">{group.label}</div>
              )}
              <ul className="mt-1.5 flex list-disc flex-col gap-2 pl-5 text-body marker:text-accent">
                {group.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    ))}
  </section>
);

export default Work;
