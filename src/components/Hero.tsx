import React from "react";
import profileImage from "../../public/images/profile.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the auther"
        width={250}
        height={250}
        priority
      />
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I'm Gia"}</h2>
      <h3 className="text-xl font-semibold">Front-end Engineer</h3>
      <Link href="/contact">
        <button className="mt-2 rounded-xl bg-yellow-500 px-4 py-1 font-bold">
          Contact me
        </button>
      </Link>
    </section>
  );
}
