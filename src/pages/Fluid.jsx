import ProjectGrid from "../components/ProjectGrid.jsx";
export default function FluidPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/data/projects.json" collection="fluid" />
    </main>
  );
}