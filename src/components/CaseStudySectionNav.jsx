export default function CaseStudySectionNav({ items = [] }) {
  return (
    <nav className="sticky top-20 z-30 border-y border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl gap-6 overflow-x-auto px-6 sm:px-8 lg:px-12">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap py-4 text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}