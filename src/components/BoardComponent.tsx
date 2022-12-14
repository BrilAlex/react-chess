import {Board} from "../models/Board";
import {FC, Fragment, useEffect, useState} from "react";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

export const BoardComponent: FC<BoardProps> = (
  {board, setBoard, currentPlayer, swapPlayer}
) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightAvailableCells();
  }, [selectedCell]);

  function onCellClick(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      swapPlayer();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  function updateBoard () {
    const newBoard = board.getBoardCopy();
    setBoard(newBoard);
  }

  function highlightAvailableCells() {
    board.highlightAvailableCells(selectedCell);
    updateBoard();
  }

  return (
    <div>
      <h3>Current player: {currentPlayer?.color}</h3>
      <div className={"board"}>
        {board.cells.map((row, i) =>
          <Fragment key={i}>
            {row.map(cell =>
              <CellComponent
                key={cell.id}
                cell={cell}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                onCellClick={onCellClick}
              />
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};
