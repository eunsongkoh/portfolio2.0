import { Accordion, AccordionItem, Avatar } from "@heroui/react";
import { Positions } from "./Work";

export default function WorkExperienceCard() {
  let counter = 1;
  return (
    <Accordion variant="bordered">
      {Positions.map((workExperience) => (
        <AccordionItem
          className="border-b-2 border-gradient-to-r from-red-50 to-indigo-200"
          key={counter++}
          aria-label={workExperience.company}
          startContent={
            <Avatar color="primary" radius="sm" src={workExperience.photo} />
          }
          subtitle={workExperience.company}
          title={<strong>{workExperience.title}</strong>}
        >
          <p className="font-bold text-left whitespace-pre-line">
            {workExperience.date}
          </p>
          <p className="text-left whitespace-pre-line">
            {workExperience.description}
          </p>
          <br />
          <p className="text-left italic">{workExperience.techstack}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
