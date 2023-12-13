import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No scripts allowed!");
      newText = newText.replace("<script>", "");
      setShowWarning(true);
    } else if (newText.includes("@")) {
      setWarningText("No emails allowed!");
      newText = newText.replace("@", "");
      setShowWarning(true);
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="Enter your text here"
        spellCheck="false"
      />
      {showWarning ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
