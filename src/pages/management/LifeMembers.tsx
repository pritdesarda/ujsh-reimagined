import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const placeholder = [
  { name: "Life Member 1" },
  { name: "Life Member 2" },
  { name: "Life Member 3" },
];

export default function LifeMembers() {
  return (
    <>
      <PageHero title="Life Members" subtitle="Lifelong supporters of UJSH" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholder.map((m, i) => (
            <MemberCard key={i} name={m.name} role="Life Member" />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Data will be loaded from database once connected.</p>
      </SectionWrapper>
    </>
  );
}
