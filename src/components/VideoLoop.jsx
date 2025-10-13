export default function VideoLoop({ src, poster = "" }) {
  return (
    <div className="h-[240px] md:h-[320px] overflow-hidden rounded-2xl shadow-sm">
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}
