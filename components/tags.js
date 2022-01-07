export default function Tags({ tags }) {
  return (
    <p className="text-lg font-bold">
      {tags.edges.map((tag, index) => (
        <span key={index} className="mr-4 font-bold">
          {tag.node.name},
        </span>
      ))}
    </p>
  );
}
