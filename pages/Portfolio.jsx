import { Link } from 'react-router-dom';
import Container from '../src/components/UI/ListItem';
import CardBody from '../src/components/UI/Card/CardBody';

export default function ProjectPage() {
 
  const data = [

    { id: 1, name: 'weather-app', image: './weatherapp.png', link: 'https://lbgraff.github.io/weather-app/', github: 'https://github.com/Lbgraff/weather-app' },
    { id: 2, name: 'note-taker', image: './notetaker.png', link: 'https://note-taker-4r15.onrender.com/', github: 'https://github.com/Lbgraff/note-taker' },
    { id: 3, name: 'task-board', image: './taskboard.png', link: 'https://lbgraff.github.io/task-board/', github: 'https://github.com/Lbgraff/task-board' },
    { id: 4, name: 'tech-blog', image: './techblog.png', link: 'https://tech-blog-18d9.onrender.com/blogpost/1', github: 'https://github.com/Lbgraff/tech-blog' },
    { id: 5, name: 'text-editor', image: './texteditor.png', link: 'https://text-editor-g11y.onrender.com/', github: 'https://github.com/Lbgraff/text-editor' },

  ];


  return (
    
      <Container key={Container.id}>
      {data.map(item => (
        <CardBody key={CardBody.id} name={item.name} image={item.image} link={item.link} github={item.github}/>
      ))}
      </Container>
  );
}
