import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';
import { getProject } from '../../utils/service';

const ProjectId = (props: any) => {
  const router = useRouter();
  const query = router.query;
  const project = props.project;
  var title, imgSrc: string;
  var urls: Array<string>;
  var body: any;

  title = project.title ? project.title : query.id;
  body = project.body;
  urls = project.urls;
  imgSrc = project.img;

  return (
    <Layout>
      <h1>
        {title} {imgSrc && <img height="40" src={imgSrc}></img>}
      </h1>
      <p>{body}</p>
      {urls && (
        <p>
          Read more:{' '}
          {urls.map((url, index) => (
            <p key={`${index}-${url}`}>
              <a target="_blank" href={url}>
                {`↗️ ${url}`}
              </a>
            </p>
          ))}
        </p>
      )}
    </Layout>
  );
};

ProjectId.getInitialProps = async function(context: any) {
  const { id } = context.query;

  // Fetch project and assign project obj to props
  const project = getProject(id);

  return { id, project };
};

export default ProjectId;
