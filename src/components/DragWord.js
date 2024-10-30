import { motion } from 'framer-motion';
import { forwardRef } from 'react';

function DragWord({ word, color }, ref) {
    return (
        <motion.div
            ref={ref}
            className={`drag-item bg-${color}`}
            draggable
            onDragStart={(e) => {
                e.target.style.zIndex = 99;
                e.dataTransfer.setData('drag-word', word);
            }}
            onDragEnd={(e) => {
                e.target.style.zIndex = '';
            }}
            initial={{ opacity: 1 }}
            whileDrag={{ scale: 1.1, opacity: 0.8 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        >
            {word}
        </motion.div>
    );
}

export default forwardRef(DragWord);
