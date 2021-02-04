import {FC, useState} from 'react';
import { Board } from './BoardFC';
import { calculateWinner } from './calculateWinner';
import { MuiTheme, makeStyles } from 'cae-storybook/dist/theme';
import { Button } from '@material-ui/core';

interface GameProps {
  color: "secondary" | "primary";
  squareColor: "secondary" | "primary" | "default";
}

interface GameState {
  history: { squares: any }[],
  stepNumber: number,
  xIsNext: boolean,
}

const useStyles = makeStyles<MuiTheme>(Theme => ({
  game: {
    padding: Theme.spacing(5),
    display: "flex",
    flexWrap: "wrap"
  }
}))

export const Game: FC<GameProps> = (props: GameProps) => {
  const [state, setState] = useState<GameState>({
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
  });

  useStyles()

  const current = state.history[state.stepNumber]
  const moves = state.history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <Button variant="outlined" onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });

  }

  const winner = calculateWinner(current.squares);
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  const jumpTo = (step: number) => {
    setState({
      history: state.history.slice(0, step + 1),
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board

          squareColor={props.squareColor}
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>``
      </div>
    </div>
  );
}