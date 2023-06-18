//1.Come upwith data structures which can represent input andoutput.
//2.Write a functionwhich can take a single parameter(input) andreturns(output).
//3.Write optimizedsolutions toreduce the number ofiterations -avoidgroupby.
// Input
const portfolio = [
  { name: "Mark", stock: "FB" },
  { name: "Steve", stock: "AAPL" },
  { name: "Tim", stock: "AAPL" },
  { name: "Steve", stock: "MSFT" },
  { name: "Bill", stock: "MSFT" },
  { name: "Bill", stock: "AAPL" },
];

function getResult(arr) {
  const obj = {};
  const stocksObj = {};
  for (let i = 0; i < arr.length; i++) {
    const { name, stock } = arr[i];
    if (!obj[name]) {
      obj[name] = [];
    }
    obj[name].push(stock);
    if (!stocksObj[stock]) {
      stocksObj[stock] = { stock, name: [], count: 0 };
    }
    stocksObj[stock].name.push(name);
    stocksObj[stock].count++;
  }
  const result = [];
  for (const stock in stocksObj) {
    const { name, count } = stocksObj[stock];
    result.push({ stock, name, count });
  }
  return result;
}

console.log(getResult(portfolio));

//Output
/*
 [
  { stock: 'FB', name: [ 'Mark' ], count: 1 },
  { stock: 'AAPL', name: [ 'Steve', 'Tim', 'Bill' ], count: 3 },
  { stock: 'MSFT', name: [ 'Steve', 'Bill' ], count: 2 }
]
*/
