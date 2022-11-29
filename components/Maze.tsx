import styles from "./Maze.module.css";
import Cell from "./Cell"

const Maze = () => {
    const startPosition = [1,1]
    const isFirstCell = (row: number, col: number) => startPosition[0] === row && startPosition[1] === col
    const hasReward = (row: number, col: number) => row === 4 && col === 4
  return (
    <div className={styles.maze_main}>
      <div className={styles.Maze}>
          {[1,2,3,4].map((rowEle) => {
              return [1,2,3,4].map(colEle => {
                return (
                <Cell 
                    key={rowEle+colEle+''} 
                    isBlocked={Math.random() < .2 } 
                    isFirstCell={isFirstCell(rowEle, colEle)}
                    hasReward={hasReward(rowEle, colEle)}
                />)
            })
          })}
      </div>
    </div>
  );
};

export default Maze;
