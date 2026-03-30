function InfoBlock({ label, children }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-orange-500">
        {label}
      </p>
      <div className="text-base leading-8 text-gray-700">
        {children}
      </div>
    </div>
  );
}

export default function CaseStudyOverview({
  overview,
  role,
  responsibilities = [],
  impact = [],
}) {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[1.4fr,0.9fr] lg:px-12">
      <div>
        <InfoBlock label="Overview">
          <p>{overview}</p>
        </InfoBlock>
      </div>

      <div className="space-y-10">
        <InfoBlock label="Role">
          <p>{role}</p>
        </InfoBlock>

        <InfoBlock label="Responsibilities">
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="border-l-2 border-blue-200 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </InfoBlock>

        <InfoBlock label="Impact">
          <ul className="space-y-3">
            {impact.map((item) => (
              <li key={item} className="border-l-2 border-blue-200 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </InfoBlock>
      </div>
    </section>
  );
}