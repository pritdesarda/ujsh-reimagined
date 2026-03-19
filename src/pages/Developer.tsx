import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";

export default function Developer() {
  return (
    <>
      <PageHero title="Developer Credits" subtitle="The team behind this website" />
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="p-8">
              <Code2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-display font-semibold text-xl mb-2">Built with ❤️</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website was designed and developed for United Jain Students Home, Sion, Mumbai. Built using modern web technologies including React, TypeScript, and Tailwind CSS.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
