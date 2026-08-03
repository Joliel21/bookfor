import { communityGalleryImages } from "@/app/data/communityGalleryData";
import { GalleryMosaic } from "./GalleryMosaic";

export function CommunityGalleryPage92() {
  return <GalleryMosaic images={communityGalleryImages.slice(10, 18)} variant="left" />;
}

export function CommunityGalleryPage93() {
  return (
    <div className="relative h-full w-full">
      <GalleryMosaic images={communityGalleryImages.slice(18, 26)} variant="right" />
      <div className="pointer-events-none absolute bottom-5 right-5 bg-[#102d2b]/90 px-3 py-2 text-right text-white">
        <p className="text-[7px] uppercase tracking-[0.22em] text-[#f1c75b]">Our community</p>
        <p className="mt-0.5 font-serif-primary text-[15px]">Seen. Heard. Together.</p>
      </div>
    </div>
  );
}
