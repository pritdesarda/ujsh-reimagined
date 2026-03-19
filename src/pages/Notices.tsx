import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const placeholderNotices = [
  { id: 1, event: "Annual Day Celebration", content: "The annual day celebration will be held on 15th March 2025. All students are requested to participate.", created_at: "2025-03-01" },
  { id: 2, event: "Mess Menu Update", content: "New mess menu effective from next week. Check notice board for details.", created_at: "2025-02-20" },
  { id: 3, event: "Library Timing Change", content: "Library will now be open 24/7 during examination period.", created_at: "2025-02-15" },
];

export default function Notices() {
  return (
    <>
      <PageHero title="Notices" subtitle="Stay updated with the latest announcements" />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-4">
          {placeholderNotices.map((notice) => (
            <Card key={notice.id}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{notice.event}</h3>
                    <p className="text-sm text-muted-foreground">{notice.content}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(notice.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <p className="text-center text-sm text-muted-foreground mt-8">Notices will be loaded from database once connected.</p>
        </div>
      </SectionWrapper>
    </>
  );
}
