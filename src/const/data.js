export const data = {
    question: {
        paragraph: 'The sky is [_input] and the grass is [_input]',
        blanks: [
            { id: 1, position: 'first', correctAnswer: 'blue', type: 'input' },
            { id: 2, position: 'second', correctAnswer: 'green', type: 'drag' }
        ],
        dragWords: [
            { word: 'blue', color: 'blue', id: 1 },
            { word: 'green', color: 'green', id: 2 },
            { word: 'yellow', color: 'yellow', id: 3 },
            { word: 'red', color: 'red', id: 4 }
        ]
    }
};

export const DEFAULT_INPUT_TEXT = '[_input]';
export const DISTANCE_X = 50;
export const DISTANCE_Y = 20;
export const DEFAULT_POSITION = { x: 0, y: 0 };
export const DELAY_ERROR = 1500;
export const EXTRA_POINT = 100;
