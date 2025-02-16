import { TypeAnimation } from "react-type-animation";
export default function Type() {
  return (
    <TypeAnimation
      sequence={[
        "I am a Student...",
        3000,
        "I am a Developer...",
        3000,
        "I am a Designer...",
        3000,
        "I am a Creative...",
        3000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={1}
      style={{ fontSize: "1.5em", display: "inline-block" }}
      repeat={Infinity}
      cursor={true}
    />
  );
}
