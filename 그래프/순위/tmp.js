function solution(n, results) {
    var answer = 0
    let defeat = new Array(n + 1).fill().map(() => [])
    results.forEach((result) => {
        defeat[result[1]].push(result[0])
    })
    console.log(defeat)
    return answer
}

const DFS = (node, defeat,stack) => {
    const queue = [node]
    
    while (queue.length) {
        let firstNode = queue.shift()

        for (const lose of defeat) {
            if (!visited[lose]) {
                visited[lose] = true
                stack[firstNode]= defeat.length
            }
        }
    }
}
let a = 5
let b = [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a, b)
