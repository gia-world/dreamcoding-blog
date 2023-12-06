import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All posts",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  // Set 은 중복 허용하지 않음, 고유한 카테고리 아이템이 들어있는 배열이 생성됨
  return <FilterablePosts posts={posts} categories={categories} />;
}
