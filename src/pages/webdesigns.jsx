import { useEffect, useState } from "react";

export default function WebDesign() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => { 
    fetch("/data/web-projects.json")
      .then((r) => {
        if (!r.ok) throw new Error(`Fetch ${r.status}`);
        return r.json();
    })
      .then(setItems)
      .catch((e) => {
        console.error(e);
        setErr("Could not load web-projects.json");
        setItems([]);
    });
  }, []);

  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative flex h-[30vh] items-center justify-center bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl tracking-tight">
            Web Design
          </h1>
          <p className="mt-3 text-gray-600">
            case studies & interactive prototypes (placeholders for now)
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(it => (
            <Card key={it.id} item={it} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Card({ item }) {
  const inner = item.type === "video" ? (
    <video className="w-full h-full object-cover" src={item.thumb} muted loop playsInline />
  ) : (
    <img className="w-full h-full object-cover" src={item.thumb} alt={item.title} />
  );

  const content = (
    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm aspect-[16/10]">
      {inner}
    </div>
  );

  return item.href ? (
    <a href={item.href} className="block group">
      {content}
      <div className="mt-2 text-sm text-gray-700 group-hover:text-gray-900">{item.title}</div>
    </a>
  ) : (
    <div>
      {content}
      <div className="mt-2 text-sm text-gray-700">{item.title}</div>
    </div>
  );
}