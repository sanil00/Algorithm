function solution(n, computers) {
    let answer = 0
    let visited = []
    let network = 0
    const dfs = (node) => {
        visited[node] = true
        for (let j = 0; j < computers.length; j++) {
            if (!visited[j] && computers[node][j] === 1) {
                dfs(j)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i)
            network++
        }
    }

    return network
}
let a = 3
let b = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
