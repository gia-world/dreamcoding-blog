import Hero from "@/components/Hero";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const TITLE_CLASS = "my-2 text-2xl font-bold text-gray-800";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="m-8 bg-gray-100 p-8 text-center shadow-lg">
        <h2 className={TITLE_CLASS}>Who am I?</h2>
        <p>설명</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          액트베이스 (~2023) <br />
          듀오 (2021~2022)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>React, Next</p>
      </section>
    </>
  );
}
