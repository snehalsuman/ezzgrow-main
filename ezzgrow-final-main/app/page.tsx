"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import ProductBranding from "./product-branding";
import DigitalMarketing from "./e-marketing";
import EcomWebsite from "./website";
import Services from "./services";
import FAQS from "./faq";
import { useState, useRef } from "react";
import { HeroScrollDemo } from "./snippets/container-scroll-animation-snippet";
import { HeroParallaxDemo } from "./snippets/hero-parallax-snippet";
import { TypewriterEffectSmoothDemo } from "./snippets/typewriter-effect-snippet";
import ContactForm from "./typeform";
import WidgetCalendly from "./widget";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const servicesRef = useRef<HTMLDivElement>(null);

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
  scrollToServices={scrollToServices}
 
/>

      <Spotlight className="hidden md:flex md:-top-60 left-80" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          Create, grow, and <br /> scale your business
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          Get ready to shape the digital landscape and make an impact!
        </p>
        <a
          href={"https://ezzgrow-payments-lab.vercel.app"} target="_blank"
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white"
        >
          See our Pricing
        </a>
        <HeroScrollDemo />
        <ProductBranding />
        <DigitalMarketing /> 
        <EcomWebsite /> 
        <HeroParallaxDemo />
        <Services /> 
        <TypewriterEffectSmoothDemo />
        <ContactForm />
        <FAQS />
        <WidgetCalendly />
      </div>
    </div>
  );
}
