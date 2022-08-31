import {Board} from "../models/Board";
import {FC, Fragment, useEffect, useState} from "react";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightAvailableCells();
  }, [selectedCell]);

  function onCellClick(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
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
  );
};
