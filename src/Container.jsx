import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const numberOfWords = text.split(/\s+/).filter((word) => word !== "").length;
  const instagram = 280 - numberOfCharacters;
  const facebook = 2200 - numberOfCharacters;
  const stats = {
    numberOfCharacters: numberOfCharacters,
    numberOfWords: numberOfWords,
    instagram: instagram,
    facebook: facebook,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
