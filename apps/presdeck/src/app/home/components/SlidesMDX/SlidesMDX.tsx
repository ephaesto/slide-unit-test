import React from 'react';
import { useMDXComponents } from '@mdx-js/react';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-dev-runtime';
import type { MDXContent } from 'mdx/types';

const markdown = `
import { Test } from "./Test";


<section key="1">
  <Test></Test>
  # Hello, world!
</section>

<section key="2" data-background-color='#bf4f41'>
  <section key="2-0">
    <h2>Free reign over your presentation</h2>
    <p>This package makes no efforts to impead or restrict what you can do.</p>
  </section>
  <section key="2-1">
    <p>Since React creates HTML DOM elements out of JSX, there should be no reason we cant just put JSX inside of our RevealSlides component instead of the HTML markup Reveal.js normally expects.</p>
  </section>
  <section key="2-2">  
    <p>Simply put, React already takes care of converting JSX into something Reveal.js can work with.</p>
  </section>
</section>
`;

const SlidesMDX: React.FC = () => {
  const [Content, setContent] = React.useState<MDXContent | null>(null);
  const components = useMDXComponents();

  React.useEffect(() => {
    const createComponents = async () => {
      try {
        const compiledContent = await compile(markdown, {
          outputFormat: 'function-body',
          baseUrl: import.meta.url,
          development: true,
          remarkPlugins: [],
          rehypePlugins: [],
        });

        const { default: ContentComponent } = await run(compiledContent, {
          ...runtime,
        });

        setContent(() => ContentComponent);
      } catch (error) {
        console.log(error);
      }
    };
    createComponents();
  }, []);
  return <>{Content ? <Content components={components} /> : <div>...Loading</div>}</>;
};
export default SlidesMDX;
