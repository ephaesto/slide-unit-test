import type React from 'react';
import { Outlet } from 'react-router';

import '~/assets/css/root.css';
export { links, Layout, ErrorBoundary } from '~/.config';

const Root: React.FC = () => {
  return <Outlet />;
};

export default Root;
