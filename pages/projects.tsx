import Layout from '../components/MyLayout';
import Project from '../components/Project';
import { getProjects } from '../utils/service';

function Projects() {
  return (
    <Layout>
      <h2>Projects I've made</h2>
      <ul>
        {getProjects().map((project: any, index: number) => (
          <li key={`${index}-${project.slug}`}>
            <Project
              slug={project.slug}
              title={project.title}
              updatedDate={project.updatedDate}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Projects;
