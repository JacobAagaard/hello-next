import Layout from '../components/MyLayout';
import Project from '../components/Project';
import { getProjects } from '../utils/service';

const Index = (props: any) => {
  return (
    <Layout>
      <h1>Hello, World - I'm Jacob</h1>
      <i>Software developer specialized in web development</i>
      <h2>
        Projects I've made <a href="/projects">↗️</a>
      </h2>
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
};

/* This is just an API fetch example */
Index.getInitialProps = async ({ req }: any) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;

  // Dynamic import / LazyLoad Axios
  const axiosStatic = await import('axios');
  const axios = axiosStatic.default;
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data: [] = await res.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    userAgent,
    shows: data.map((entry: { show: any }) => entry.show),
  };
};

export default Index;
