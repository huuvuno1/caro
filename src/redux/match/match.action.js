import { SET_YOUR_SYMBOL, SET_YOUR_TIME, SET_OPPONENT_TIME, SET_OPPONENT_SYMBOL, CHANGE_TURN, STOP, INIT_MATCH } from './match.type'

export const setYourSymbol = (value) => {
    return {
        value,
        type: SET_YOUR_SYMBOL
    }
}

export const setOpponentSymbol = (x, y, value) => {
    return {
        value,
        type: SET_OPPONENT_SYMBOL,
    };
};

export const setYourTime = (value) => {
    return {
        value,
        type: SET_YOUR_TIME
    }
}

export const setOpponentTime = (x, y, value) => {
    return {
        value,
        type: SET_OPPONENT_TIME,
    };
};


export const changeTurn = () => {
    return {
        type: CHANGE_TURN,
    };
};
export const endGame = (user_win) => {
    return {
        user_win,
        type: STOP,
    };
};


export const initMatch = (your_symbol, opponent_symbol) => {
    return {
        your_symbol, opponent_symbol,
        type: INIT_MATCH,
    };
};

