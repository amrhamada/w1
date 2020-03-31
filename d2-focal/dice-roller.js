const diceRoller = (num) =>{
  let rolls = [];
  if (num < 0 ){
    return `Number must be greater than 0. You entered: ${num}`;
  }
  for (let i = 0; i < num; i++){
    rolls.push(Math.floor(Math.random() * Math.floor(7)));
  }

  return `Rolled ${num} dice: ${rolls.join(', ')}.`
};

const rolls = diceRoller(6);
console.log(rolls);