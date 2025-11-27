import ReactMarkdown from "react-markdown";

export const Markdown = ({ children }: { children: string }) => {
  return (
    <div className='text-neutral-400 font-medium leading-relaxed prose prose-sm dark:prose-invert max-w-none prose-ul:my-2 prose-li:my-1 prose-p:my-0 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:list-disc prose-ul:ml-4'>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};
