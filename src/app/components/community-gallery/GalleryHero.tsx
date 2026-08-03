import type { CommunityGalleryImage } from "@/app/data/communityGalleryData";
import { GalleryImage } from "./GalleryImage";

interface GalleryHeroProps {
  image: CommunityGalleryImage;
  eyebrow?: string;
  title?: string;
  body?: string;
}

export function GalleryHero({
  image,
  eyebrow = "RARE Revolution",
  title = "Community Gallery",
  body = "A celebration of the people, families, advocates and organisations moving the rare-disease community forward.",
}: GalleryHeroProps) {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#102d2b] text-white">
      <GalleryImage image={image} className="absolute inset-0 h-full w-full" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-9">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#f1c75b]">
          {eyebrow}
        </p>
        <h1
          className="font-serif-primary text-[42px] leading-[0.92] text-white"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-[330px] text-[11px] leading-[1.45] text-white/90">{body}</p>
      </div>
    </section>
  );
}
