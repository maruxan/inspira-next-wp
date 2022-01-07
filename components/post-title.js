export default function PostTitle({ children }) {
  return (
    <h1
      className="mt-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-6"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
