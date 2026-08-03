import type { CommunityGalleryImage } from "@/app/data/communityGalleryData";
import { GalleryImage } from "./GalleryImage";

interface GalleryMosaicProps {
  images: CommunityGalleryImage[];
  variant?: "left" | "right";
}

export function GalleryMosaic({ images, variant = "left" }: GalleryMosaicProps) {
  const [a, b, c, d, e, f, g, h] = images;
  return (
    <section className="grid h-full w-full grid-cols-12 grid-rows-12 gap-1.5 bg-[#f5f1e9] p-4">
      <GalleryImage image={a} className={`${variant === "left" ? "col-span-7" : "col-span-5"} row-span-5`} priority />
      <GalleryImage image={b} className={`${variant === "left" ? "col-span-5" : "col-span-7"} row-span-5`} />
      <GalleryImage image={c} className="col-span-4 row-span-3" />
      <GalleryImage image={d} className="col-span-4 row-span-3" />
      <GalleryImage image={e} className="col-span-4 row-span-3" />
      <GalleryImage image={f} className="col-span-5 row-span-4" />
      <GalleryImage image={g} className="col-span-3 row-span-4" />
      <GalleryImage image={h} className="col-span-4 row-span-4" />
    </section>
  );
}
