import React from 'react';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

const markdown = `
---
test: Hi, World!
---

import { Test } from "./Test"

*---
  <Test></Test>
  # Hello, world!
---*

<section data-key="1" data-background-color='#bf4f41'>
  <section data-key="1-0">
    <h2>Free reign over your presentation</h2>
    <p>This package makes no efforts to impead or restrict what you can do.</p>
  </section>
  <section data-key="1-1">
    <p>Since React creates HTML DOM elements out of JSX, there should be no reason we cant just put JSX inside of our RevealSlides component instead of the HTML markup Reveal.js normally expects.</p>
  </section>
  <section data-key="1-2">  
    <p>Simply put, React already takes care of converting JSX into something Reveal.js can work with.</p>

  </section>
</section>
`;
const make = await compile(markdown, {
  outputFormat: 'function-body',
  jsx: true,
  baseUrl: import.meta.url,
  remarkPlugins: [],
  rehypePlugins: [],
});

const { default: MDXContent } = await run(make, { ...runtime });

const Slides: React.FC = () => {
  return (
    <>
      <MDXContent />
    </>
  );
};
export default Slides;
