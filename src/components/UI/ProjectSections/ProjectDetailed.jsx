import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';

export default function ProjectDetailed({ project }) {
  return (
    <div className="card">
      <CardHeader project={project.name} />
      <CardBody image={project.image} link={project.link} github={project.github} />
    </div>
  );
}
