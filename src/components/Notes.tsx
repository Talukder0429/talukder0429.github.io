import { notes } from "../content";
import Prompt from "./Prompt";

const Notes = () => (
  <section id="notes" className="flex flex-col gap-6 pb-16 sm:pb-24">
    <Prompt>cat notes/*.md</Prompt>
    {notes.map((note) => (
      <details key={note.file} className="group rounded-lg border border-line">
        <summary className="flex cursor-pointer list-none flex-col gap-2 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
          <div className="flex items-center justify-between gap-4 font-mono text-[15px] text-muted">
            <span>notes/{note.file}</span>
            <span aria-hidden="true" className="text-accent">
              <span className="group-open:hidden">[+] read</span>
              <span className="hidden group-open:inline">[−] close</span>
            </span>
          </div>
          <h3 className="m-0 text-[22px] font-semibold">{note.title}</h3>
          <p className="m-0 text-body">{note.teaser}</p>
        </summary>
        <div className="flex flex-col gap-5 border-t border-line px-5 pt-5 pb-6 sm:px-6">
          {note.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="m-0 font-mono text-[15px] font-normal text-accent">
                ## {section.heading}
              </h4>
              {section.body.length === 1 ? (
                <p className="mt-1.5 mb-0 max-w-[760px] text-body">
                  {section.body[0]}
                </p>
              ) : (
                <ul className="mt-1.5 mb-0 flex max-w-[760px] list-disc flex-col gap-2 pl-5 text-body marker:text-accent">
                  {section.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </details>
    ))}
  </section>
);

export default Notes;
