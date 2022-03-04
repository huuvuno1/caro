import { SET_YOUR_SYMBOL, SET_YOUR_TIME, SET_OPPONENT_TIME, SET_OPPONENT_SYMBOL, CHANGE_TURN, STOP, INIT_MATCH } from './match.type'

const INITIAL_STATE = {
    your_symbol: 'X',
    opponent_symbol: 'O',
    your_time: 30,
    opponent_time: 30,
    your_turn: true,
    opponent_turn: false,
    isStop: false,
    user_win: ''
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INIT_MATCH: 
            return {
                ...state, your_symbol: action.your_symbol, opponent_symbol: action.opponent_symbol,
                    isStop: false, user_win: ''
            }

        case SET_YOUR_SYMBOL:
            return {
                ...state, your_symbol: action.value
            }

        case SET_OPPONENT_SYMBOL:
            return {
                ...state,  opponent_symbol: action.value
            };

        case SET_YOUR_TIME:
            return {
             ...state, your_time: action.value
            };

        case SET_OPPONENT_TIME:
           return {
              ...state,  opponent_time: action.value
           };
        case CHANGE_TURN:
            return {
                ...state, your_turn: !state.your_turn, opponent_turn: !state.opponent_turn
            };
        case STOP:
            return {
                ...state, isStop: true,
                user_win: action.user_win
            }
         default: return state;

    }

};

export default reducer;

