import { ReactNode } from "react";

function Experience() {
  const Event = (props: {
    name: string;
    href: string;
    startDate: string;
    endDate: string;
    showTopLine?: boolean;
    showBottomLine?: boolean;
  }) => {
    return (
      <div className="flex flex-col justify-center items-center order-2">
        <div
          className={props.showTopLine ? "h-full w-0 border-x-2" : "h-full w-0"}
        />
        <div className="text-sm py-1">{props.endDate}</div>
        <a
          className="text-center"
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="leading-none">{props.name}</h2>
        </a>
        <div className="text-sm py-1">{props.startDate}</div>
        <div
          className={
            props.showBottomLine ? "h-full w-0 border-x-2" : "h-full w-0"
          }
        />
      </div>
    );
  };

  const grid = "grid grid-cols-[0_85px_1fr] md:grid-cols-[1fr_115px_1fr]";

  return (
    <div id="experience" className="py-4">
      <h1>Professional Experience</h1>
      <div className={grid}>
        <div className="order-1" />
        <Event
          name="Nown"
          href="https://www.nownpos.com/"
          startDate="Sep 2021"
          endDate="Present"
          showBottomLine={true}
        />
        <div className="order-3">
          <h2 className="underline">Software Engineer</h2>
          <ul className="flex flex-col gap-2">
            <li>
              Write scalable and efficient code for a patron centric POS system
              using AngularJS and Java (Dropwizard Hibernate).
            </li>
            <li>Review code and mentor junior developers on the team</li>
            <li>
              Responsible for overseeing and maintaining the company's test
              environment
            </li>
          </ul>
        </div>
      </div>

      <div className={grid}>
        <div className="order-3 md:order-1 py-6 md:py-0">
          <h2 className="underline">Web Developer</h2>
          <ul className="flex flex-col gap-2">
            <li>
              Revamped the NFP{" "}
              <a href="https://www.bangladeshcentre.ca/">website</a> for greater
              accessibility for mobile and multi-lingual users.
            </li>
            <li>
              Setup donation systems through CanadaHelps and PayPal, and
              integrated them onto the website through their respective REST
              APIs.
            </li>
            <li>
              Setup a robust system to collate visual media from social events
              for future use.
            </li>
          </ul>
        </div>
        <Event
          name="BCCS"
          href="https://www.bangladeshcentre.ca/"
          startDate="June 2020"
          endDate="Nov 2020"
          showTopLine={true}
          showBottomLine={true}
        />
        <div className="order-1 md:order-3" />
      </div>

      <div className={grid}>
        <div className="order-1" />
        <Event
          name="KTA"
          href="https://www.kennedyaccounting.ca/"
          startDate="Feb 2017"
          endDate="May 2020"
          showTopLine={true}
        />
        <div className="order-3">
          <h2 className="underline">System Administrator</h2>
          <ul className="flex flex-col gap-2">
            <li>
              Setup automation of common tasks and batch client communications
              to ensure minimal downtime.
            </li>
            <li>
              Developed and maintained the business{" "}
              <a href="https://kennedyaccounting.ca/">website</a> to provide
              up-to-date information for clients.
            </li>
            <li>
              Created and managed workplace network and storage solutions while
              placing extreme emphasis on security.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
