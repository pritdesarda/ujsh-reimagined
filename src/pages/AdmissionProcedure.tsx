import { Link } from "react-router-dom";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";

const steps = [
  "Download the application form from the hostel office or website.",
  "Fill in all required details accurately.",
  "Attach necessary documents (ID proof, college admission letter, etc.).",
  "Submit the completed form to the hostel office.",
  "Await confirmation from the management committee.",
];

export default function AdmissionProcedure() {
  return (
    <>
      <PageHero title="Admission Procedure" subtitle="How to apply for a place at UJSH" />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-display font-semibold text-xl">Application Process</h2>
              </div>
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
