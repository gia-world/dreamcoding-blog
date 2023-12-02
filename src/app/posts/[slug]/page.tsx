import { getPostData } from "@/service/posts";
import React from "react";
import Image from "next/image";
import PostContent from "@/components/PostContent";
import { Preahvihear } from "next/font/google";
import AdjacentPostCard from "@/components/AdjacentPostCard";

type Props = {
  params: {
    slug: string;
  };
};

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
