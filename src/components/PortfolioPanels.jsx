import { useNavigate } from "react-router-dom";

export default function PortfolioPanels() {
  const navigate = useNavigate();

  const items = [
    {
      title: "3D Works & Animations",
      image: "/media/traditional/bird.jpeg", // replace later
      route: "/portfolio",
    },
    {
      title: "Web Designs & Projects",
      image: "/media/web/rndtbl/rtcs.png",
      route: "/web-design",
    },
    {
      title: "Traditional Works",
      image: "/media/traditional/portraits/Portrait_01.jpg",
      route: "/traditional",
    },
  ];

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
      <div className="grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <PreviewCard
            key={i}
            {...item}
            onClick={() => navigate(item.route)}
          />
        ))}
      </div>
    </section>
  );
}

function PreviewCard({ title, image, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full h-72 rounded-2xl overflow-hidden border border-black/10"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        
        {/* Text container */}
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
          
          <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-2 text-sm text-white/80">
            View Project →
          </p>
        </div>
      </div>
    </button>
  );
}