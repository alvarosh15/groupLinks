import React from "react";
import Link from "../components/Link";
import Image from "next/image";
import RouterLink from "next/link";
import AddButton from "../components/AddButton";

export default function Page({ params }) {
  const links = [
    {
      website: "Twitter",
      text: "twitter",
      url: "https://twitter.com/jose",
    },
    {
      website: "Github",
      text: "github",
      url: "https://github.com/jose",
    },
    {
      website: "Other",
      text: "my personal webpage",
      url: "https://jose.dev",
    },
  ];

  const { id } = params;

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <RouterLink href="/">Atras</RouterLink>
      <Image
        className="rounded-full"
        src="https://i.pravatar.cc/300"
        width="100"
        height="100"
        alt="Links"
      />
      <h1>{id}</h1>
      <h1>Gabrielle Lacey</h1>
      <h2>Basketball today, tomorrow and forever</h2>
      {links.map((link, index) => (
        <Link key={index} {...link} />
      ))}
    </div>
  );
}
