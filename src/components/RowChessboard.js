import React from 'react';
import PropTypes from 'prop-types';
import CellChessboard from './CellChessboard';

RowChessboard.propTypes = {
    
};

function RowChessboard(props) {
    const { rowIndex, rowValue } = props
    return (
            <tr>
                {
                    rowValue.map((value, index) => <CellChessboard rowIndex={rowIndex} cellIndex={index} key={index} value={value}/>)
                }
            </tr>
    );
}

export default RowChessboard;