import {Board} from "../models/Board";
import {FC, Fragment} from "react";
import {CellComponent} from "./CellComponent";

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

export const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  return (
    <div className={"board"}>
      {board.cells.map((row, i) =>
        <Fragment key={i}>
          {row.map(cell =>
            <CellComponent key={cell.id} cell={cell}/>
          )}
        </Fragment>
      )}
    </div>
  );
};