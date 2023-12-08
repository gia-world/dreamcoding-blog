/* post에 관련된 비지니스 로직을 담당하는 모듈 */

import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};
// & : Intersection Types(교차 타입)

export const getAllPosts = cache(async () => {
  // cache() : 인자를 캐시해서 호출
  // 한 페이지 렌더링 사이클에 한해 이미 한번 읽어온 인자가 중복 호출이 되면 캐시한 내용을 반환
  console.log("getAllPosts");
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return (
    readFile(filePath, "utf-8")
      // .then((data) => JSON.parse(data))
      // 전달받는 것과 호출할 때 들어간 인자가 동일한 경우 생략 가능
      .then<Post[]>(JSON.parse)
      //JSON.parse되는 데이터의 타입을 정의
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
});

// export async function getAllPosts(): Promise<Post[]> {
// }

export async function getFeaturedPosts(): Promise<Post[]> {
  // return getAllPosts() //
  //   .then((posts) => posts.filter((post) => post.featured));
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  // return getAllPosts() //
  //   .then((posts) => posts.filter((post) => !post.featured));
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
