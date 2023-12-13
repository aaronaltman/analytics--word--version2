import { useState } from "react";
import Warning from "./Warning";
export default function TextArea() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (newText.includes("<script>")) {
      alert("No script tag allowed");
      setText("");
    }
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter your text here"
        spellCheck="false"
      />
      <Warning />
    </div>
  );
}
