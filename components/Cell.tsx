import styles from "./Cell.module.css";
import { PrimitiveAtom, useAtom } from "jotai";
import { Cell } from "./types";

const Cell = (props: { cell: PrimitiveAtom<Cell> }) => {
  const [{isBlocked = false, isFirstCell, hasReward}] = useAtom(props.cell);
  const wrapperClasslist = [styles.Cell];
    if (!isFirstCell && !hasReward && isBlocked)
      wrapperClasslist.push(styles.Blocked);
  return (
    <div className={wrapperClasslist.join(" ")}>
      {isFirstCell && <div className={styles.JerryInside}></div>}
      {hasReward && <div className={styles.CheeseInside}></div>}
    </div>
  );
};

export default Cell;
