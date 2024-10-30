import clsx from 'clsx';
import { motion, useAnimationControls } from 'framer-motion';
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DragWord from './components/DragWord';
import Paragraph from './components/Paragraph';
import Navbar from './components/Navbar';
import { data, DEFAULT_INPUT_TEXT, DELAY_ERROR, EXTRA_POINT } from './const/data';

function App() {
    const dragRef = useRef(null);
    const [feedback, setFeedback] = useState('');
    const [newData, setNewData] = useState(data);
    const [point, setPoint] = useState(0);
    const controls = useAnimationControls();
    const lenInput = useMemo(
        () => data.question.paragraph.split(' ').filter((item) => item === DEFAULT_INPUT_TEXT).length,
        []
    );

    const handleDropFeedback = (blank, isCorrect) => {
        if (isCorrect) {
            const { id } = blank;
            setNewData((prev) => ({
                question: {
                    ...prev.question,
                    dragWords: prev.question.dragWords.filter((item) => item.id !== id)
                }
            }));
        } else {
            controls.start({
                color: '#f00',
                transition: { duration: 1 }
            });
            setFeedback('Incorrect word! Please try again.');
            setTimeout(() => setFeedback(''), DELAY_ERROR);
        }
    };

    const handleSubmit = useCallback(() => {
        if (feedback) {
            return;
        }
        controls.start({
            color: '#0000FF',
            transition: { duration: 1 }
        });
        setPoint(point + EXTRA_POINT);
        setFeedback("Congratulations! Now, let's move on to the next question!");
    }, []);

    const isDisable = () => {
        const lenWord = data.question.dragWords.length - newData.question.dragWords.length;
        return lenWord === lenInput;
    };
    return (
        <Fragment>
            <Navbar point={point} />
            <div className="mt-10 flex justify-center flex-col items-center">
                <Paragraph
                    question={newData.question.paragraph}
                    blanks={newData.question.blanks}
                    onDrop={handleDropFeedback}
                />
                <p className="mt-10 text-neutral-500 font-bold">You should drag the word to the correct blank.</p>
                {/* DRAG-ITEM */}
                <div id="drag-container">
                    {newData.question.dragWords.map((word) => (
                        <DragWord
                            ref={dragRef}
                            key={word.id}
                            id={word.id}
                            word={word.word}
                            color={word.color}
                            setFeedback={setFeedback}
                        />
                    ))}
                </div>
                {/* ACTION */}
                <motion.div id="feedback" className="text-white mt-4" animate={controls}>
                    {feedback}
                </motion.div>
                <button
                    className={clsx(
                        'btn cursor-pointer rounded-lg border-neutral-500 border-[1px] hover:bg-yellow-500',
                        ` ${
                            !isDisable()
                                ? 'cursor-not-allowed bg-neutral-100 hover:bg-neutral-100 text-gray-300 border-[0px]'
                                : ''
                        }`
                    )}
                    disabled={!isDisable()}
                    onClick={handleSubmit}
                >
                    {point >= EXTRA_POINT ? 'Next question' : 'Submit'}
                </button>
            </div>
        </Fragment>
    );
}

export default App;
