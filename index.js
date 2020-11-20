const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find( a => a.result === "W")
  return result ? result.year : undefined
}
