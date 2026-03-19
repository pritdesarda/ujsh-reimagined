import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const placeholder = [
  { name: "Student 1", role: "President", batch: "2024" },
  { name: "Student 2", role: "Secretary", batch: "2024" },
  { name: "Student 3", role: "Cultural Head", batch: "2024" },
];

export default function StudentCommittee() {
  return (
    <>
      <PageHero title="Student Committee" subtitle="Student leaders driving hostel activities" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholder.map((m, i) => (
            <MemberCard key={i} name={m.name} role={m.role} details={`Batch: ${m.batch}`} />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Data will be loaded from database once connected.</p>
      </SectionWrapper>
    </>
  );
}
