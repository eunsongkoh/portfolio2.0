import Bio from "../components/Introduction/Bio";
import { Image } from "@heroui/react";

export default function Introduction() {
  return (
    <div className="min-h-screen m-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 gap-4">
        <Bio />

        <Image
          isBlurred
          alt="Notion Profile Picture"
          className="sm:w-full lg:w-[400px] lg:m-5"
          src="/my-notion-face-portrait.png"
          width={400}
        />
      </div>
    </div>
  );
}
