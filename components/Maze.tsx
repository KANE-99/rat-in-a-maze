import styles from "./Maze.module.css";
import Cell from "./Cell";
import { useCells } from "../hooks/useCell";

const Maze = () => {
  const [cells] = useCells();

  // const startPosition = [1, 1];
  // const isFirstCell = (row: number, col: number) =>
  //   startPosition[0] === row && startPosition[1] === col;
  // const hasReward = (row: number, col: number) => row === 4 && col === 4;
  return (
    <div className={styles.maze_main}>
      <div className={styles.Maze}>
        {[0, 1, 2, 3].map((rowEle) => {
          return [0, 1, 2, 3].map((colEle) => {
            return (
              // <>
              //   {rowEle} - {colEle}
              // </>
              <Cell key={`${rowEle}_${colEle}`} cell={cells[rowEle][colEle]} />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Maze;
