import { ReactNode } from "react";
import { Url } from "url";

export const Project = (props: {
  title: string;
  children: string | ReactNode;
  tags?: string[];
  websiteLink?: Url;
}) => {
  return (
    <div className='space-y-2'>
      <p className='text-foreground'>{props.title}</p>
      <p>{props.children}</p>
      <div className='flex flex-wrap gap-2'>
        {props.tags?.map((item) => (
          <div
            key={item}
            className='px-2 py-[2px] bg-neutral-800 text-white rounded-md'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
