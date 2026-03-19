import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const placeholderTrustees = [
  { name: "Trustee Member 1", position: "Trustee" },
  { name: "Trustee Member 2", position: "Trustee" },
  { name: "Trustee Member 3", position: "Trustee" },
];

export default function Trustees() {
  return (
    <>
      <PageHero title="Trustees" subtitle="Dedicated leaders guiding UJSH" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderTrustees.map((t, i) => (
            <MemberCard key={i} name={t.name} role={t.position} />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">Data will be loaded from database once connected.</p>
      </SectionWrapper>
    </>
  );
}
