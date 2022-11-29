export interface Cell {
    row: number,
    col: number,
    isBlocked?: boolean,
    isFirstCell?: boolean,
    hasReward?: boolean
}