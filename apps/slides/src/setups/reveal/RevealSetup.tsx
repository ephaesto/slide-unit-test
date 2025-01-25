import React, { PropsWithChildren } from 'react';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import { RevealSlides } from './RevealSlides';

const RevealSetup: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RevealSlides controls={false} plugins={[RevealZoom, RevealNotes]} onStateChange={state => console.log(state)}>
      {children}
    </RevealSlides>
  );
};
export default RevealSetup;
