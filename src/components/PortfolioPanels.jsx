import { useNavigate } from "react-router-dom";

export default function PortfolioPanels() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-16">
      
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Portfolio Works
        </h2>
        <p className="mt-2 text-gray-600">Explore my projects!</p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          imageSrc="/media/3dmodels/pendulum.png"
          title="3D Works & Animations"
          onClick={() => navigate("/portfolio/3d-models")}
        />
        <Card
          imageSrc="/media/web/rndtbl/rtcs.png"
          title="Web Designs & Projects"
          onClick={() => navigate("/web-design")}
        />
        <Card
          imageSrc="/media/traditional/bird.jpeg"
          title="Traditional Works"
          onClick={() => navigate("/traditional/portraits")}
        />
      </div>
    </section>
  );
}

function Card({ title, imageSrc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-64 rounded-2xl overflow-hidden border border-black/10"
    >
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-center text-center p-6">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/80">
            View Project →
          </p>
        </div>
      </div>
    </button>
  );
}