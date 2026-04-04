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
        image="/media/web/rndtbl.png"
      />

      <CaseStudySectionNav
        items={[
          { label: "Context", href: "#context" },
          { label: "Research", href: "#research" },
          { label: "Design", href: "#design" },
          { label: "AI Prototyping", href: "#aiprototyping" },
          { label: "APIs and Integrations", href: "#APISandIntegrations" },
        ]}
      />

      <CaseStudyOverview
        overview="RoundTbl is a collaborative book club platform designed to foster open discussion and shared decision-making. Inspired by the symbolism of the Arthurian Round Table, the platform integrates AI-assisted conversation tools and API-driven book discovery to support equitable group engagement."
        role="Product Designer / UI Designer / Frontend Developer"
        responsibilities={[
          "Defined the application concept and feature structure",
          "Designed interface flows and page layouts",
          "Built interactive frontend animations and reusable components",
        ]}
        impact={[
          "Created a clearer case-study presentation format for portfolio work",
          "Explored full stack development by building a React frontend and Node.js backend, integrating AI tools and external APIs",
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
          	Book clubs are inherently collaborative, yet many groups struggle to reach decisions that reflect the interests of all members. While groups are often organized around a shared goal, selecting books can become a point of friction.

This project explores how digital platforms can better support equitable participation in group decision-making. Inspired by the Arthurian Round Table—a symbol of equality and shared voice—I sought to create a centralized space where each member has an equal influence in shaping the group’s reading experience.
To support this, I introduced AI-assisted tools designed to facilitate balanced discussion, helping groups navigate differing preferences and reach more inclusive decisions.

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
        id="design"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          Design
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Design and implementation
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Color palette, typography, and design system details.
        </p>
      </section>

      <section
        id="aiprototyping"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          AI Prototyping
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          Prototyping and iteration
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          wireframes, prototypes, interaction ideas, and iteration notes here later.
        </p>
      </section>

      <section
        id="APISandIntegrations"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
          APIs and Integrations
        </p>
        <h2 className="font-bricolage text-3xl tracking-tight text-gray-900">
          API and Developer Tools/Stack
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700">
          Technology Stack Details: React frontend, Node.js backend, AI tools (e.g., OpenAI API), and external book APIs (e.g., Google Books API). Discussion of how these technologies were integrated to support the platform's features and enhance the user experience.
        </p>
      </section>
    </main>
  );
}