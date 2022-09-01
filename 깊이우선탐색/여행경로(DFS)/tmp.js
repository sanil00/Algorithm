function solution(tickets) {
    let answer = []
    const visited = []
    tickets.sort()
    DFS("ICN", visited, tickets, answer)

    return answer
}

const DFS = (startNode, visited, tickets, answer) => {
    answer.push(startNode)

    if (answer.length === tickets.length + 1) {
        return true
    }
    for (let i = 0; i < tickets.length; i++) {
        if (startNode === tickets[i][0] && !visited[i]) {
            visited[i] = true
            if (DFS(tickets[i][1], visited, tickets, answer)) {
                return true
            }

            visited[i] = false
        }
    }
    answer.pop()
    return false
}

let a = [
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
