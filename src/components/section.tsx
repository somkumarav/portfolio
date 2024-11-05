import { ReactNode } from "react";

export const Section = (props: { heading: string; children: ReactNode }) => {
  return (
    <div>
      <p className='mb-4'>{props.heading}</p>
      <div className='text-neutral-400'>{props.children}</div>
    </div>
  );
};
