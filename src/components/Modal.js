import React from 'react';
import PropTypes from 'prop-types';

import { initChessboard } from '../redux/matrix/matrix.actions'
import { connect } from 'react-redux'
import { initMatch } from '../redux/match/match.action';

Modal.propTypes = {
    
};

function Modal(props) {
    const {sysbol = 'X', end_game} = props
    const handleChange = (event) => {
        console.log('eeee', event.target.checked)
        if (!event.target.checked) {
            props.initChessboard()
            props.initMatch()
        }
    }

    return (
        <>
            <input type='checkbox' id='toggle' hidden onChange={handleChange} checked={end_game} />
            <label htmlFor='toggle' style={{
                position: 'fixed',
                userSelect: 'none',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgb(0, 0, 0, 0.3)'
            }}>
                <div style={{
                    marginTop: 50,
                    width: 500,
                    height: 100,
                    borderRadius: 10000,
                    backgroundColor: 'white',
                    textAlign: 'center',
                    fontSize: 30,
                    color: 'green',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Người chơi {sysbol} thắng
                </div>
            </label>
        </>
    );
}

const mapStateToProps = state => {
    return {
        end_game: state.match.isStop,
        sysbol: state.match.user_win
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initChessboard: () => dispatch(initChessboard(15, 15)),
        initMatch: () => dispatch(initMatch('X', 'O'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);