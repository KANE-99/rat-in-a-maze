export const twoDimensionLooper = (n: number, returnRowColIndex: (row: number, col: number) => any) => {
  return [...Array.from(Array(n).keys())].map((rowEle) => {
    return [...Array.from(Array(n).keys())].map((colEle) => {
      return returnRowColIndex(rowEle, colEle)
    })
  })
}