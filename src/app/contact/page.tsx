import ContactForm from "@/components/ContactForm";
import { FaBlog, FaGithub, FaYoutube } from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const LINKS = [
  { icon: <FaGithub />, url: "" },
  { icon: <FaBlog />, url: "" },
  { icon: <FaYoutube />, url: "" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="my-2 text-3xl font-bold">Contact Me</h2>
      <p>mail@gmail.com</p>
      <ul className="my-2 flex gap-4">
        {LINKS.map((link, i) => (
          <a
            key={i}
            href="link.url"
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="my-8 text-3xl font-bold">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
