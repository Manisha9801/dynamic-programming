//using recursion

function fibonacciNumber(num) {
  if (num < 2) return num;
  return fibonacciNumber(num - 1) + fibonacciNumber(num - 2);
}

//Memoization of the recursion top-down approach 
//Here we solve the top-problem first and then solve the sub-problem
function fibonacciWithMemoization(num) {
  const memoize = [];
  function fibonacci(num) {
    if (num < 2) return num;
    if (memoize[num]) return memoize[num];
    memoize[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return memoize[num];
  }
  return fibonacci(num);
}

//Tabulation bottom-up approach --No recursion
//Here we solve all the sub-problems first then reach to the top-problem
function fibonacciWithoutRecusion(num) {
    const fb = [0,1]
    for(let i=2 ; i<=num ; i++) {
        fb[i] = fb[i-1] + fb[i-2]
    }
    return fb[num]
}

console.log(fibonacciNumber(0), fibonacciWithMemoization(0), fibonacciWithoutRecusion(0))
console.log(fibonacciNumber(1), fibonacciWithMemoization(1), fibonacciWithoutRecusion(1))
console.log(fibonacciNumber(2), fibonacciWithMemoization(2), fibonacciWithoutRecusion(2))
console.log(fibonacciNumber(3), fibonacciWithMemoization(3), fibonacciWithoutRecusion(3))
console.log(fibonacciNumber(4), fibonacciWithMemoization(4), fibonacciWithoutRecusion(4))
