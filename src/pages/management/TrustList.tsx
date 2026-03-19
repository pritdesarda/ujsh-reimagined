import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import MemberCard from "@/components/shared/MemberCard";

const trusteeSeats = [
  { seat_name: "President", occupant_name: "To be loaded from database" },
  { seat_name: "Vice President", occupant_name: "To be loaded from database" },
  { seat_name: "Secretary", occupant_name: "To be loaded from database" },
  { seat_name: "Treasurer", occupant_name: "To be loaded from database" },
];

export default function TrustList() {
  return (
    <>
      <PageHero title="Trust List" subtitle="The governing body of United Jain Students Home" />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trusteeSeats.map((seat, i) => (
            <MemberCard key={i} name={seat.occupant_name} role={seat.seat_name} />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Data will be loaded from the database once Supabase is connected.
        </p>
      </SectionWrapper>
    </>
  );
}
