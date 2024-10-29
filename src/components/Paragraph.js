import { useRef, useState } from 'react';
import Blank from './Blank';

function Paragraph({ blanks, onDrop }) {
    const [filledBlanks, setFilledBlanks] = useState({});

    const handleDrop = (blankId, word) => {
        if (blanks[blankId - 1].correctAnswer === word) {
            setFilledBlanks((prev) => ({ ...prev, [blankId]: word }));
            onDrop(blankId, true);
        } else {
            onDrop(blankId, false);
        }
    };

    return (
        <div>
            <p>
                The sky is <Blank id={1} word={filledBlanks[1]} onDrop={(word) => handleDrop(1, word)} /> and the grass
                is <Blank id={2} word={filledBlanks[2]} onDrop={(word) => handleDrop(2, word)} />.
            </p>
        </div>
    );
}
export default Paragraph;
