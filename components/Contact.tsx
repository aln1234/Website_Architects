import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-extralight text-[#BDBDBD]">Contact Us</h1>
      <section className="flex mt-4 gap-4">
        <div className="basis-1/3 mt-4 flex flex-col gap-6">
          <Input
            type="email"
            placeholder="Email"
            className="max-w-sm h-14 bg-slate-200"
          />
          <Input
            type="number"
            placeholder="Phone Number"
            className="max-w-sm h-14 bg-slate-200"
          />
          <Input
            type="name"
            placeholder="Interested In"
            className="max-w-sm h-14 bg-slate-200"
          />
          <Textarea
            placeholder="Type your message here."
            className="max-w-sm h-32 bg-slate-200"
          />
          <p className="px-6 py-6 max-w-48 font-mono uppercase tracking-widest text-white bg-slate-900">
            Send Email
          </p>
        </div>

        <div
          className="bg-no-repeat bg-cover relative basis-3/5 h-[500px]"
          style={{ backgroundImage: "url(assets/images/contact_1.png)" }}
        ></div>
      </section>
    </div>
  );
};

export default Contact;
