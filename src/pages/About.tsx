import { Fade } from "react-awesome-reveal";
import Type from "../components/Home/Type";

export default function About() {
  return (
    <div className="min-h-screen py-5 flex items-center justify-center relative">
      <Fade>
        <div className="relative z-10">
          <p>Hello World, I'm</p>
          <p className="font-stretch-150% text-7xl md:text-9xl font-bold bg-gradient-to-r from-rose-50 via-purple-100 to-blue-100 bg-clip-text text-transparent py-3">
            song
          </p>
          <Type />
        </div>

        {/* Background gradient effect */}
        <div className="absolute -inset-1 bg-gradient-to-t from-neutral-800 to-rose-200 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      </Fade>
    </div>
  );
}
