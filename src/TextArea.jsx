export default function TextArea() {
  return (
    <textarea
      onChange={(e) => {
        let text = e.target.value;
        let textArray = text.split(" ");
        console.log(text);
      }}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
    />
  );
}
