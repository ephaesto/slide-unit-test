import { usePresenceData, motion } from 'motion/react';
import { forwardRef } from 'react';

const box: React.CSSProperties = {
  width: 150,
  height: 150,
  backgroundColor: '#0cdcf7',
  borderRadius: '10px',
};

const Slide = forwardRef(function Slide(
  { color = 'blue', children }: { color?: string; children: React.ReactNode },
  ref: React.Ref<HTMLDivElement>,
) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 1000 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      exit={{ opacity: 0, x: direction * -1000 }}
      style={{ ...box, backgroundColor: color }}
    >
      {children}
    </motion.div>
  );
});

export default Slide;
