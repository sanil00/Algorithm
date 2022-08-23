function solution(tickets) {
    let startIndex = ""
    const visited = []
    tickets.sort()
    console.log(tickets)
    tickets.find((value, index) => {
        startIndex = index
        return value[0] === "ICN"
    })
    const queue = [tickets[startIndex][1], visited]
    visited[startIndex] = true
    var answer = [tickets[startIndex][0], tickets[startIndex][1]]
    while (queue.length) {
        const destination = queue.shift()
        tickets.map(([currentDest, nextDest], index) => {
            if (currentDest === destination && !visited[index]) {
                console.log(nextDest)
                queue.push(nextDest)
                answer.push(nextDest)
                visited[index] = true
            }
        })
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
