import { motion } from 'framer-motion';
function Blank({ word, onDrop }) {
    return (
        <motion.span
            className={`input-blank ${word ? 'locked' : ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                const droppedWord = e.dataTransfer.getData('drag-word');
                onDrop(droppedWord);
            }}
        >
            {word || '____'}
        </motion.span>
    );
}
export default Blank;
