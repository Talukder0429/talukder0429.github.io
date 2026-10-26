import { email, github, resumeUrl } from "../content";

const Footer = () => (
  <footer
    id="contact"
    className="flex flex-wrap justify-between gap-4 border-t border-line pt-12 pb-16 font-mono text-[15px]"
  >
    <div className="text-muted">&gt; contact --now</div>
    <div className="flex flex-wrap gap-x-6">
      <a href={`mailto:${email}`} className="py-2.5">
        email
      </a>
      <a href={github} className="py-2.5">
        github
      </a>
      <a href={resumeUrl} className="py-2.5">
        resume.pdf
      </a>
    </div>
  </footer>
);

export default Footer;
