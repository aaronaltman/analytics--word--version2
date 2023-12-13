import { useState } from "react";
export default function TextArea() {
  const [text, setText] = useState("");

  return (
    <textarea
      onChange={(e) => {
        const newText = e.target.value;
        setText(newText);
        if (newText.includes("<script>")) {
          alert("No script tag allowed");
          setText("");
        }
      }}
      value={text}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
    />
  );
}
