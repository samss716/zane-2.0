import ProjectGrid from "../components/ProjectGrid.jsx";
export default function SimulationsPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/data/projects.json" collection="sim" />
    </main>
  );
}