import ProjectGrid from "../components/ProjectGrid.jsx";
export default function ThreeDModelsPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/projects.json" collection="3d" />
    </main>
  );
}