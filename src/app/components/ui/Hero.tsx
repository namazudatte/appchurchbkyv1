"use client";

import Image from "next/image";
import TypingAnimation from "@/components/ui/typing-animation";
import BlurFade from "@/components/ui/blur-fade";
import SparklesText from "@/components/ui/sparkles-text";
import Link from "next/link";
import WaButton from "@/components/wa-button";
import { useState } from "react";
import CircleLoading from "@/app/components/Loading/CircleLoading";

export default function Hero() {
  const [LoadingImage, setLoadingImage] = useState(true);
  return (
    <section className="hero min-h-screen overflow-hidden">
      {LoadingImage && <CircleLoading />}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <BlurFade delay={0.25} inView>
            <Image src="/hero4.webp" alt="Gerja Paroki St. Pius X Bengkayang" width={900} height={900} priority loader={({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`} onLoadingComplete={() => setLoadingImage(false)} />
          </BlurFade>
        </div>
        <div>
          <BlurFade delay={0.25} inView>
            <h1 className="text-6xl font-bold">
              <TypingAnimation className="text-5xl">Paroki St. Pius X </TypingAnimation> <SparklesText text="Bengkayang" />
            </h1>
            <p className="py-6 font-semibold text-sm">Selamat datang Umat Katolik, ini merupakan website resmi Paroki St. Pius X Bengkayang</p>
            <Link href="/berita" className="btn btn-primary z-auto">
              Baca Berita Paroki
            </Link>
          </BlurFade>
        </div>
        <WaButton />

        {/* <div className="circle-position w-[590px] h-[400px] bg-violet-500 rounded-[100%] absolute z-0 top-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%] blur-[250px]"></div> */}
      </div>
    </section>
  );
}
