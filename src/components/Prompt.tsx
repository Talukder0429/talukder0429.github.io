import type { ReactNode } from "react";

const Prompt = ({ children }: { children: ReactNode }) => (
  <h2 className="m-0 font-mono text-[22px] font-normal text-muted sm:text-[28px]">
    &gt; {children}
  </h2>
);

export default Prompt;
