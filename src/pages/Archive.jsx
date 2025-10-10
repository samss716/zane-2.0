import ProjectGrid from "../components/ProjectGrid.jsx";
export default function ArchivePage() {
  return (
    <main className="bg-white">
      <ProjectGrid dataUrl="/projects.json" collection="archive" />
    </main>
  );
}