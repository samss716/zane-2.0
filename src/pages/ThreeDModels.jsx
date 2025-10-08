// src/pages/ThreeDModels.jsx
import ProjectGrid from "../components/ProjectGrid.jsx";

export default function ThreeDModelsPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/projects.json" />
    </main>
  );
}
