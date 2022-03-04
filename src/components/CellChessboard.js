import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { youHit, opponentHit } from '../redux/matrix/matrix.actions'
import { changeTurn, endGame, setYourSymbol } from '../redux/match/match.action'

CellChessboard.propTypes = {
    
};

const checkMatch = (matrix, currRow, currCol, callback) => {
    const check = (str) => {
        return str.includes('OOOOO') || str.includes('XXXXX')
    }

    // check ngang
    var str = matrix[currRow].map(x => x || '-').join('')
    if (!check(str)) {
        // check doc
        str = ''
        for (let i = 0; i < matrix.length; i++)
            str += (matrix[i][currCol] || '-')

        if (!check(str)) {
            // check cheo \
            str = ''
            for (let i = 1; i <= 4; i++) {
                try {
                    if (currCol - i < 0)
                            break;
                    var c = matrix[currRow - i][currCol - i] 
                    if (c == '')
                        c = '-'
                    str = c + str
                } catch {
                }
            }
            str += matrix[currRow][currCol]
            for (let i = 1; i <= 4; i++) {
                try {
                    if (currCol + i >= matrix[0].length)
                        break;
                    var c = matrix[currRow + i][currCol + i]
                    if (c == '')
                        c = '-'
                    str += c
                } catch {}
            }

            if (!check(str)) {
                // check cheo /
                str = ''
                for (let i = 1; i <= 4; i++) {
                    try {
                        var c = matrix[currRow - i][currCol + i] 
                        if (c == '')
                            c = '-'
                        str = c + str
                    } catch {
                        console.log('err')
                    }
                }
                str += matrix[currRow][currCol]
                for (let i = 1; i <= 4; i++) {
                    try {
                        if (currCol - i < 0)
                            break;
                        var c = matrix[currRow + i][currCol - i]
                        if (c == '')
                            c = '-'
                        str += c
                    } catch {}
                }
            }
        }
    }

    if (check(str)) {
        if (str.includes('OOOOO')) {
            callback('O')
        }
    
        if (str.includes('XXXXX')) {
            callback('X')
        }
    }

}

function CellChessboard(props) {
    const {rowIndex, cellIndex, value, your_symbol, opponent_symbol, your_turn} = props
    const handleClick = () => {
        if (value === 'O' || value === 'X')
            return

        if (your_turn) {
            props.youHit(rowIndex, cellIndex, your_symbol)
        } else {
            props.opponentHit(rowIndex, cellIndex, opponent_symbol)

        }
        props.changeTurn()

        checkMatch(props.matrix, rowIndex, cellIndex, (user_win) => {
            props.endGame(user_win)
        })
    }

    return (
        <td onClick={handleClick} style={{
            color: value === 'X' ? 'red' : 'green'
        }}>
            {value}
        </td>
    );
}

const mapStateToProps = state => {
    return {
      your_symbol: state.match.your_symbol,
      opponent_symbol: state.match.opponent_symbol,
      matrix: state.matrix.data,
      your_turn: state.match.your_turn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setYourSymbol: (value) => dispatch(setYourSymbol(value)),
        youHit: (x, y, value) => dispatch(youHit(x, y, value)),
        opponentHit: (x, y, value) => dispatch(opponentHit(x, y, value)),
        changeTurn: () => dispatch(changeTurn()),
        endGame: (user_win) => dispatch(endGame(user_win))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CellChessboard)