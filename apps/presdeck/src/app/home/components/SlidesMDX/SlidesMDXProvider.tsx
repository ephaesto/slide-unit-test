import React, { type PropsWithChildren } from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  Slide({ children, ...rest }: unknown) {
    console.log('rest', rest);

    return <section>{children}</section>;
  },
};

const SlidesMDXProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
export default SlidesMDXProvider;
