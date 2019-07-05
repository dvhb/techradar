const padEnd = (arr, targetLength, padString) =>
  arr.length >= targetLength ? arr : padEnd([...arr, padString], targetLength, padString)

module.exports = {
  padEnd
}
