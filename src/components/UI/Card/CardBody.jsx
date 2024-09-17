// import { Image, Link, Github } from '../utils/App';

export default function CardBody({ name, image, link, github }) {
  return (
    <div className="card-body">
      {/* <Image {...image} />
      <Link {...link} />
      <Github {...github} /> */}
      <p className="cardName">{name}</p>
      <img src={image} className="cardImage"/>
      <a href={link} className="cardLink">Deployed Link</a>
      <a href={github} className="cardGithub">Link to Github</a>
    </div>
  );
}
