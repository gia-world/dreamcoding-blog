// 클라이언트 컴포넌트 모듈 내에서 쓰이는 컴포넌트는 모든게 다 자동으로 클라이언트 컴포넌트로 번들링/간주 되므로, 자식 컴포넌트에서는 별도로 'use client'라고 명시해 주지 않아도 됨

import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="p-4 text-center">
      <h2 className="mb-2 border-b border-sky-500 text-lg font-bold">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
