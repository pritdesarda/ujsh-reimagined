import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function About() {
  return (
    <>
      <PageHero title="About UJSH" subtitle="Our history, mission, and commitment to Jain students" />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h2 className="font-display">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            United Jain Students Home (UJSH) is a premier accommodation facility exclusively for Jain students, located in the heart of Sion, Mumbai. We offer a serene and supportive environment that fosters academic excellence and personal growth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a community-focused hostel, we take pride in providing a safe, comfortable, and enriching stay tailored to the unique needs of Jain students. Designed with modern amenities and a community-centric ethos, UJSH Hostel ensures an optimal living experience.
          </p>

          <h2 className="font-display">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our state-of-the-art facilities cater to all aspects of student life, making it the perfect second home for those pursuing their academic dreams. At UJSH Hostel, we are committed to creating a nurturing space where students can thrive while staying connected to their cultural and spiritual roots.
          </p>

          <h2 className="font-display">What We Offer</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>Comfortable sharing rooms with modern amenities</li>
            <li>Exclusive Jain cuisine mess with tiffin services</li>
            <li>24/7 air-conditioned library</li>
            <li>Fully-equipped gymnasium</li>
            <li>Indoor sports and recreation facilities</li>
            <li>Canteen with snacks and beverages</li>
            <li>Regular housekeeping services</li>
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
