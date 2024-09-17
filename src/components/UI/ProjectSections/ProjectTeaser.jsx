export default function ProjectTeaser({ project: { name, image } }) {

  return (
    <>
      <div className="ms-2 me-auto">
        <a2>{project.name}</a2>
        <a href={``}>{image}</a>
      </div>
    </>
  );
}
