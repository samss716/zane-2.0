import { useParams } from "react-router-dom";

const TITLES = {
  "portraits": "Portraits",
  "figure-studies": "Figure studies",
  "milk-collection": "Milk collection",
  "archive": "Archive",
};

export default function CollectionStrip() {
  const { collection } = useParams();

  const title = TITLES[collection] ?? "Collection";
  // placeholder data per collection (customize later)
  const items = Array.from({ length: 10 }).map((_, i) => ({
    id: `${collection}-${i}`,
    w: i % 3 === 0 ? 420 : i % 3 === 1 ? 320 : 260,
    h: i % 2 === 0 ? 320 : 420,
  }));

return (
    <div className="relative min-w-0">
      <h2 className="mb-4 font-bricolage text-xl text-gray-800">{title}</h2>

      {/* This wrapper clamps width to the white container and hides any bleed */}
      <div className="w-full min-w-0 overflow-hidden">
        {/* Only THIS element scrolls horizontally */}
        <div
          className="
            w-full max-w-full min-w-0
            overflow-x-auto overflow-y-hidden overscroll-x-contain
            snap-x snap-mandatory
            flex gap-6
            rounded-xl border bg-gray-50
            p-5 md:p-6
            scroll-px-5 md:scroll-px-6
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
          "
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((it) => (
            <div
              key={it.id}
              className="snap-start shrink-0 rounded-lg bg-gray-200"
              style={{ width: it.w, height: it.h }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}