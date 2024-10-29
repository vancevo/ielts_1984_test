export const data = {
    question: {
        paragraph:
            "The sky is [_input] and the grass is [_input]. You should drag the word <span style='color: red;'>green</span> to the correct blank.",
        blanks: [
            { id: 1, position: 'first', correctAnswer: 'blue', type: 'input' },
            { id: 2, position: 'second', correctAnswer: 'green', type: 'drag' }
        ],
        dragWords: [
            { word: 'blue', color: 'default', id: 1 },
            { word: 'green', color: 'red', id: 2 },
            { word: 'yellow', color: 'default', id: 3 },
            { word: 'red', color: 'default', id: 4 }
        ]
    }
};
