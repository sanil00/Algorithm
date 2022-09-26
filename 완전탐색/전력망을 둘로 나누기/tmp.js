function solution(n, wires, c) {
    var answer = -1
    let min = n
    wires.forEach((wire, index) => {
        let newWiresArray = [...wires]
        let cutWires = newWiresArray.splice(index, 1)
        let visited = []

        let firstNetwork = BFS(cutWires[0][0], newWiresArray, visited, 1)
        let secondNetwork = BFS(cutWires[0][1], newWiresArray, visited, 1)

        let absNetwork = Math.abs(firstNetwork - secondNetwork)
        if (min > absNetwork) {
            min = absNetwork
        }
    })
    return min
}

const BFS = (startNode, wires, visited, count) => {
    const queue = [startNode]
    while (queue.length) {
        const firstNode = queue.shift()
        for (let i = 0; i < wires.length; i++) {
            if (!visited[i] && wires[i][0] === firstNode) {
                queue.push(wires[i][1])
                console.log(queue)
                visited[i] = true
                count++
            } else if (!visited[i] && wires[i][1] === firstNode) {
                queue.push(wires[i][0])
                console.log(queue)
                visited[i] = true
                count++
            }
        }
    }
    return count
}

let a = 9
let b = [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
]

let c = [
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
]
document.querySelector("#answer").innerHTML = solution(a, b, c)
