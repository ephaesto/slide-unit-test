import { AnimatePresence, wrap } from 'motion/react';
import { useState, type PropsWithChildren } from 'react';

const container: React.CSSProperties = {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
};

const Slider: React.FC<PropsWithChildren> = ({ children }) => {
  const childrenList = children;
  if (!Array.isArray(childrenList)) {
    return;
  }
  const items = Object.keys(childrenList);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedItem, setSelectedItem] = useState(Number(items[0]));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [direction, setDirection] = useState<1 | -1>(1);

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(0, items.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  }

  return (
    <>
      <div style={container}>
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          {childrenList[selectedItem]}
        </AnimatePresence>
      </div>
      <button className="btn btn-circle" onClick={() => setSlide(-1)}>
        {'<'}
      </button>
      <button className="btn btn-circle" onClick={() => setSlide(1)}>
        {'>'}
      </button>
    </>
  );
};

export default Slider;
