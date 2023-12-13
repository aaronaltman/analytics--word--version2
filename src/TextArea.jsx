import { useState } from "react";
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
    <textarea
      onChange={handleChange}
      value={text}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
    />
  );
}
