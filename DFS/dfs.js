const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  const visited = []; //탐색 마친 노드
  let needVisit = []; //탐색해야할 노드

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); //Lifo라 shift
    if (!visited.includes(node)) {
      visited.push(node); //깊이 우선  탐색 루트 짜기
      needVisit = [...graph[node], ...needVisit];
      console.log(needVisit);
    }
  }
  return visited;
};

console.log(DFS(graph, "A"));
