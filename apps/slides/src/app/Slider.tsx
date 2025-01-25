import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Slides3 from './Slides3';

const components = {
  Slide({ children, ...rest }: unknown) {
    console.log('rest', rest);

    return <section>{children}</section>;
  },
};
// const markdown = `---
// layout = "solar-system"
// ---

// test  markdomn

// ---

// test markdomn
// `;

const Slider: React.FC = () => {
  return (
    <>
      {/* <Markdown
        remarkRehypeOptions={{
          passThrough: ['mdxjsEsm', 'mdxFlowExpression', 'mdxJsxFlowElement', 'mdxJsxTextElement', 'mdxTextExpression'],
        }}
        remarkPlugins={[[remarkFrontmatter, ['yaml', 'toml']], remarkSlide, remarkMdx]}
      >
        {markdown}
      </Markdown> */}
      <MDXProvider components={components}>
        <Slides3 />
      </MDXProvider>
    </>
  );
};
export default Slider;
