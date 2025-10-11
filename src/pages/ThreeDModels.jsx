import ProjectGrid from "../components/ProjectGrid.jsx";
export default function ThreeDModelsPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/data/projects.json" collection="3d" />
    </main>
  );
}