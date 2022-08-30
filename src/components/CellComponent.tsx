import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellProps {
  cell: Cell
}

export const CellComponent: FC<CellProps> = ({cell}) => {
  return (
    <div className={["cell", cell.color].join(" ")}></div>
  );
};