import { motion } from 'framer-motion';
function Blank({ id, word, onDrop }) {
    return (
        <motion.span
            className={`input-blank ${word ? 'locked' : ''}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                const droppedWord = e.dataTransfer.getData('text/plain');
                onDrop(droppedWord);
            }}
        >
            {word || '____'}
        </motion.span>
    );
}
export default Blank;
