import { Icons } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface VisionItemProps {
  icon: keyof typeof Icons;
  title: string;
  content: string;
}

export function VisionItem({ icon, title, content }: VisionItemProps) {
  const Icon = Icons[icon ?? "Profit"];
  return (
    <Accordion className="mb-5" type="single" collapsible>
      <AccordionItem className="border-gray-100" value={title}>
        <AccordionTrigger className="flex gap-3">
          <div>
            <Icon />
          </div>
          <p className="font-satoshi text-lg md:text-xl text-left text-white-100 font-bold w-11/12">
            {title}
          </p>
        </AccordionTrigger>
        <AccordionContent className="md:text-lg text-base font-satoshi text-white-100 font-normal">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
