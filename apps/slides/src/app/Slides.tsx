import React from 'react';
import Post from './post.mdx';
import { useMDXComponents } from '@mdx-js/react';

const Slides: React.FC = () => {
  const findComponents = useMDXComponents();

  return (
    <>
      <Post components={findComponents} />
    </>
  );
};
export default Slides;
