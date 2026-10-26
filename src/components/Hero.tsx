import { email, impact, intro, resumeUrl } from "../content";

const button =
  "inline-flex min-h-11 items-center rounded-md px-5 hover:no-underline";

const Hero = () => (
  <>
    <header
      id="top"
      className="flex flex-col gap-5 pt-12 pb-12 sm:pt-24 sm:pb-18"
    >
      <div className="font-mono text-muted">&gt; whoami</div>
      <h1 className="m-0 font-mono text-[clamp(44px,8vw,88px)] leading-none font-normal text-accent">
        Arnob Talukder
        <span className="text-fg motion-safe:animate-blink">_</span>
      </h1>
      <p className="m-0 max-w-[760px] text-[clamp(20px,2.4vw,26px)]">{intro}</p>
      <div className="flex flex-wrap gap-3 pt-3">
        <a
          href={resumeUrl}
          className={`${button} bg-accent font-semibold text-bg hover:bg-accent-hover hover:text-bg`}
        >
          Download resume
        </a>
        <a
          href={`mailto:${email}`}
          className={`${button} border border-line-strong text-fg hover:border-accent hover:text-fg`}
        >
          {email}
        </a>
      </div>
    </header>

    <section
      aria-label="Impact"
      className="grid grid-cols-2 gap-3 pb-16 sm:gap-4 sm:pb-24 lg:grid-cols-4"
    >
      {impact.map((stat) => (
        <div
          key={stat.value}
          className="flex flex-col gap-1.5 rounded-lg border border-line p-4 sm:p-5"
        >
          <div className="font-mono text-2xl whitespace-nowrap text-accent sm:text-[32px]">
            {stat.value}
          </div>
          <div className="text-sm text-subtle sm:text-[15px]">{stat.label}</div>
        </div>
      ))}
    </section>
  </>
);

export default Hero;
