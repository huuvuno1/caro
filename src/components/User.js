import React from 'react';
import PropTypes from 'prop-types';
import user1 from '../static/user1.png'
import user2 from '../static/user2.png'

User.propTypes = {
    
};

function User(props) {
    const { isFlip, symbol, your_turn } = props
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                color: symbol === 'X' ? 'red' : 'green'
            }}>{symbol}</h1>
            <img src={isFlip ? user1 : user2} style={{
                border: your_turn ? '6px solid blue' : '6px solid transparent'
            }} />
        </div>
    );
}

export default User;