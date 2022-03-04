import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RowChessboard from './RowChessboard';
import { connect } from "react-redux"
import { initChessboard, youHit, opponentHit } from '../redux/matrix/matrix.actions'

Chessboard.propTypes = {
    
};

function Chessboard(props) {
    const { row = 15, col = 15, data } = props

    useEffect(() => {
        props.initChessboardData(row, col)
    }, [])

    return (
        <table className='chessboard'>
            <tbody>
                {
                    data.map((value, index) => <RowChessboard key={index} rowIndex={index} rowValue={value} />)
                }
            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    return {
      data: state.matrix.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initChessboardData: (row, col) => dispatch(initChessboard(row, col))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chessboard)