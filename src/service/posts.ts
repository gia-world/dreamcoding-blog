/* post에 관련된 비지니스 로직을 담당하는 모듈 */

import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return (
    readFile(filePath, "utf-8")
      // .then((data) => JSON.parse(data))
      // 전달받는 것과 호출할 때 들어간 인자가 동일한 경우 생략 가능
      .then<Post[]>(JSON.parse)
      //JSON.parse되는 데이터의 타입을 정의
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}
