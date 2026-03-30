import CaseStudyHero from "../../components/CaseStudyHero";
import CaseStudySectionNav from "../../components/CaseStudySectionNav";
import CaseStudyOverview from "../../components/CaseStudyOverview";

export default function ThePressCaseStudy() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <CaseStudyHero
        eyebrow="Case Study"
        title="The Press"
        subtitle="A mock ecommerce website for a panini deli & coffee roaster, designed to showcase their brand identity and product offerings through a intuitive and modern interface."
        image="/media/web/figma-2.png"
      />

      <CaseStudySectionNav
        items={[
          { label: "Context", href: "#context" },
          { label: "Research", href: "#research" },
          { label: "Prototyping", href: "#prototyping" },
        ]}
      />

      <CaseStudyOverview
        overview="This project explores the design of a ecommerce website for a panini deli & coffee roaster, focused on documenting the problem space, design goals, research insights, and the evolution of branding."
        role="Product Designer / UI Designer / Frontend Developer"
        responsibilities={[
          "Defined the product direction and feature structure",
          "Designed interface flows and page layouts",
          "Built interactive frontend screens and reusable components",
        ]}
        impact={[
          "Created a clearer case-study presentation format for checkout flows and ecommerce UI",
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