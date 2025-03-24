import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-6xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-3xl md:text-7xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is EzzGrow ?</AccordionTrigger>
            <AccordionContent>
              EzzGrow is a full-fledged marketing agency that specializes in
              branding, web designing, and digital marketing. We also provide free
              Startup-Consultancy to our clients. We are one of the first agencies
              to integrate AI tools to boost productivity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
              You can start by contacting us via our contact form or through our
              email. We will get back to you within 2 working days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is your Pricing ?</AccordionTrigger>
            <AccordionContent>
              We offer three tiers of recurring subscriptions, but we also provide custom-tailored solutions customized to your business needs. Contact us via the form or email us at contact.ezzgrow@gmail.com to receive a quote.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              I feel the Pricing is too expensive.
            </AccordionTrigger>
            <AccordionContent>
              The market is experiencing rapid growth, and with the continuous
              advancements in technology, it is essential for our team to
              consistently upskill themselves. For that reason we need to
              allocate resources accordingly to meet these demands. Despite
              these necessary investments, our pricing is quite reasonable when
              benchmarked against industry standards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>When can I contact EzzGrow ?</AccordionTrigger>
            <AccordionContent>
             Feel free to reach out to EzzGrow anytime via our email contact.ezzgrow@gmail.com. Additionally, you can schedule a complimentary meeting based on availability of slots.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is subsciption mandatory ?</AccordionTrigger>
            <AccordionContent>
              Not at all. You can get your required service by contacting us via
              our contact form or mail. We will send you the quotation
              accordingly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
