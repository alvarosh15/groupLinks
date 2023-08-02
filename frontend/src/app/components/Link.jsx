import React from "react";

export default function Link({ website, text, url }) {
  return (
    <div className="my-2">
      <a href={url}>
        <figure className="w-96 h-12 flex flex-col items-center justify-center bg-slate-100 rounded-xl">
          <p>{text}</p>
        </figure>
      </a>
    </div>
  );
}
