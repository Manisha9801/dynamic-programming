let weight = [1, 2, 4, 5, 6]; //kgs
let value = [10, 14, 8, 11, 33]; //rupees
let capacity = 30;

function maxProfitKnapsack(weight, value, capacity) {
  console.log(weight, value, capacity);
  if (!weight.length || capacity === 0) {
    return 0;
  } else if (weight[weight.length - 1] <= capacity) {
    return Math.max(
      value[weight.length - 1] +
        maxProfitKnapsack(
          weight.slice(0, weight.length - 1),
          value,
          capacity - weight[weight.length - 1]
        ),
      maxProfitKnapsack(weight.slice(0, weight.length - 1), value, capacity)
    );
  } else {
    return maxProfitKnapsack(
      weight.slice(0, weight.length - 1),
      value,
      capacity
    );
  }
}

console.log(maxProfitKnapsack(weight, value, capacity));
