var katzDeliLine = []

function takeANumber(katzDeliLine) {
  katzDeliLine.push(katzDeliLine.length + '1');
  return("You are number ${katzDeliLine.length + '1'} in line.`);
}

function nowServing(katzDeliLine) { //katzDeliLine = ["Nicole"]
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

var line = [];
 
function currentLine(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  else
  return(`The line is currently:` + line);
}