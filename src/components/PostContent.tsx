import MarkdownViewer from "@/components/MarkdownViewer";
import { PostData } from "@/service/posts";
import { FaRegCalendar } from "react-icons/fa6";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center gap-2 self-end text-sky-600">
        <FaRegCalendar />
        <p className="font-semibold">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mb-8 mt-4 w-44 border-2 border-sky-600"></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
