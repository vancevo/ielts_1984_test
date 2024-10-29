import './App.css';
import { data } from './const/data';
import Paragraph from './components/Paragraph';
import DragWord from './components/DragWord';
import { useRef, useState } from 'react';

function App() {
    const [feedback, setFeedback] = useState('');

    const handleDropFeedback = (blankId, isCorrect) => {
        if (!isCorrect) {
            setFeedback('Sai vị trí. Vui lòng thử lại!');
            setTimeout(() => setFeedback(''), 2000);
        }
    };

    const handleSubmit = () => {
        const allCorrect = data.question.blanks.every(
            (blank) => document.querySelector(`[data-blank-id='${blank.id}']`).innerText === blank.correctAnswer
        );
        setFeedback(allCorrect ? 'Chúc mừng, bạn đã trả lời đúng!' : 'Có lỗi. Vui lòng thử lại!');
    };

    return (
        <div className="App">
            <Paragraph blanks={data.question.blanks} onDrop={handleDropFeedback} />
            <div id="drag-container">
                {data.question.dragWords.map((word) => (
                    <DragWord
                        key={word.id}
                        word={word.word}
                        color={word.color}
                        id={word.id}
                        initialPosition={{ x: 0, y: 0 }} // Đặt vị trí ban đầu
                    />
                ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div id="feedback">{feedback}</div>
        </div>
    );
}

export default App;
