import { atom, Atom, useSetAtom, useAtom, PrimitiveAtom } from "jotai";
import { useEffect } from "react";
import { Cell } from "../components/types";
import { twoDimensionLooper } from "../utils";

const cellsAtom = atom(
  twoDimensionLooper(4, () => atom<Cell | {}>({}))
);

export const updateCell = atom(null, (get, set, newCellData: Cell) => {
  const selectedAtom = get(cellsAtom)[newCellData.row][newCellData.col];
  set(selectedAtom, (prev: Cell) => ({ ...prev, ...newCellData }));
});

export const useCells = () => {
  const [allCells] = useAtom(cellsAtom);
  const setCell = useSetAtom(updateCell);
  useEffect(() => {
    twoDimensionLooper(4, (row, col) => {
      let customOptions: Cell = {
        row,
        col,
      }
      if (row === 0 && col === 0) {
        // set first Cell
        customOptions = {
          ...customOptions,
          isFirstCell: true,
          isBlocked: false,
          hasReward: false,
        }
      } else if (row === 3 && col === 3) {
        // set last Cell
        customOptions = {
          ...customOptions,
          isFirstCell: false,
          isBlocked: false,
          hasReward: true,
        };
      } else {
        // set random values for all other rows & cols
        customOptions = {
          ...customOptions,
          isFirstCell: false,
          hasReward: false,
          isBlocked: Math.random() < 0.2,
        };
      }
      setCell(customOptions)
    })
  }, [setCell]);

  return [allCells];
};
