import CaseStudyHero from "../../components/CaseStudyHero";
import CaseStudySectionNav from "../../components/CaseStudySectionNav";
import CaseStudyOverview from "../../components/CaseStudyOverview";

export default function BookClubCaseStudy() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <CaseStudyHero
        eyebrow="Case Study"
        title="RoundTbl"
        subtitle="Designing a more social and intuitive reading experience created for book lovers and discussion enthusiasts."
        image="/media/web/roundtbl.png"
      />

      <CaseStudySectionNav
        items={[
          { label: "Context", href: "#context" },
          { label: "Research", href: "#research" },
          { label: "Prototyping", href: "#prototyping" },
        ]}
      />

      <CaseStudyOverview
        overview="This project explores the design of a book club application focused on making reading feel more collaborative, engaging, and easy to navigate. The case study will eventually document the problem space, design goals, research insights, and the evolution of the interface."
        role="Product Designer / UI Designer / Frontend Developer"
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
          project background
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
          user research, findings, and design reasoning.
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
          wireframes, prototypes, interaction ideas, and iteration notes here later.
        </p>
      </section>
    </main>
  );
}