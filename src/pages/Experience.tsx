import Skills from "../components/Experience /Skills";
import WorkExperienceCard from "../components/Experience /WorkExperienceCard";
export default function Experience() {
  return (
    <div className="bg-gradient-to-b from-neutral-850 to-rose-200 py-5">
      <div className="min-h-screen m-5">
        <p className="font-stretch-150% text-4xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-rose-50 via-purple-100 to-blue-100 bg-clip-text text-transparent py-3 text-left">
          Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <WorkExperienceCard />
          <Skills />
        </div>
      </div>
    </div>
  );
}
