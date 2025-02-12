"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="w-[90%]  m-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">
        FREQUENTLY ASKED QUESTIONS (FAQS)
      </h1>
      <Accordion type="single" defaultValue="item-1" className="space-y-6">
        <AccordionItem value="item-1" className="border-t border-b">
          <AccordionTrigger className="text-xl font-medium py-6">
            Lorem ipsum dolor sit amet consectetur?
          </AccordionTrigger>
          <AccordionContent className="text-lg leading-relaxed pb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-t border-b">
          <AccordionTrigger className="text-xl font-medium py-6">
            Lorem ipsum dolor sit amet consectetur?
          </AccordionTrigger>
          <AccordionContent className="text-lg leading-relaxed pb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-t border-b">
          <AccordionTrigger className="text-xl font-medium py-6">
            Lorem ipsum dolor sit amet consectetur
          </AccordionTrigger>
          <AccordionContent className="text-lg leading-relaxed pb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-t border-b">
          <AccordionTrigger className="text-xl font-medium py-6">
            Lorem ipsum dolor sit amet consectetur?
          </AccordionTrigger>
          <AccordionContent className="text-lg leading-relaxed pb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-t border-b">
          <AccordionTrigger className="text-xl font-medium py-6">
            Lorem ipsum dolor sit amet consectetur?
          </AccordionTrigger>
          <AccordionContent className="text-lg leading-relaxed pb-6">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
