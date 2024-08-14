import React from "react";

const Statement = () => {
  return (
    <div className="my-20 flex flex-col gap-6">
      <section>
        <h1 className="text-6xl font-extralight text-[#BDBDBD]">
          Main Focus / Mission Statement
        </h1>
      </section>
      <section className="flex  justify-between">
        <div className="flex flex-row items-center max-w-md gap-12">
          <p className="text-[12rem] text-[#BDBDBD] font-semibold font-mono">
            1
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className="flex flex-row max-w-md gap-12 items-center">
          <p className="text-[12rem] text-[#BDBDBD] font-semibold font-mono">
            2
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Statement;
