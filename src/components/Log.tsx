import { activity, log } from "../content";
import Prompt from "./Prompt";

const Log = () => (
  <>
    <section id="log" className="flex flex-col gap-6 pb-16 sm:pb-24">
      <Prompt>git log --oneline --career</Prompt>
      <ol className="m-0 flex list-none flex-col p-0 font-mono text-[15px]">
        {log.map((entry) => (
          <li
            key={`${entry.date}-${entry.message}`}
            className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-0.5 border-b border-line py-2.5 sm:grid-cols-[80px_80px_1fr]"
          >
            <span className="text-muted">{entry.date}</span>
            <span
              className={entry.type === "HEAD" ? "text-accent" : "text-subtle"}
            >
              {entry.type}
            </span>
            <span className="col-span-2 font-sans text-body sm:col-span-1">
              {entry.message}
            </span>
          </li>
        ))}
      </ol>
    </section>

    <section
      aria-label="Activity"
      className="flex flex-col gap-6 pb-16 sm:pb-24"
    >
      <Prompt>git shortlog -sn</Prompt>
      <dl className="m-0 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {activity.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 rounded-lg border border-line p-4 last:col-span-2 sm:p-5 sm:last:col-span-1"
          >
            <dt className="order-2 text-sm text-subtle sm:text-[15px]">
              {stat.label}
            </dt>
            <dd className="order-1 m-0 font-mono text-2xl text-accent sm:text-[28px]">
              {stat.count}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  </>
);

export default Log;
