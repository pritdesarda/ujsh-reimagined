import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const placeholder = [
  { name: "Patron 1", details: "Generous supporter" },
  { name: "Patron 2", details: "Long-time benefactor" },
];

export default function Patrons() {
  return (
    <>
      <PageHero title="Patrons" subtitle="Our esteemed patrons and supporters" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholder.map((m, i) => (
            <MemberCard key={i} name={m.name} details={m.details} />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Data will be loaded from database once connected.</p>
      </SectionWrapper>
    </>
  );
}
