function solution(n, edge) {
    const connects = new Array(n).fill().map((_) => [])
    for (const e of edge) {
        connects[e[0] - 1].push(e[1] - 1)
        connects[e[1] - 1].push(e[0] - 1)
    }
    let stack = [1]
    let visited = [1]
    BFS(0, connects, visited, stack)
    const max = Math.max(...stack)
    return stack.filter((value) => value === max).length
}

const BFS = (startNode, connects, visited, stack) => {
    const queue = [startNode]

    while (queue.length) {
        let node = queue.shift()
        for (const next of connects[node]) {
            if (!visited[next]) {
                queue.push(next)
                visited[next] = true
                stack[next] = stack[node] + 1
            }
        }
    }
}
let a = 6
let b = [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
