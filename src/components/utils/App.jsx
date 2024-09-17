import React from 'react';
import CardBody from '../UI/Card/CardBody';
import CardHeader from '../UI/Card/CardHeader';

const App = () => {
  const data = [

    { id: 1, name: 'weather-app', image: '', link: 'https://lbgraff.github.io/weather-app/', github: 'https://github.com/Lbgraff/weather-app' },
    { id: 2, name: 'README-generator', image: '', link: 'https://drive.google.com/file/d/1zu4bNQ2QuENGce_TqFyZf_ijEVhCQl-J/view', github: 'https://github.com/Lbgraff/README-generator' },
    { id: 3, name: 'SQL-employee-tracker', image: '', link: 'https://drive.google.com/file/d/1SomesRvOXUPV80hP-88CCxgGvSSiXhly/view', github: 'https://github.com/Lbgraff/SQL-employee-tracker' },
    { id: 4, name: 'E-commerce-Back-End', image: '', link: 'https://drive.google.com/file/d/1ql9tmnHzsFRZgkWBzOLAwWsYYy9_bnxs/view', github: 'https://github.com/Lbgraff/E-commerce-Back-End' },
    { id: 5, name: 'text-editor', image: '', link: 'https://text-editor-g11y.onrender.com/', github: 'https://github.com/Lbgraff/text-editor' },

  ];

  return (
    <div className="card-container">
      {data.map(item => (
        <Card key={project.id} title={project.title} image={project.image} link={project.link} github={project.github} />
      ))}
    </div>
  );
};

export default App;