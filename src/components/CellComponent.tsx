import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellProps {
  cell: Cell
  selected: boolean;
  onCellClick: (cell: Cell) => void
}

export const CellComponent: FC<CellProps> = ({cell, selected, onCellClick}) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => onCellClick(cell)}
      style={{background: cell.available && cell.figure ? "red" : ""}}
    >
      {cell.available && !cell.figure && <div className={"available"}/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
    </div>
  );
};
