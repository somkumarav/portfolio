import { WebLogo } from "./icons/web-logo";
import { ProjectExternalLink } from "./project-external-link";
export const Experience = (props: {
  title: string;
  websiteLink?: string;
  fromDate: Date;
  toDate: Date | "PRESENT";
}) => {
  return (
    <div className='bg-white/5 py-3 px-4 rounded-md'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1 hover:first:text-white first:transition-colors'>
          <ProjectExternalLink href='' logo={<WebLogo />} />
          <a href={props.websiteLink} target='_blank' className='text-white'>
            {props.title}
          </a>
        </div>
        <div className='bg-white/10 px-2 py-1 rounded-md w-30 flex items-center justify-center'>
          <p className='text-xs'>
            {props.fromDate.toLocaleDateString("en-US", {
              month: "short",
              year: "2-digit",
            })}
            {" - "}
            {props.toDate === "PRESENT"
              ? "Present"
              : props.toDate.toLocaleDateString("en-US", {
                  month: "short",
                  year: "2-digit",
                })}
          </p>
        </div>
      </div>
    </div>
  );
};
