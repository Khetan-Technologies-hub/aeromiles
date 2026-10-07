import ReactMarkdown from "react-markdown";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="space-y-5 text-base leading-7 text-ink [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-4 [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:text-navy [&_h2]:mt-9 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_li]:pl-1 [&_p]:max-w-[65ch] [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 sm:[&_h1]:text-4xl sm:[&_h2]:text-2xl">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
