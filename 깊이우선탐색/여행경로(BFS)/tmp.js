function solution(tickets) {
    let startIndex = ""
    const visited = []
    tickets.sort()
    tickets.find((value, index) => {
        startIndex = index
        return value[0] === "ICN"
    })
    const queue = [tickets[startIndex][1]]
    visited[startIndex] = true
    var answer = [tickets[startIndex][0], tickets[startIndex][1]]
    while (queue.length) {
        const destination = queue.shift()
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] === destination && !visited[i]) {
                queue.push(tickets[i][1])
                answer.push(tickets[i][1])
                visited[i] = true
                break
            }
        }
    }

    return answer
}

let a = [
    ["ATL", "ICN"],
    ["ATL", "SFO"],
    ["ICN", "ATL"],
    ["ICN", "SFO"],
    ["SFO", "ATL"],
]
let b = [2, 4]
let c = [2, 3, 4]
document.querySelector("#answer").innerHTML = solution(a)
