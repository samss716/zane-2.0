import CaseStudyHero from "../../components/CaseStudyHero";
import CaseStudySectionNav from "../../components/CaseStudySectionNav";
import CaseStudyOverview from "../../components/CaseStudyOverview";

export default function InteriorDesignCaseStudy() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <CaseStudyHero
        eyebrow="Case Study"
        title="Interior Design Portfolio"
        subtitle="A curated collection of eco-conscious Korean-inspired interior design projects - Focus on sustainability, organic material, natural harmony and functionality. ."
        image="/media/web/figma-1.png"
      />

      <CaseStudySectionNav
        items={[
          { label: "Context", href: "#context" },
          { label: "Research", href: "#research" },
          { label: "target audience", href: "#targetaudience" },
          { label: "Pain points", href: "#painpoints" },
          { label: "SEO and Analytics", href: "#seoandanalytics" },
          { label: "Design", href: "#design" },
          { label: "Prototyping", href: "#prototyping" },
        ]}
      />

      <CaseStudyOverview
        overview="Korean-inspired interior design studio concept focused on ergonomic living, spatial harmony, and minimalist aesthetics rooted in cultural tradition.
This project explores the design of a modern, conversion-focused website that balances visual storytelling with functional business needs—integrating SEO optimization, analytics-driven marketing, and a streamlined client booking experience.
"
        role=" UI Designer / Frontend Developer"
        responsibilities={[
          "Defined the brand direction and page structure",
          "Designed interface, booking flows, and page layouts",
          "Integrated SEO best practices and analytics tools to optimize for search visibility and user engagement",
        ]}
        impact={[
          "Created a clearer case-study presentation format for portfolio work",
          "Focused on the intersection of design and business goals, exploring how a well-designed website can drive client engagement and support the growth of a business reliant on client bookings",
        ]}
      />

      <section
        id="context"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Context
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Project context
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Project background
        </p>
      </section>

      <section
        id="research"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Research
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Research and insights
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          User research, findings, and design reasoning:
          Hanok architecture, natural materials, spatial flow, and minimalist aesthetics. Emphasis on balance, harmony, and connection to nature. Focus on creating serene, functional spaces that promote well-being and reflect cultural heritage.
        </p>
      </section>

      <section
        id="targetaudience"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Target Audience
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Understanding our users
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Insights about the ideal client for this interior design studio, including their preferences, behaviors, and pain points.
        </p>
      </section>

      <section
        id="painpoints"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Pain Points
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Understanding our users
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          recognizing drop off points in the client journey and areas of opportunity for design to drive engagement and bookings.
        </p>
      </section>

      <section
        id="seoandanalytics"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          SEO and Analytics
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Understanding our users
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Measuring client engagement and optimizing for search visibility through SEO best practices and analytics tools.
        </p>
      </section>

      <section
        id="design"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Design
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Design Process
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Design decisions, features, iterations, and final solutions.
        </p>
      </section>


      <section
        id="prototyping"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Prototyping
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Prototyping and iteration
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Wireframes, prototypes, interaction ideas, and iteration notes here later.
        </p>
      </section>
    </main>
  );
}