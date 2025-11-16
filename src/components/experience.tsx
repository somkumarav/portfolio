import { WebLogo } from "./icons/web-logo";
export const Experience = (props: {
  title: string;
  websiteLink?: string;
  fromDate: Date;
  toDate: Date | "PRESENT";
}) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <a
          href={props.websiteLink}
          target='_blank'
          className='flex items-center space-x-1 hover:first:text-white first:transition-colors'
        >
          <WebLogo />
          <p className='text-white'>{props.title}</p>
        </a>
        <p>
          {props.fromDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
          {" - "}
          {props.toDate === "PRESENT"
            ? "Present"
            : props.toDate.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
        </p>
      </div>
    </div>
  );
};
