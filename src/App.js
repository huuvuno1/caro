import logo from './logo.svg';
import './App.css';
import Chessboard from './components/Chessboard';
import User from './components/User';
import { setYourSymbol } from './redux/match/match.action'
import { connect } from 'react-redux'
import Modal from './components/Modal';

function App(props) {
  const {user1, user2} = props
  return (
    <>
      <User isFlip {...user1} />
      <Chessboard row={15} col={15} />
      <User isFlip={false} {...user2} />
      <Modal />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user1: {
      symbol: state.match.your_symbol,
      your_turn: state.match.your_turn
    },
    user2: {
      symbol: state.match.opponent_symbol,
      your_turn: state.match.opponent_turn
    },
  }
}

export default connect(mapStateToProps)(App);
