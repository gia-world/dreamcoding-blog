import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getFeaturedPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, prev, next } = post;

  return (
    <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
      <Image
        className="h-1/5 max-h-[300px] w-full"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

// 일부 slug에 한해서 페이지 미리 만들어두기 (SSG로 렌더링)
export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
