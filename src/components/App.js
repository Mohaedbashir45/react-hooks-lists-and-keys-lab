// App.js
import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

function App() {
  const projects = [
    { id: 1, title: 'Project 1', technologies: ['React', 'JavaScript'] },
    { id: 2, title: 'Project 2', technologies: ['Node.js', 'Express'] },
    { id: 3, title: 'Project 3', technologies: ['HTML', 'CSS', 'JavaScript'] }
  ];

  return (
    <div className="App">
      <NavBar />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
