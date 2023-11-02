function solution(k, tangerine) {
  var answer = 0;
  let sum = 0;
  let obj = {};
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  const kind = Object.values(obj).sort((a, b) => b - a);

  for (const num of kind) {
    sum += num;
    answer++;

    if (sum >= k) {
      return answer;
    }
  }
}

console.log(solution(5, [1, 3, 2, 5, 4, 5, 2, 3]));
