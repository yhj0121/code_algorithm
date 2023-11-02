function solution(progresses, speeds) {
  let answer = [];
  while (speeds.length > 0) {
    let cnt = 0;
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    while (progresses[0] >= 100) {
      // 맨앞의 progress배열이 100이 넘으면 shift
      progresses.shift();
      speeds.shift(); // speed도 shift
      cnt++;
    }
    if (cnt > 0) {
      answer.push(cnt);
    }
  }
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
