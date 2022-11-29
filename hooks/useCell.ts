import { atom, Atom, useSetAtom, useAtom, PrimitiveAtom } from "jotai";
import { useEffect } from "react";
import { Cell } from "../components/types";

const cellsAtom = atom(
  Array(4)
    .fill({})
    .map(() =>
      Array(4)
        .fill({})
        .map((ele: Cell) => atom(ele))
    )
);

export const updateCell = atom(null, (get, set, newCellData: Cell) => {
  const selectedAtom = get(cellsAtom)[newCellData.row][newCellData.col];
  set(selectedAtom, (prev: Cell) => ({ ...prev, ...newCellData }));
});

export const useCells = () => {
  const [allCells] = useAtom(cellsAtom);
  const setCell = useSetAtom(updateCell);
  useEffect(() => {
    [0, 1, 2, 3].map((row) => {
      [0, 1, 2, 3].map((col) => {
        if (row === 0 && col === 0) {
          // set first Cell
          setCell({
            row,
            col,
            isFirstCell: true,
            isBlocked: false,
            hasReward: false,
          });
        } else if (row === 3 && col === 3) {
          // set last Cell
          setCell({
            row,
            col,
            isFirstCell: false,
            isBlocked: false,
            hasReward: true,
          });
        } else {
          // set random values for all other rows & cols
          setCell({
            row,
            col,
            isFirstCell: false,
            hasReward: false,
            isBlocked: Math.random() < 0.2,
          });
        }
      });
    });
  }, [setCell]);

  return [allCells];
};
