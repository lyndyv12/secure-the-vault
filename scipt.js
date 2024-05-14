// declaring each number in the combination as a variable
const numberOne = 5+5
const numberTwo = 4*10
const numberThree = 40-1

// this creates a string for only the combination
let combination=numberOne+'-'+numberTwo+'-'+numberThree

// this concatonates the requested copy with the actual message
secretmessage = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination:' + combination

// pops up the secret message
alert(secretmessage)