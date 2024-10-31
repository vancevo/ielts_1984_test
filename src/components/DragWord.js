import { motion } from 'framer-motion';
import { forwardRef } from 'react';

function DragWord({ word, color }, ref) {
    const handleTouchStart = (e) => {
        e.preventDefault();
        e.target.style.zIndex = 99;
        e.dataTransfer = e.dataTransfer || {};
        e.dataTransfer.setData('drag-word', word);

        const dragEvent = new DragEvent('dragstart', {
            bubbles: true,
            cancelable: true,
            dataTransfer: e.dataTransfer
        });
        e.target.dispatchEvent(dragEvent);
    };

    const handleTouchEnd = (e) => {
        e.target.style.zIndex = '';
    };
    return (
        <motion.div
            ref={ref}
            className={`drag-item bg-${color} select-none`}
            draggable
            onDragStart={(e) => {
                e.target.style.zIndex = 99;
                e.dataTransfer.setData('drag-word', word);
            }}
            onDragEnd={(e) => {
                e.target.style.zIndex = '';
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 1 }}
            whileDrag={{ scale: 1.1, opacity: 0.8 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        >
            {word}
        </motion.div>
    );
}

export default forwardRef(DragWord);
