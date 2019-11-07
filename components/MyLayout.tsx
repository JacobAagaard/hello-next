import Head from 'next/head';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily:
    'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
};
const Layout = (props: any) => {
  return (
    <div className={props.className} style={layoutStyle}>
      <Header />
      <Head>
        <title>Hello, World</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/bubble-chamber-black-round.png"></link>
      </Head>
      {props.children}
      <style jsx global>{`
        h1 {
          margin-bottom: 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }

        h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default Layout;
