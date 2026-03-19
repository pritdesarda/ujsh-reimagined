import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ImageIcon } from "lucide-react";

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" subtitle="Glimpses of life at UJSH" />
      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Gallery images will load from Supabase Storage once connected.
        </p>
      </SectionWrapper>
    </>
  );
}
