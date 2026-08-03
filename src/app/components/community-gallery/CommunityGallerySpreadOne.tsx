import { communityGalleryImages } from "@/app/data/communityGalleryData";
import { GalleryHero } from "./GalleryHero";
import { GalleryImage } from "./GalleryImage";

export function CommunityGalleryPage90() {
  return <GalleryHero image={communityGalleryImages[28]} />;
}

export function CommunityGalleryPage91() {
  const images = communityGalleryImages.slice(4, 10);
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#f4efe6] p-8 text-[#102d2b]">
      <div className="grid h-full grid-cols-12 grid-rows-12 gap-2">
        <GalleryImage image={images[0]} className="col-span-7 row-span-7" priority />
        <div className="col-span-5 row-span-4 flex flex-col justify-center px-2">
          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#9a7930]">Together, visible</p>
          <h2 className="mt-2 font-serif-primary text-[27px] leading-[0.98]">Every image carries a story.</h2>
          <p className="mt-3 text-[9px] leading-[1.45] text-[#33423f]">
            From awareness campaigns and conferences to family moments and community celebrations,
            these photographs reflect the strength found in connection.
          </p>
        </div>
        <GalleryImage image={images[1]} className="col-span-5 row-span-3" />
        <GalleryImage image={images[2]} className="col-span-4 row-span-5" />
        <GalleryImage image={images[3]} className="col-span-4 row-span-5" />
        <GalleryImage image={images[4]} className="col-span-4 row-span-5" />
      </div>
      <span className="absolute bottom-3 right-5 text-[8px] tracking-[0.18em] text-[#102d2b]/60">91</span>
    </section>
  );
}
