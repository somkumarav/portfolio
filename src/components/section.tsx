import { ReactNode } from "react";

export const Section = (props: { title: string; children: ReactNode }) => {
  return (
    <div>
      <p className='mb-4 text-lg'>{props.title}</p>
      <div className='text-neutral-400'>{props.children}</div>
    </div>
  );
};
