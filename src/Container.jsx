import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const numberOfWords = text.split(/\s+/).filter((word) => word !== "").length;
  const instagram = 280;
  const facebook = 2200;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats
        numberOfCharacters={numberOfCharacters}
        numberOfWords={numberOfWords}
        instagram={instagram}
        facebook={facebook}
      />
    </main>
  );
}
