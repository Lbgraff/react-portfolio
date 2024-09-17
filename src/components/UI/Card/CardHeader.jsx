import ProjectTeaser from '../ProjectSections/ProjectTeaser';

export default function CardHeader({ project }) {
  return (
    <div className="card-header">
      <ProjectTeaser project={project} />
      <h2 className="ms-2 me-auto">
        {project.name}
        </h2>
    </div>
  );
}
