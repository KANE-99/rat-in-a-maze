import styles from "./Maze.module.css";
import Cell from "./Cell";
import { useCells } from "../hooks/useCell";
import { twoDimensionLooper } from "../utils";


const Maze = () => {
  const [cells] = useCells();

  return (
    <div className={styles.maze_main}>
      <div className={styles.Maze}>
        {twoDimensionLooper(4, (rowI, colI) => {
          return <Cell key={`${rowI}_${colI}`} cell={cells[rowI][colI]} />
        })}
      </div>
    </div>
  );
};

export default Maze;
