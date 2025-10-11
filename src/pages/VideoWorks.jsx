import ProjectGrid from "../components/ProjectGrid.jsx";
export default function VideoWorksPage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/data/projects.json" collection="video" />
    </main>
  );
}