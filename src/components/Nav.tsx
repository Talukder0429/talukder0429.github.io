const links = ["work", "notes", "log", "projects", "about", "contact"];

const Nav = () => (
  <nav className="sticky top-0 z-10 border-b border-line bg-bg/95 font-mono text-[15px] backdrop-blur">
    <div className="mx-auto flex max-w-[1040px] items-center gap-6 px-6">
      <a href="#top" className="shrink-0 py-3.5 text-muted">
        <span className="hidden sm:inline">arnob@toronto:</span>~$
      </a>
      <div className="ml-auto flex gap-5 overflow-x-auto pr-6 whitespace-nowrap [mask-image:linear-gradient(to_right,black_80%,transparent)] [scrollbar-width:none] sm:gap-6 sm:pr-0 sm:[mask-image:none]">
        {links.map((link) => (
          <a key={link} href={`#${link}`} className="py-3.5">
            ./{link}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;
