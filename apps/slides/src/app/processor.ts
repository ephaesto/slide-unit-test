/* eslint-disable @typescript-eslint/no-explicit-any */
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkRehype from 'remark-rehype';

import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import React from 'react';

export const processor = unified()
  .use(remarkParse)
  .use(remarkMdx)
  .use(remarkRehype, {
    fragment: true,
    allowDangerousHtml: true,
    passThrough: ['mdxjsEsm', 'mdxFlowExpression', 'mdxJsxFlowElement', 'mdxJsxTextElement', 'mdxTextExpression'],
  })
  .use(rehypeReact, {
    createElement: React.createElement,
    Fragment,
    jsx,
    jsxs,
  });
