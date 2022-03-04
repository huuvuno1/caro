import { INIT_CHESSBOARD, YOU_HIT, OPPONENT_HIT } from './matrix.type'

const INITIAL_STATE = {
    data: []
};

const initChessboardData = ({ row, col }) => {
    const data = []

    for (let i = 0; i < row; i++) {
        data.push(new Array(col).fill(''))
    }

    return data
}

const userHit = ({x, y, value}, oldData) => {
    const newData = [...oldData]
    newData[x][y] = value
    return newData
}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INIT_CHESSBOARD:
            const data = initChessboardData(action)
            return {
                ...state, data
            }

        case YOU_HIT:
            return {
             ...state, data: userHit(action, state.data)
            };

        case OPPONENT_HIT:
           return {
              ...state,  data: userHit(action, state.data)
           };

         default: return state;

    }

};

export default reducer;

