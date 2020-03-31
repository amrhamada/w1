const args = process.argv.slice(2);

let sum = (x,y) => {
  return x + y;
};

console.log(sum(Number(args[0]), Number(args[1])));