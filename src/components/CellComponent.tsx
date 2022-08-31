import {Cell} from "../models/Cell";
import {FC} from "react";

interface CellProps {
  cell: Cell
}

export const CellComponent: FC<CellProps> = ({cell}) => {
  return (
    <div className={["cell", cell.color].join(" ")}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name}/>}
    </div>
  );
};
