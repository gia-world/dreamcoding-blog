import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  // 1. featured 포스트 데이터 읽어오기
  const posts = await getFeaturedPosts();

  // 2. featured 포스트 데이터 보여주기

  return (
    <section className="my-4">
      <h2 className="my-2 text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
