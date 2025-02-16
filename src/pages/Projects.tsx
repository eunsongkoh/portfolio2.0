import ProjectCard from "../components/Projects/ProjectCard";
// import { Project } from "../models/Projects";
import { projects } from "../components/Projects/Projects";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
  let counter = 1;
  return (
    <div className="">
      <p className="font-stretch-150% text-4xl md:text-9xl font-bold bg-gradient-to-r from-rose-50 via-purple-100 to-blue-100 bg-clip-text text-transparent py-3 text-left m-5">
        Projects
      </p>
      <div
        className="min-h-screen m-5
    grid
    grid-cols-1
    gap-4
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-4"
      >
        {projects.map((item) => (
          <Fade cascade>
            <ProjectCard key={counter++} {...item} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
