import { motion } from 'framer-motion';
function Blank({ word, onDrop }) {
    const handleTouchMove = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const droppedWord = e.target.getAttribute('data-drag-word');
        if (droppedWord) {
            e.dataTransfer = e.dataTransfer || {};
            e.dataTransfer.setData('drag-word', droppedWord);
        }
    };

    const handleDropTouch = (e) => {
        e.preventDefault();
        const droppedWord = e.dataTransfer.getData('drag-word');
        onDrop(droppedWord);
    };

    return (
        <motion.span
            className={`input-blank ${word ? 'locked' : ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                const droppedWord = e.dataTransfer.getData('drag-word');
                onDrop(droppedWord);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDropTouch}
        >
            {word || '____'}
        </motion.span>
    );
}
export default Blank;
