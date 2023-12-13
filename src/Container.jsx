import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s+/).filter((word) => word !== "").length,
    instagram: 280 - text.length,
    facebook: 2200 - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
