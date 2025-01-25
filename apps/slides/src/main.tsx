import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { orderSetups, setups } from './setups';
import { Nest } from 'components';
import Slider from './app/Slider';

const container = document.getElementById('root');
if (!container) {
  throw new Error('container not found!');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Nest containers={setups} containersList={orderSetups}>
      <Slider />
    </Nest>
  </StrictMode>,
);
