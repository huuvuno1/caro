import { INIT_CHESSBOARD, YOU_HIT, OPPONENT_HIT } from './matrix.type'

export const initChessboard = (row, col) => {
    return {
        row, col,
        type: INIT_CHESSBOARD
    }
}

export const youHit = (x, y, value) => {
    return {
        x,
        y,
        value,
        type: YOU_HIT,
    };
};

export const opponentHit = (x, y, value) => {
    return {
        x,
        y,
        value,
       type: OPPONENT_HIT,
    };
};