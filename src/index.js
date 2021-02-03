
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0) return []
  return matrix.reduce((acc, item, index)=>{
    index % 2 == 0 ? acc.push(...item) : acc.push(...item.reverse())    
    return acc
  }, [])
}
