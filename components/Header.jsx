import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="../images/troll-face.png"
        alt="logo"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <a
        href="https://github.com/zhangwy324/Meme-generator"
        className="header--project"
      >
        GitHub
      </a>
    </header>
  );
}
