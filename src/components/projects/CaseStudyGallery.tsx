"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";

export default function CaseStudyGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {images.map((src, i) => (
          <Reveal key={src} delay={(i % 2) * 0.1} className={i % 3 === 0 ? "sm:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open photo ${i + 1} of ${title}`}
              className="group block w-full cursor-zoom-in"
            >
              <ParallaxImage
                src={src}
                alt={`${title} — photo ${i + 1}`}
                className={`w-full ${i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                sizes={i % 3 === 0 ? "(min-width: 1024px) 72rem, 100vw" : "(min-width: 640px) 50vw, 100vw"}
              />
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox images={images} index={index} alt={title} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </>
  );
}
