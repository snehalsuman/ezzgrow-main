"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/sexygif1.gif",
    quote:
      "The team at EzzGrow is amazing. They helped me create a stunning store that I am proud of.",
    name: "Rida Rahman",
  },
  {
    image: "/images/sexygif2.gif",
    quote:
      "This sleek UI design is an absolute game-changer as it made navigation effortless and visually stunning!",
    name: "Taylor Ryan",
  },
  {
    image: "/images/sexygif3.gif",
    quote:
      "EzzGrow's UI design for my website is a masterpiece of user-centric innovation.  ",
    name: "Mohit Sharma",
  },
];

const EcomWebsite = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Websites <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We create stunning websites which are designed for maximum conversions.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcomWebsite;
