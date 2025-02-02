"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "@/components/ui/particles";
import { TextAnimate } from "@/components/ui/text-animate";
import Timeline from "./Timeline";

const Jumbroton = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <section className="">
      <div>
        <span className="pointer-events-none z-10 whitespace-pre-wrap  text-4xl font-semibold leading-none text-center shadow-md ">
          {" "}
          <TextAnimate animation="blurIn" as="h1" duration={10.0}>
            Jadwal Misa Paroki
          </TextAnimate>
          <Timeline />
        </span>
      </div>
      <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={color} refresh />
    </section>
  );
};

export default Jumbroton;
