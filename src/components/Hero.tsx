import React from "react";
import profileImage from "../../public/images/profile.png";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the auther"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Gia"}</h2>
      <h3 className="text-xl font-semibold">Front-end Engineer</h3>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact me
        </button>
      </Link>
    </section>
  );
}
