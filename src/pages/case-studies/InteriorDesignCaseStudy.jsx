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
          { label: "Prototyping", href: "#prototyping" },
        ]}
      />

      <CaseStudyOverview
        overview="This project explores the design of a interior design portfolio focused on documenting the problem space, design goals, research insights, and the evolution of the company."
        role=" UI Designer / Frontend Developer"
        responsibilities={[
          "Defined the product direction and feature structure",
          "Designed interface flows and page layouts",
          "Built interactive frontend screens and reusable components",
        ]}
        impact={[
          "Created a clearer case-study presentation format for portfolio work",
          "Established a reusable layout system for future project pages",
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
          Add your project background here later.
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
          Add your user research, findings, or design reasoning here later.
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
          Add your wireframes, prototypes, interaction ideas, and iteration notes here later.
        </p>
      </section>
    </main>
  );
}