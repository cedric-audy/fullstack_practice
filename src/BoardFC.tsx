import {FC} from 'react';
import { Square } from './square';

interface BoardProps {
    squareColor: string,
    squares: number[],
    onClick: Function
  }
  
export const Board: FC<BoardProps> = (props: BoardProps) => {
  
    const renderSquare = (i: number) => {
      return (
        <Square
          color={props.squareColor}
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />
      );
    }
  
  
    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  
  }