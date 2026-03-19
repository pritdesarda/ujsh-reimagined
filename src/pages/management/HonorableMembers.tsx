import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const placeholder = [
  { name: "Honorable Member 1" },
  { name: "Honorable Member 2" },
];

export default function HonorableMembers() {
  return (
    <>
      <PageHero title="Honorable Members" subtitle="Distinguished members of our community" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholder.map((m, i) => (
            <MemberCard key={i} name={m.name} role="Honorable Member" />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Data will be loaded from database once connected.</p>
      </SectionWrapper>
    </>
  );
}
