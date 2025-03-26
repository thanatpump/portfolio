// resources/js/components/PortfolioList.tsx

import React, { useEffect, useState } from 'react';

interface Project {
  name: string;
  description: string;
}

const PortfolioList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
