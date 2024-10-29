import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { useRef, useState } from 'react';

function DragWord({ word, color, id }) {
    return (
        <Draggable>
            <motion.div
                className={`drag-item ${color === 'red' ? 'red' : ''}`}
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text/plain', word)}
                initial={{ opacity: 1 }}
                whileDrag={{ scale: 1.1, opacity: 0.8 }}
            >
                {word}
            </motion.div>
        </Draggable>
    );
}

export default DragWord;
