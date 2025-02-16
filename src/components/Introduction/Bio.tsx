export default function Bio() {
  return (
    <div className="mx-5 text-left">
      <p className="text-4xl">hey there! i'm</p>
      <p className="font-stretch-150% text-7xl md:text-9xl font-bold bg-gradient-to-r from-rose-50 via-purple-100 to-blue-100 bg-clip-text text-transparent py-3">
        song
      </p>
      <ul className="list-disc text-xl py-5">
        <li>
          I'm a third year <b>CS</b> student @{" "}
          <a className="font-bold underline decoration-pink-500">
            Simon Fraser University
          </a>
        </li>
        <li>
          I'm <b>passionate</b> about all things <b>TECHNOLOGY</b>
        </li>
        <li>
          I'm currently the{" "}
          <a className="underline decoration-sky-500 font-bold">
            Director of Communications & Multimedia
          </a>{" "}
          @ <b>SFU Developers & Systems Club</b>
        </li>
        <li>
          In my free time, I love video editing! Currently I volunteer as a
          <b> Video Editor</b> for the{" "}
          <a className="underline decoration-indigo-500 font-bold">
            SFU CS Student Society
          </a>
        </li>
      </ul>
    </div>
  );
}
