import Link from 'next/link';
import React from 'react';
import IPage from '../interfaces/IPage';

const Project: React.SFC<IPage> = (props: any) => (
  <Link href="/projects/[id]" as={`/projects/${props.slug}`}>
    <a>{props.title}</a>
  </Link>
);

export default Project;
