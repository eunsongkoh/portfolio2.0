import { Card, CardBody, Image, CardHeader } from "@heroui/react";
import { Project } from "../../models/Projects";

export default function ProjectCard(project: Project) {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-100 to-red-300 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <Card
        isBlurred
        className="relative bg-white/95 ring-1 ring-gray-900/5 rounded-lg shadow-md p-4 h-80"
      >
        <CardHeader>
          <h5 className="font-bold text-md md:text-lg lg:text-xl text-left text-slate-800">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h5>
        </CardHeader>
        <CardBody>
          <p className="text-sm md:text-sm lg:text-md pb-5 text-slate-800">
            {project.description}
          </p>
          <p className="italic text-sm md:text-sm lg:text-md pb-5 text-slate-800">
            {project.techstack}
          </p>
          <div className="flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={project.photo}
              width={100}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
