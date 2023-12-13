import TextArea from "./TextArea";
import Stats from "./Stats";
import { useState } from "react";
import { FACEBOOK_MAX, IG_MAX } from "./Constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s+/).filter((word) => word !== "").length,
    instagram: IG_MAX - text.length,
    facebook: FACEBOOK_MAX - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
