import styles from './Cell.module.css'

interface CellProps {
    isBlocked: boolean,
    isFirstCell: boolean,
    hasReward: boolean
}

const Cell = (props: CellProps) => {
    const { isBlocked = false, isFirstCell, hasReward } = props;
    const wrapperClasslist = [styles.Cell]
    if (!isFirstCell && !hasReward && isBlocked) wrapperClasslist.push(styles.Blocked)
    return <div className={wrapperClasslist.join(" ")}>
        {isFirstCell && <div className={styles.JerryInside}></div>}
        {hasReward && <div className={styles.CheeseInside}></div>}
    </div>
}


export default Cell;