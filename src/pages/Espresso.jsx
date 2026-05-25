import ProjectGrid from "../components/ProjectGrid.jsx";
export default function EspressoPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/data/projects.json" collection="espresso" />
    </main>
  );
}