"use client";

import { Post } from "@/service/posts";
import React, { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";
export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  // 하드코딩된 'All Posts'보다 상수 변수 ALL_POSTS 로 만들어서 사용

  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="m-4 flex">
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}

/*  
! 카테고리 탭을 만들때
* 1. searchParams 활용
    - url에 정보가 포함되서 브라우저 히스토리 관리가 가능 (뒤로가기도 가능)
    - url 파싱을 위해 추가 코드 작성이 필요
* 2. 조건부 렌더링 사용
    - 간단한 구현, 복잡성 감소
*/
