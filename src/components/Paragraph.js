import { useState } from 'react';
import { DEFAULT_INPUT_TEXT } from '../const/data';
import Blank from './Blank';

function Paragraph({ question, blanks, onDrop }) {
    const fmContent = question.split(DEFAULT_INPUT_TEXT).filter((item) => !!item);

    const [filledBlanks, setFilledBlanks] = useState({});

    const handleDrop = (blankId, word) => {
        if (blanks[blankId].correctAnswer === word) {
            setFilledBlanks((prev) => ({ ...prev, [blankId]: word }));
            onDrop(blanks[blankId], true);
        } else {
            onDrop(blanks[blankId], false);
        }
    };

    return (
        <div className="flex">
            {fmContent.map((item, index) => (
                <div
                    key={index}
                    className="flex"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => e.preventDefault()}
                >
                    <p>{item}</p>
                    <Blank
                        id={index}
                        word={filledBlanks[index]}
                        blank={blanks}
                        onDrop={(word) => handleDrop(index, word)}
                    />
                </div>
            ))}
        </div>
    );
}
export default Paragraph;
