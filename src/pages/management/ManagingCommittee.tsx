import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const placeholder = [
  { name: "Committee Member 1", role: "Chairperson" },
  { name: "Committee Member 2", role: "Secretary" },
  { name: "Committee Member 3", role: "Member" },
];

export default function ManagingCommittee() {
  return (
    <>
      <PageHero title="Managing Committee" subtitle="The operational leadership of UJSH" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholder.map((m, i) => (
            <MemberCard key={i} name={m.name} role={m.role} />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Data will be loaded from database once connected.</p>
      </SectionWrapper>
    </>
  );
}
